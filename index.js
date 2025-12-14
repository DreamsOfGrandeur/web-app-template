
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/serviceworker.js");
}

function turnRedButton() {
    console.log("hello world");
    const text = document.querySelector("#helloWorld");
    text.style.color = "#ff0000";
}