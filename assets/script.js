let modalBtn = $(".btn")
let modal = $(".modal-contact-form")
let close = $(".close")
let modalId = document.getElementById("modal")

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