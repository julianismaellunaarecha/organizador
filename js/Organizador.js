export default function getOrganizador() {
//   if (!("indexedDB" in window)) {
//     console.log(
//       "Este navegador no soporta IndexedDB, por lo tanto no soporta Organizador."
//     );
//     return;
//   } else {
//     let dbPromise = window.indexedDB.open("organizador", 1);
//     dbPromise.onupgradeneeded = function () {
//       let db = dbPromise.result;
//       if (!db.objectStoreNames.contains("tarjeta")) {
//         db.createObjectStore("tarjeta", { keyPath: "id", autoIncrement: true });
//       }
//     };
//   }

//   let dbPromise = window.indexedDB.open("organizador", 1);
//   dbPromise.onupgradeneeded = function () {
//     let db = dbPromise.result;
//     let transaction = db.transaction("tarjeta", "readwrite");
//     let tarjetas = transaction.objectStore("tarjeta");
//     let tarjeta = "{name: tarjeta1}";
//     let request = tarjetas.add(tarjeta);
//     request.onsuccess = function () {
//       console.log("Book added to the store", request.result);
//     };
//     request.onerror = function () {
//       console.log("Error", request.error);
//     };
//   };

  let organizadorDiv = document.createElement("div");
  organizadorDiv.setAttribute("id", "organizador");

  let creatorDiv = document.createElement("div");
  creatorDiv.setAttribute("id", "creador");

  let cardForm = document.createElement("form");
  cardForm.setAttribute("id", "formularioTarjetas");

    let tituloSpan = document.createElement("span");
    tituloSpan.setAttribute("class", "texto-explicativo");
    tituloSpan.innerHTML = "Titulo: ";
    cardForm.appendChild(tituloSpan);

  let nameInput = document.createElement("input");
  nameInput.setAttribute("id", "name-input");
  nameInput.setAttribute("type", "text");
  nameInput.style.backgroundColor = "#feff9c";
  nameInput.style.color = invertirColor("#feff9c");
  cardForm.appendChild(nameInput);

  let contrasteSpan = document.createElement("span");
  contrasteSpan.setAttribute("class", "texto-explicativo");
  contrasteSpan.innerHTML = "Contraste: ";
    cardForm.appendChild(contrasteSpan);

  let contrasteTextoInput = document.createElement("input");
  contrasteTextoInput.setAttribute("id", "contraste-texto-input");
  contrasteTextoInput.setAttribute("type", "checkbox");
  contrasteTextoInput.setAttribute("checked", "true");
  contrasteTextoInput.addEventListener("click", function () {
    if ( "true" === document.getElementById("contraste-texto-input").getAttribute("checked") ) {
      document
        .getElementById("contraste-texto-input")
        .setAttribute("checked", "false");
      document.getElementById("name-input").style.color = invertirColor(
        document.getElementById("color-input").value,
        "false"
      );
    } else {
      document
        .getElementById("contraste-texto-input")
        .setAttribute("checked", "true");
      document.getElementById("name-input").style.color = invertirColor(
        document.getElementById("color-input").value,
        "true"
      );
    }
  });
  cardForm.appendChild(contrasteTextoInput);

  let colorSpan = document.createElement("span");
  colorSpan.setAttribute("class", "texto-explicativo");
  colorSpan.innerHTML = "Color: ";
    cardForm.appendChild(colorSpan);

  let colorInput = document.createElement("input");
  colorInput.setAttribute("type", "color");
  colorInput.setAttribute("id", "color-input");
  colorInput.setAttribute("value", "#feff9c");
  colorInput.setAttribute("class", "color-input");
  colorInput.addEventListener("input", function () {
    document.getElementById("name-input").style.backgroundColor = this.value;
    document.getElementById("name-input").style.color = invertirColor(
      this.value,
      document.getElementById("contraste-texto-input").getAttribute("checked")
    );
    console.log(
      document.getElementById("contraste-texto-input").getAttribute("checked")
    );
  });
  cardForm.appendChild(colorInput);

  creatorDiv.appendChild(cardForm);

  let createButton = document.createElement("button");
  createButton.setAttribute("id", "create-button");
  createButton.setAttribute("class", "boton");
  createButton.innerHTML = "+";

  let panelDiv = document.createElement("div");
  panelDiv.setAttribute("id", "panel");

  createButton.addEventListener("click", function () {
    let tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "tarjeta");
    tarjeta.style.backgroundColor = document.getElementById("name-input").style.backgroundColor;
    let nameInputTituloInput = document.createElement("input");
    nameInputTituloInput.setAttribute("class", "nameInputTituloInput");
    nameInputTituloInput.value = document.getElementById("name-input").value;
    nameInputTituloInput.style.color = document.getElementById("name-input").style.color;
    tarjeta.appendChild(nameInputTituloInput);
    let tarjetaInput = document.createElement("textarea");
    tarjetaInput.setAttribute("class", "tarjetaTextArea");
    tarjetaInput.setAttribute("cols", "20");
    tarjetaInput.setAttribute("rows", "10");
    tarjetaInput.style.color = document.getElementById("name-input").style.color;
    tarjeta.appendChild(tarjetaInput);
    panelDiv.appendChild(tarjeta);
  });

  creatorDiv.appendChild(createButton);

  organizadorDiv.appendChild(creatorDiv);
  organizadorDiv.appendChild(panelDiv);
  return organizadorDiv;
}

function invertirColor(hex, nb) {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  let r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);
  if ("true" === nb) {
    if (r * 0.299 + g * 0.587 + b * 0.114 > 186) {
      return "#000000";
    } else {
      return "#FFFFFF";
    }
  }
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  return (
    "#" +
    (new Array(2).join("0") + r).slice(-2) +
    (new Array(2).join("0") + g).slice(-2) +
    (new Array(2).join("0") + b).slice(-2)
  );
}
