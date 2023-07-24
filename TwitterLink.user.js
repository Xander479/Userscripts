// ==UserScript==
// @name         Easy link to Twitter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make the Twitter logo on TweetDeck become a link to the desktop app
// @author       Xander479
// @match        https://tweetdeck.twitter.com
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        const logo = document.getElementsByClassName("tweetdeck-logo")[0];
        logo.style.cursor = "pointer";
        logo.addEventListener("click", function(){
            window.location = "https://twitter.com";
        });
    }, 3000); //Gives time for page to fully load
})();
