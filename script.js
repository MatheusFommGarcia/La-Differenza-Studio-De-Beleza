const menuBtn = document.querySelector(".menu-hamburguer");
const navResponsive = document.querySelector(".nav-responsive");
const navLinks = document.querySelectorAll(".nav-responsive .nav-item");
const toggleTheme = document.getElementById("toggle-theme");
const themeLabel = document.getElementById("theme-label");

// Abrir/fechar menu
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navResponsive.classList.toggle("active");
});

// Fechar menu ao clicar em link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navResponsive.classList.remove("active");
  });
});

// Alternar tema
toggleTheme.addEventListener("change", () => {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    themeLabel.textContent = "Modo Claro";
  } else {
    themeLabel.textContent = "Modo Escuro";
  }
});