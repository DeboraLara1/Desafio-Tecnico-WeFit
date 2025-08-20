document.addEventListener("DOMContentLoaded", function () {
  // Menu
  function transformarMenu() {
    const tituloMenu = Array.from(document.querySelectorAll("h3")).find(
      (h3) => h3.textContent === "Menu"
    );

    const containerMenu = tituloMenu.closest(".row");
    const btnGroup = containerMenu.querySelector(".btn-group-vertical");

    btnGroup.classList.remove("btn-group-vertical");
    btnGroup.classList.add("btn-group");

    btnGroup.classList.add("btn-group-lg");
    btnGroup.style.gap = "10px";
  }

  // Header
  const jumbotron = document.querySelector(".jumbotron");

  if (jumbotron) {
    jumbotron.style.backgroundColor = "#6c757d";
    jumbotron.style.color = "#fff";
    jumbotron.style.textAlign = "right";
    jumbotron.style.borderRadius = "8px";
    jumbotron.style.padding = "2rem";

    const btn = jumbotron.querySelector("a.btn");
    if (btn) {
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-success");
    }
  }

  // Cards
  //Nova ordem a seguir: natureza, animais, pessoas, tecnologia
  function reordenarCards() {
    const tituloCards = Array.from(document.querySelectorAll("h3")).find(
      (h3) => h3.textContent === "Cards"
    );

    const containerCards = tituloCards.closest(".row");
    const cards = Array.from(containerCards.querySelectorAll(".col-lg-3"));

    if (cards.length !== 4) {
      console.error(`Encontrados ${cards.length} cards, esperados 4`);
      return;
    }

    containerCards.insertBefore(cards[3], cards[0]);
    containerCards.appendChild(cards[1]);

    const cardAnimais = cards[0];
    if (cardAnimais) {
      const botaoAnimais = cardAnimais.querySelector(".btn");
      if (botaoAnimais) {
        botaoAnimais.classList.remove("btn-primary");
        botaoAnimais.classList.add("btn-success");
      }
    }
  }

  // Lista
  function modificarLista() {
    const tituloLista = Array.from(document.querySelectorAll("h3")).find(
      (h3) => h3.textContent === "Lista"
    );

    const containerLista = tituloLista.closest(".row");
    const lista = containerLista.querySelector(".list-group");

    const primeiroItem = lista.querySelector(".list-group-item.active");
    if (primeiroItem) {
      primeiroItem.classList.remove("active");
    }

    const quartoItem = document.createElement("li");
    quartoItem.className = "list-group-item active";
    quartoItem.textContent = "Quarto item";

    const quintoItem = document.createElement("li");
    quintoItem.className = "list-group-item";
    quintoItem.textContent = "Quinto item";

    lista.appendChild(quartoItem);
    lista.appendChild(quintoItem);
  }

  reordenarCards();
  modificarLista();
  transformarMenu();
});
