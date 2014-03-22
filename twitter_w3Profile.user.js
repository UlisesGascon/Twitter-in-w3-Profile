// ==UserScript==
// @name          Twitter in my w3Profile v1
// @namespace     https://w3-connections.ibm.com/profiles/html/myProfileView.do?lang=en
// @description   Twitter in my w3Profile v1 by Ulises Gascon
// @include       https://w3-connections.ibm.com/profiles/html/myProfileView.do?lang=en
// ==/UserScript==

var $;

// Add jQuery
    (function(){
        if (typeof unsafeWindow.jQuery == 'undefined') {
            var GM_Head = document.getElementsByTagName('head')[0] || document.documentElement,
                GM_JQ = document.createElement('script');
    
            GM_JQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
            GM_JQ.type = 'text/javascript';
            GM_JQ.async = true;
    
            GM_Head.insertBefore(GM_JQ, GM_Head.firstChild);
        }
        GM_wait();
    })();

// Check if jQuery's loaded 
function GM_wait() { 
    if(typeof unsafeWindow.jQuery == 'undefined') 
{ window.setTimeout(GM_wait,100); } 
        else { $ = unsafeWindow.jQuery; letsJQuery(); } 
} 
GM_wait(); 


// All your GM code must be inside this function
    function letsJQuery() {
        $("#disclaimerId").empty().html("Twitter Rocks!");
        $("#disclaimer").empty().html("<iframe src='https://ibm.biz/BdRnSY' frameborder='0' height='680' scrolling='no' width='100%'></iframe>");      
    }
    
GM_addStyle("#GlobalLeadershipSection {display: none !important;}");
GM_addStyle("#reportStructureSection {display: none !important;}");
GM_addStyle("#businessCardActions {display: none !important;}");
GM_addStyle("#businessCardDetails {display: none !important;}");