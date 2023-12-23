function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/myphoto2.jpg")
    } else {
        img.setAttribute("src", "./assets/myphoto1.jpeg")
    }

    const alt = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
        img.setAttribute("alt", "Foto de Leandro e sua esposa sorrindo")
    } else {
        img.setAttribute("alt", "Foto de perfil de Leandro sorrindo")
    }
}