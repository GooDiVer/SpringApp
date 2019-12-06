$(document).ready(function() {

    const favDialog = $("#favDialog");
    const selectEl = $("#select")[0];
    const confirmBtn = $("#confirmBtn");
    const $tableID = $("#table");
    const $EXPORT = $("#export");

    function saveToHtml(resultID, an, dn, rd, m) {
        var newTr = `
            <tr class="hide" id=${resultID}>
              <td class="pt-3-half" id = "td1${resultID}" contenteditable="true">${an}</td>
              <td class="pt-3-half" id = "td2${resultID}" contenteditable="true">${dn}</td>
              <td class="pt-3-half" id = "td3${resultID}" contenteditable="true">${rd}</td>
              <td class="pt-3-half" id = "td4${resultID}" contenteditable="true">${m}</td>
              <td>
                <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0 waves-effect waves-light">Удалить</button></span>
                <span class="table-edit"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0 waves-effect waves-light">Редактировать</button></span>
              </td>
            </tr>
            `

        $tableID.find("table").append(newTr);
    }

    function ajaxPost() {
        var taskInput = {
            appName: $(".appName").val(),
            teamName: $(".developerName").val(),
            releaseDate: $(".releaseDate").val(),
            money: $(".money").val()
        }

        $.ajax({
            type: "POST",
            url: "/savedatatotable",
            contentType: "application/json",
            data: JSON.stringify(taskInput),
            dataType: "json",
            complete: function(result) {
                console.log(result);
                $("#tableinfo")[0].reset()
                saveToHtml(result.responseJSON.resultID, taskInput.appName, taskInput.teamName, taskInput.releaseDate, taskInput.money)
            },
            error: function(e) {
                $("#taskRes").html("<strong> Error: " + e.responseText + "</strong>");
            }
        })
    }

    function ajaxPostUpdate(taskInput, id) {

        $.ajax({
            type: "PUT",
            url: "/updatedata/" + id,
            contentType: "application/json",
            data: JSON.stringify(taskInput),
            dataType: "json",
            complete: function(result) {},
            error: function(e) {
                $("#taskRes").html("<strong> Error: " + e.responseText + "</strong>");
            }
        })
    }

    function ajaxPostDelete(id) {

        $.ajax({
            type: "DELETE",
            url: "/deletedata/" + id,
            contentType: "application/json",
            complete: function(result) {},
            error: function(e) {
                $("#taskRes").html("<strong> Error: " + e.responseText + "</strong>");
            }
        })
    }

    $(".table-add").on("click", "i", () => {

        $("#favDialog").fadeIn()

    });

    $("#confirmBtn").on("click", () => {
        $("#favDialog").fadeOut()
        ajaxPost();
    });


    $tableID.on("click", ".table-edit", function() {

        var raw_id = $(this).closest("tr").attr("id");

        var first = $("#td1" + raw_id).html()
        var second = $("#td2" + raw_id).html()
        var third = $("#td3" + raw_id).html()
        var fourth = $("#td4" + raw_id).html()

        var taskInput = {
            appName: first,
            devName: second,
            releaseDate: third,
            money: fourth,
        }

        ajaxPostUpdate(taskInput, raw_id)
    })

    $tableID.on("click", ".table-remove", function() {
        var raw_id = $(this).closest("tr").attr("id");
        $(this).parents("tr").detach();
        ajaxPostDelete(raw_id)
    });
})