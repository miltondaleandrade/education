document.addEventListener("readystatechange", ev => {
    if (document.readyState === "complete") {
        init();
    }
});

function init() {
    const button = document.querySelector(".myButton");
    button.addEventListener("mouseover", evt => {
       evt.target.classList.add("hover");
       evt.target.classList.remove("norm");
       evt.target.classList.remove("clicked");
    });
    button.addEventListener("mouseout", evt => {
       evt.target.classList.remove("hover");
       evt.target.classList.remove("clicked");
       evt.target.classList.add("norm");
    });
    button.addEventListener("mousedown", evt => {
       evt.target.classList.remove("hover");
       evt.target.classList.remove("norm");
       evt.target.classList.add("clicked");
    });
    button.addEventListener("mouseup", evt => {
        evt.target.classList.add("hover");
        evt.target.classList.remove("norm");
        evt.target.classList.remove("clicked");
    });
}
