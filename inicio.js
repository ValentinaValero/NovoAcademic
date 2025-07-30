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



     function addPost() {
      const imageInput = document.getElementById("imageInput");
      const captionInput = document.getElementById("captionInput");
      const feed = document.getElementById("feed");

      const file = imageInput.files[0];
      const caption = captionInput.value.trim();

      if (!file) {
        alert("Escolha uma imagem.");
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        const post = document.createElement("div");
        post.className = "post";

        post.innerHTML = `
          <img src="${e.target.result}" alt="Postagem" />
          <div class="caption">${caption || "Sem legenda"}</div>
        `;

        feed.prepend(post); // Adiciona no topo
        captionInput.value = "";
        imageInput.value = "";
      };

      reader.readAsDataURL(file);
    }


     lucide.createIcons();

  // ...seu código de menu lateral...

  // Ativar botão do menu conforme a página
  document.addEventListener("DOMContentLoaded", function() {
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