function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        img.setAttribute("src", "./assets/avatar.png")
    }

    const alt = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
        img.setAttribute("alt", "Foto de Mayk de Óculos de Sol")
    } else {
        img.setAttribute("alt", "Foto de Maiyk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo")
    }
}