function runPyScript(input)
{
    var jqXHR = $.ajax({
        type: "GET",
        url: "http://127.0.0.1:5000/",
        async: false,
        data: { mydata: input }
    });

    return jqXHR.responseText;
}