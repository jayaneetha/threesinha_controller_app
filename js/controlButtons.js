var baseUrl = "http://159.203.181.233";
var upApiCall = "/command/up";
var stopApiCall = "/command/stop";
var downApiCall = "/command/down";
//
// $("#up").click(function () {
//
//
//     console.log("Up");
//     controlFunctions("up");
//
//
// });
//
// $("#stop").click(function () {
//
//
//     console.log("Stop");
//     controlFunctions("stop");
//
//
// });
//
// $("#down").click(function () {
//
//
//     console.log("Down");
//     controlFunctions("down");
//
//
// });

function controlFunctions(func) {
    // "use strict";
    var apiCall = "";

    if (func === "up") {
        apiCall = upApiCall;
    } else if (func === "stop") {
        apiCall = stopApiCall;
    } else if (func === "down") {
        apiCall = downApiCall;
    }


    var url = baseUrl + apiCall;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log('Message Sent Successfully');

        } else if (this.readyState == 4) {
            console.error('ERROR: while dealing with function execution.');

        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}