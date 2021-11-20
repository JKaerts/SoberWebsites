// ==UserScript==
// @name         Youtube cleaner
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes cruft from youtube
// @author       You
// @grant        none
// @include      *.youtube.com/*
// ==/UserScript==

(function() {
    'use strict';

    function hideElements(selector) {
        const elements = document.querySelectorAll(selector);
        for (const el of elements) {
            el.innerHTML = '';
        }
    }

    // related videos
    hideElements('#related');
    
    // view counts
    hideElements('.view-count');
    hideElements('.short-view-count');
    
    // like-dislike bar
    hideElements('ytd-sentiment-bar-renderer');
    
    // tiles with related videos after video
    hideElements('.ytp-endscreen-content');
})();
