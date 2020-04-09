
$('#btn').click(function (e) { 
    e.preventDefault();
    e.stopPropagation();
    $.ajax({
        type: "GET",
        url: "https://weather-forecast-b8dbe.firebaseio.com/Countries.json",
        data: "data",
        dataType: "json",
        success: function (response) {
            result(response);         
        }
    });

    function result(response) {
        console.log(response);
        
    }
    
});

