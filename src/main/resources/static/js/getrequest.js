$(document).ready(function() {
    var url = window.location;

    $("#getResBtn").click(function(event) {
        event.preventDefault();
        ajaxGet();
    });
});

function ajaxGet() {
    var taskInput = $("#taskText").val();
    $.ajax({
        type: "POST",
        url: "/gettaskresult",
        contentType: "application/json",
        data: JSON.stringify({
            input: taskInput
        }),
        dataType: 'json',
        complete: function(result) {
            $(".outputTask").html('<p>Решение: ' + result.responseText + '</p>')
        },
        error: function(e) {
            $("#taskRes").html("<strong> Error: " + e.responseText + "</strong>");
        }
    })
}