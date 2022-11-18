const input = document.getElementById("phone");
input.addEventListener("input", event => {
    const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g
    const format = document.querySelector(".phoneFormat");
    const phone = input.value;
    const found = regex.test(phone);
    if (!found && phone.length) {
        input.classList.remove("valid");
        input.classList.add("invalid");
        format.classList.remove("invisible");
    } else {
        input.classList.add("valid");
        input.classList.remove("invalid");
        format.classList.add("invisible");
    }
});

