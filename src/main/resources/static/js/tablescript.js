$(document).ready(function() {

 const favDialog = $('#favDialog');
 const selectEl = $('#select')[0];
 const confirmBtn = $('#confirmBtn');
 const $tableID = $('#table');
 const $BTN = $('#export-btn');
 const $EXPORT = $('#export');

function saveToHtml(resultID, an, dn, rd, m) {
 var newTr = `
<tr class="hide" id=${resultID}>
  <td class="pt-3-half td1">${an}</td>
  <td class="pt-3-half td2">${dn}</td>
  <td class="pt-3-half td3">${rd}</td>
  <td class="pt-3-half td4">${m}</td>
  <td>
    <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0 waves-effect waves-light">Удалить</button></span>
    <span class="table-edit"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0 waves-effect waves-light">Редактировать</button></span>
  </td>
</tr>`;

    $tableID.find('table').append(newTr);
}

function ajaxPost() {
var taskInput = {
        appName: $(".appName").val(),
        teamName: $(".developerName").val(),
        releaseDate: $(".releaseDate").val(),
        money: $(".money").val()
    }

    console.log(taskInput)

    $.ajax({
    type: "POST",
    url: "/savedatatotable",
    contentType: "application/json",
    data: JSON.stringify(taskInput),
    dataType : 'json',
    complete: function(result) {
        console.log(result);

        $("#tableinfo")[0].reset()
        saveToHtml(result.responseJSON.resultID, taskInput.appName, taskInput.teamName, taskInput.releaseDate, taskInput.money)
        alert("Saved!")
    },
    error: function(e) {
    $("#taskRes").html("<strong> Error: "+  e.responseText +"</strong>");
     }
    })
}

// "Favorite animal" input sets the value of the submit button
//selectEl.addEventListener('change', function onSelect(e) {
//    confirmBtn.value = selectEl.value;
//});



//$('#dialog').dialog('close');


 $('.table-add i').on('click', () => {

    $("#favDialog").fadeIn()


 });

 $("#confirmBtn").on("click",() => {
    $("#favDialog").fadeOut()
    ajaxPost();

 });

 $tableID.on('click', '.table-remove', function () {

   $(this).parents('tr').detach();
 });


 $tableID.on('click', '.table-up', function () {

   const $row = $(this).parents('tr');

   if ($row.index() === 1) {
     return;
   }

   $row.prev().before($row.get(0));
 });

 $tableID.on('click', '.table-down', function () {

   const $row = $(this).parents('tr');
   $row.next().after($row.get(0));
 });

 // A few jQuery helpers for exporting only
 jQuery.fn.pop = [].pop;
 jQuery.fn.shift = [].shift;

 $BTN.on('click', () => {

   const $rows = $tableID.find('tr:not(:hidden)');
   const headers = [];
   const data = [];

   // Get the headers (add special header logic here)
   $($rows.shift()).find('th:not(:empty)').each(function () {

     headers.push($(this).text().toLowerCase());
   });

   // Turn all existing rows into a loopable array
   $rows.each(function () {
     const $td = $(this).find('td');
     const h = {};

     // Use the headers from earlier to name our hash keys
     headers.forEach((header, i) => {

       h[header] = $td.eq(i).text();
     });

     data.push(h);
   });

   // Output the result
   $EXPORT.text(JSON.stringify(data));
 });
 })


