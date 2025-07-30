document.addEventListener("DOMContentLoaded", function() {
    lucide.createIcons();

    const botaoAbrir = document.getElementById("botaoAbrir");
    const menuLateral = document.getElementById("menuLateral");
    const botaoFechar = document.getElementById("botaoFechar");
    const fundoEscurecido = document.getElementById("fundoEscurecido");

    botaoAbrir.addEventListener("click", () => {
      menuLateral.classList.add("ativo");
      fundoEscurecido.classList.add("ativo");
    });

    botaoFechar.addEventListener("click", () => {
      menuLateral.classList.remove("ativo");
      fundoEscurecido.classList.remove("ativo");
    });

    fundoEscurecido.addEventListener("click", () => {
      menuLateral.classList.remove("ativo");
      fundoEscurecido.classList.remove("ativo");
    });

    // Ativar botão do menu conforme a página
    const links = document.querySelectorAll('.navegacao-lateral a');
    const currentPage = window.location.pathname.split('/').pop();

    links.forEach(link => {
      const href = link.getAttribute('href');
      const button = link.querySelector('.botao-navegacao');
      if (href && button) {
        if (href === currentPage) {
          button.classList.add('ativo');
        } else {
          button.classList.remove('ativo');
        }
      }
    });
});

function alternarDestaque(botao) {
      const card = botao.closest('.disciplina-card');
      card.classList.toggle('destaque');
    }

