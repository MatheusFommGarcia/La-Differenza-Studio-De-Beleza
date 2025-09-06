// Seleciona o menu hamburguer e o menu de navegação responsiva
const menuHamburguer = document.querySelector(".menu-hamburguer")
const nav = document.querySelector(".nav-responsive")

// Adiciona evento de clique com animação suave
menuHamburguer.addEventListener("click", () => {
  // Alterna a classe "change" no ícone com animação
  menuHamburguer.classList.toggle("change")

  // Alterna a classe "active" no menu com delay para animação
  nav.classList.toggle("active")
})

// Fecha o menu ao clicar em um link
const navLinks = document.querySelectorAll(".nav-responsive a")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuHamburguer.classList.remove("change")
    nav.classList.remove("active")
  })
})

// Animação suave ao rolar a página
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)"
  } else {
    header.style.background = "var(--pure-white)"
  }
})

// Animação de entrada para elementos
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observa elementos para animação
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".services-box, .portfolio-box")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s ease"
    observer.observe(el)
  })
})