import './main.css'

const menuBtn = document.getElementById("menu_btn")
const xBtn = document.getElementById("x_btn")
const menuContent = document.getElementById("menu_content")



menuBtn.addEventListener("click", () => {
    menuContent.classList.remove("hidden")
    menuBtn.classList.add("hidden")
    xBtn.classList.remove("hidden")
})

xBtn.addEventListener("click", () => {
    menuContent.classList.add("hidden")
    menuBtn.classList.remove("hidden")
    xBtn.classList.add("hidden")
})