var baseUrl="http://localhost:9000";
var upApiCall="/command/up";
var stopApiCall="/command/stop";
var downApiCall="/command/down";

$("#up").click(function(){


    alert("Up");
    controlFunctions("up");


});

$("#stop").click(function(){


    alert("Stop");
    controlFunctions("stop");


});

$("#down").click(function(){


    alert("Down");
    controlFunctions("down");


});


function controlFunctions(func) {
"use strict";
    var apiCall="";

    if(func==="up"){
        apiCall=upApiCall;
    }else if(func==="stop"){
        apiCall=stopApiCall;
    }else if(func==="down"){
        apiCall=downApiCall;
    }


    $.ajax({
        type: 'GET',
        url: baseUrl + apiCall,
        crossDomain: true,
        dataType: "text",
        jsonp: "jsoncallback",
        jsonpCallback: "SMS",
        cache: true,
        success: function (data) {
            alert('Message Sent Successfully');
        },
        error: function (data) {

            alert('ERROR: while dealing with function execution.');

        }, timeout: 5000

    });
}