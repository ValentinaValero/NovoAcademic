  // Ativa os ícones do Lucide
    document.addEventListener("DOMContentLoaded", function() {
    lucide.createIcons();

    // Seletores
    const openBtn = document.getElementById("openBtn");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("closeBtn");
    const overlay = document.getElementById("overlay");

    // Abrir menu
    openBtn.addEventListener("click", () => {
      sidebar.classList.add("active");
      overlay.classList.add("active");
    });

    // Fechar com o botão X
    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });

    // Fechar clicando fora
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });

    });