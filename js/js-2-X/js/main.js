document.addEventListener("readystatechange", ev => {
    if (document.readyState === "complete") {
        const user = new Person(
            "Andrej", ["football", "music", "reading"]
        );
        localStorage.setItem("user", JSON.stringify(user));
        console.log(localStorage.getItem("user"));
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("user", JSON.stringify(user));
        console.log(sessionStorage.getItem("user"));
    }
});

class Person {

    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
}

function buttons() {
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
