var baseUrl = "http://159.203.181.233";
var upApiCall = "/command/up";
var stopApiCall = "/command/stop";
var downApiCall = "/command/down";

$("#up").click(function () {


    console.log("Up");
    controlFunctions("up");


});

$("#stop").click(function () {


    console.log("Stop");
    controlFunctions("stop");


});

$("#down").click(function () {


    console.log("Down");
    controlFunctions("down");


});


function controlFunctions(func) {
    "use strict";
    var apiCall = "";

    if (func === "up") {
        apiCall = upApiCall;
    } else if (func === "stop") {
        apiCall = stopApiCall;
    } else if (func === "down") {
        apiCall = downApiCall;
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
            console.log('Message Sent Successfully');
        },
        error: function (data) {

            console.error('ERROR: while dealing with function execution.');

        }, timeout: 5000

    });
}