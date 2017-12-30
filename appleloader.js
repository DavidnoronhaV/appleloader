//Apple Loader JS 2017
var echo = 'https://cdn.rawgit.com/toddmotto/echo/058dffd3/src/echo.js';
var gram = 'css/gram.css'
function loadjsapple(name) {
    "use strict";
    var script = document.createElement('script');
    script.onload = function () {
        console.log("Module loaded and ready");
        //Issue Onload Commands Here Of All Commands
        execute();
    };
    script.src = name;
    script.type = 'text/javascript';
    script.id = 'applemodule';
    document.getElementsByTagName('head')[0].appendChild(script);
    }
function loadcssapple(name) {
    "use strict";
    var link = document.createElement('link');
    link.onload = function () {
        console.log("Module loaded and ready"); 
    };
    link.rel = 'stylesheet'; 
    link.href = name;
    document.getElementsByTagName('head')[0].appendChild(link);
}
function execute() {
    //Script Execute Code
    echo.init();
}


