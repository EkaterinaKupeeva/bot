// ==UserScript==
// @name         taskBot1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Kupeeva Ekaterina
// @match        https://ya.ru/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==

// ==/UserScript==


let keywords = ["символ бесконечности", "млечный путь", "галактика"];
let keyword = keywords[getRandom(0, keywords.length)];
let name = document.getElementById("text");
let b = new MouseEvent("click", name);
let button = document.getElementsByTagName('button')[3];
let links = document.links;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

if (name != null) {
    name.value = keyword;
    name.b;
    button.click();
} else {
    for(let i = 0; i < links.length; i++) {
        if (links[i].href.indexOf("wikipedia.org") != -1) {
            let link = links[i];
            console.log("Нашел строку " + link);
            link.click();
            break;
        }
    }
}
