// ==UserScript==
// @name         Website blocklist
// @namespace    https://github.com/JKaerts/SoberWebsites
// @version      1.1
// @description  My personal blocklist
// @author       Jonas Kaerts
// @match        https://*.reddit.com/*
// @match        https://*.ycombinator.com/*
// @match        https://*.algolia.com/*
// @match        https://lobste.rs/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Entirely clear the body
    var body = document.body;
    body.innerHTML = "";
})();
