// ==UserScript==
// @name         Thingimprovements
// @namespace    https://github.com/Crewe/
// @version      0.1
// @description  Stop Thingiverse from CONSTANTLY openning new tabs.
//               as well as make the scroll 3-column.
// @author       Ryan Edwards-Crewe
// @match        https://www.thingiverse.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('a[target=_blank]').attr("target","");

    var loc = window.location.href;
    var base_regex = "^https:\/\/www.thingiverse.com\/";
    var search = new RegExp(base_regex + 'search.+$');
    var explore = new RegExp(base_regex + 'explore.+$');

    if (search.test(loc)){
        $('.main_content').width('1277px');
        $('.item-card-list').width('922px');
    }
    else if(explore.test(loc)){
        $('.main_content').width('1282px');
        $('.things').width('1247px');
    }
})();
