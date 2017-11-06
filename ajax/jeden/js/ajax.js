'use strict';

//definicja funkcji ajax
function ajax(ajaxOptions){
    
    var options = {
        httpMetod : ajaxOptions.type || "POST",
        url: ajaxOptions.url || "",
        onComplete: ajaxOptions.onComplete || function(){},
        onError: ajaxOptions.onError || function (){},
        onSuccess: ajaxOptions.onSuccess || function (){},
        dataType: ajaxOptions || "text"
    }
    
    var xmlHttpRequest = new XMLHttpRequest();
    
    xmlHttpRequest.open(options.httpMethod, options.url, true);
    
    xmlHttpRequest.onreadystatechange = function() {
        if(xmlHttpRequest.readyState == 4){
            if(httpSuccess(xmlHttpRequest)){
                var returnData = (options.dataType == "xml") ? xmlHttpRequest.responseXML:
                
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