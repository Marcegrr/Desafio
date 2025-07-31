// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  const input = document.getElementById("amigo"); 
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);
  actualizarListaAmigos();
  input.value = "";
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
  const lista = document.getElementById("listaAmigos"); 
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Función para sortear un amigo al azar
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado"); 
  resultado.innerHTML = ""; // Limpiar resultado anterior

  const li = document.createElement("li");
  li.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
  resultado.appendChild(li);
}
