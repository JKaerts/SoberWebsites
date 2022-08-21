// ==UserScript==
// @name         Youtube cleaner
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Removes cruft from youtube
// @author       You
// @grant        none
// @match        *.youtube.com/*
// ==/UserScript==

function hideElements(selector) {
    document.querySelectorAll(selector)
        .forEach(el => { el.innerHTML = '' });
}

function hideCruft() {
    // related videos
    hideElements('div#related');

    // tiles with related videos after video
    hideElements('.ytp-endscreen-content');

    // comments
    hideElements('ytd-comments#comments')
}

// Call cruft remover every so often
const repeat_time_in_seconds = 2
setInterval(hideCruft, repeat_time_in_seconds * 1000);
