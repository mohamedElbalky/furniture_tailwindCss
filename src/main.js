import './main.css'

const menuBtn = document.getElementById("menu_btn")
const xBtn = document.getElementById("x_btn")
const menuContent = document.getElementById("menu_content")

const themeToggleBtn = document.querySelectorAll("#theme_toggle")

const theme = localStorage.getItem("theme")

theme && document.documentElement.classList.add(theme)



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


const handleThemeToggle = () => {
    document.documentElement.classList.toggle("dark")
    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.removeItem("theme")
    }
}

themeToggleBtn.forEach(e => {
    e.addEventListener("click", () => {
        handleThemeToggle()
    })
})