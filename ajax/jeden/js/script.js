"use strict";

function pobierzDane(event) {
//    var requestURL = 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl';
    
//    ajax({
//        type:"GET",
//        url: requestURL,
//        onError: function(statusText){
//            console.log(statusText);
//        },
//        onSuccess:function(data){
//            var jsonObj = JSON.parse(data);
//            console.log(jsonObj);
//            console.log(jsonObj.userId);
//            
//            var element = document.createElement('p');
//            element.innerHTML = "User ID: " + jsonObj.userId;
//            document.body.appendChild(element);
//            
//            var element2 = document.createElement('p');
//            element2.innerHTML = "User Name: " + jsonObj.userName;
//            document.body.appendChild(element2);
//            
//            var element3 = document.createElement('p');
//            element3.innerHTML = "User URL: " + jsonObj.userURL;
//            document.body.appendChild(element3);
//            
//        }
//    });

    $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',function(data){
        console.log(data);
    });

}

function ajax(ajaxOptions){
    
    var options = {
        httpMethod : ajaxOptions.type || "POST",
        url: ajaxOptions.url || "",
        onComplete: ajaxOptions.onComplete || function(){},
        onError: ajaxOptions.onError || function (){},
        onSuccess: ajaxOptions.onSuccess || function (){},
        dataType: ajaxOptions.dataType || "text"
    }
    
    var xmlHttpRequest = new XMLHttpRequest();
    
    xmlHttpRequest.open(options.httpMethod, options.url, true);
    
    xmlHttpRequest.onreadystatechange = function() {
        if(xmlHttpRequest.readyState == 4){
            if(httpSuccess(xmlHttpRequest)){
                var returnData = (options.dataType == "xml") ? xmlHttpRequest.responseXML: xmlHttpRequest.responseText;
                
                options.onSuccess(returnData);
                xmlHttpRequest = null;
            } else {
                options.onError(xmlHttpRequest.statusText);
            }
            
        }
    }
    
    xmlHttpRequest.send();
    
    // funkcja sprawdzająca czy jest ok
    function httpSuccess (httpRequest) {
        try {
            return(httpRequest.status >= 200 &&
            httpRequest.status < 300 ||
            httpRequest.status == 304 ||
                  navigator.userAgent.indexOf("Safari")>= 0 && typeof httpRequest.status == "undefined");
        
        } catch(e) {
            return false;
        }
    }
}