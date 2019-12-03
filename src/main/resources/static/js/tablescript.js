$(document).ready(function() {

 const favDialog = $('#favDialog');
 const selectEl = $('#select')[0];
 const confirmBtn = $('#confirmBtn');
 const $tableID = $('#table');
 const $BTN = $('#export-btn');
 const $EXPORT = $('#export');

 const newTr = `
<tr class="hide">
  <td class="pt-3-half" contenteditable="true"><p id="field1"></p></td>
  <td class="pt-3-half" contenteditable="true"></td>
  <td class="pt-3-half" contenteditable="true"></td>
  <td class="pt-3-half" contenteditable="true"></td>
  <td>
    <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0 waves-effect waves-light">Удалить</button></span>
    <span class="table-edit"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0 waves-effect waves-light">Редактировать</button></span>
  </td>
</tr>`;

// "Favorite animal" input sets the value of the submit button
//selectEl.addEventListener('change', function onSelect(e) {
//    confirmBtn.value = selectEl.value;
//});
      // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
$( "#favDialog" ).dialog({
  autoOpen: false
});

favDialog.dialog({
    beforeClose: function() {

    var outputBox = document.getElementById('field1');

    const $clone = $tableID.find('tbody tr').last().clone(true).removeClass('hide table-line');

    if ($tableID.find('tbody tr').length === 0) {
        $('tbody').append(newTr);
    }

   $tableID.find('table').append($clone);
   }

})
//$('#dialog').dialog('close');

 $('.table-add i').on('click', () => {
      favDialog.show();

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
