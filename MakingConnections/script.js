var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connectons");
var username = document.querySelector("#username");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innertext++;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerHTML--;
}

function edit() {
    username.innerText = "Brandon V";
}