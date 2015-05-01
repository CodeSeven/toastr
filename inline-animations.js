'use strict';

window.toastr = {};

(function init() {
    let body = document.getElementsByTagName("body")[0];
    let container = document.createElement("div");
    container.setAttribute("id","toastContainer");
    body.appendChild(container);
}());

function createToast(title,message,enterDuration,delay, exitDuration) {
    let domElem = document.createElement("div");

    let domTitle = document.createElement("h2");
    let domTitleTextNode = document.createTextNode(title);
    domTitle.appendChild(domTitleTextNode);

    let domMessage = document.createElement("p");
    let domMessageTextNode = document.createTextNode(message);
    domMessage.appendChild(domMessageTextNode);

    domElem.classList.add("toast");
    domElem.appendChild(domTitle);
    domElem.appendChild(domMessage);

    let duration = 200;

    var player = domElem.animate([
        {transform: 'translateX(' + -200 + 'px)'},
        {transform: 'translateX(' + 0 + 'px)'}
    ], {
        duration: duration,
        iterations: 1,
        delay: 0
    });

    document.getElementById("toastContainer").appendChild(domElem);

}


setInterval(function () {
    createToast('Toast Message','This is some content',250,5550,600);
},50);