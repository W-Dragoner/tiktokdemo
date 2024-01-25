// ==UserScript==
// @name         tiktok Jump to all orders
// @namespace    https://github.com/W-Dragoner/tiktokdemo
// @version      1.1
// @description  Automatically jump to all orders
// @author       You
// @match        https://dmall.jinritemai.com/ffa/morder/order/list
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csdn.net
// @license      AGPL-3.0
// @grant        none
// ==/UserScript==
()=>{
    'use strict';
    var divs = document.getElementsByClassName("index_tabWrapper__-OQd7  ");

    // 点击第一个div
    divs[2].addEventListener('click', function() {
      setTimeout(function() {
        var divs = document.getElementsByClassName("index_tabWrapper__-OQd7  ");
  
        // 点击第一个div
        divs[0].click();
      }, 2000);
    });


 
  }