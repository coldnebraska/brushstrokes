let modalBtn = $(".btn")
let modal = $(".modal-contact-form")
let close = $(".close")
let modalId = document.getElementById("modal")
let submitBtn = $(".submit-btn")

modalBtn.click(function() {
    modal.css("display", "block")
})

close.click(function() {
    modal.css("display", "none")
})

window.addEventListener("click", function(event) {
    if (event.target === modalId) {
        modal.css("display", "none")
    }
})

const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
    .catch((error) => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);