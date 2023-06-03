// ==UserScript==
// @name         Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Ekaterina Kupeeva
// @match        https://ya.ru/*
// @match        https://yandex.ru/*
// @match        https://xn--e1adnd0h.xn--d1aqf.xn--p1ai/*
// @match        https://xn--80az8a.xn--d1aqf.xn--p1ai/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let keywords = ["В новый дом на лучших условиях", "проектная декларация", "реестр застройщиков", "продажа земельного участка"];
let keyword = keywords[getRandom(0, keywords.length)];
let name = document.getElementById("text");
let b = new MouseEvent("click", name);
let button = document.getElementsByTagName('button')[3];
let links = document.links;


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

if (name != null) {
    let i = 0;
    let timerId = setInterval(() => {
        name.value += keyword[i];
        i++;
        if (i == keyword.length) {
            clearInterval(timerId);
            name.b;
            button.click();
        }
    }, 500);

} else if ((location.hostname == "xn--80az8a.xn--d1aqf.xn--p1ai") || (location.hostname == "xn--e1adnd0h.xn--d1aqf.xn--p1ai")) {
    console.log("Мы на целевом сайте");
    setInterval(() => {
        let index = getRandom(0, links.length);
        //С долей вероятности 30% уйдем обратно искать
        if (getRandom(0, 101) >= 70) {
            location.href = "https://ya.ru/";
        }
        //Перебираем ссылки и проверяем, что по ним можно кликнуть
        if ((links[index].href.indexOf("xn--80az8a.xn--d1aqf.xn--p1ai") != -1) || (links[index].href.indexOf("xn--e1adnd0h.xn--d1aqf.xn--p1ai") != -1)) {
            links[index].click();
        }
    }, getRandom(2000, 5000))
} else {
    let nextPage = true;
    for(let i = 0; i < links.length; i++) {
        if ((links[i].href.indexOf("xn--80az8a.xn--d1aqf.xn--p1ai") != -1) || (links[i].href.indexOf("xn--e1adnd0h.xn--d1aqf.xn--p1ai") != -1)) {
            let link = links[i];
            nextPage = false;
            console.log("Нашел строку " + link);
            setTimeout(() => {
                location.href = link.href;;
            }, getRandom(2500, 5000));
            break;
        }
    }

    //Если не нашли на первой странице выдачи
    let element = document.getElementsByClassName("Pager-Item_type_next")[0];
    let elementExist = setInterval(() => {
        let activeElement = document.getElementsByClassName("Pager-Item_current")[0];
        if (element != undefined) {
            if (activeElement.innerText == "7") {
                nextPage = false;
                location.href = "https://ya.ru/";
            }
            clearInterval(elementExist);
        }
    }, 100)


    if (nextPage) {
        setTimeout(() => {
            element.click();
        }, getRandom(3000, 8000))
    }
}
