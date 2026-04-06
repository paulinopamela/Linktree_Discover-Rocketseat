function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "/assets/assets/photo-avatar-light.png")
  } else {
    img.setAttribute("src", "/assets/assets/photo-avatar-dark.png")
  }

  const alt = document.querySelector("#profile alt")

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto de um mar metalizado reluzindo")
  } else {
    img.setAttribute("alt", "Foto de avatar com efeito glitch")
  }
}
