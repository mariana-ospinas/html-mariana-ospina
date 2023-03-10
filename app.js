document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "ferxo",
      img: "imagenes/ferxo[1].jpg"
    },
    {
      name: "ferxxoo",
      img: "imagenes/ferxxoo[1].jpg"
    },
    {
      name: "mi_ra",
      img: "imagenes/mi_ra[1].jpg"
    },
    {
      name: "mini",
      img: "imagenes/mini.jpg"
    },
    {
      name: "my_2",
      img: "imagenes/my_2[1].jpg"
    },
    {
      name: "my_3",
      img: "imagenes/my_3[1]"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");

      carta.setAttribute("src", "images/reverso.png");

      carta.setAttribute("data-id", i);

      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src",cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }

  crearTablero();

});
