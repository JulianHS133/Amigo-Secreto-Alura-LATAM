let amigos = [];

function agregarAmigo() {
const nombreIngresado = document.getElementById("amigo");
const nombre = nombreIngresado.value.trim(); 

if (nombre === "") {
        alert("No se puede acceder sin un nombre, por favor ingrese uno");
        return; 
}

if (amigos.includes(nombre)) {
        alert("El nombre ingresado ya existe, ingrese otro");
        return;
}

amigos.push(nombre);

const lista = document.getElementById("listaAmigos");
const li = document.createElement("li");
li.textContent = nombre;

li.addEventListener("click", () => {
        const index = nombre.indexOf(nombre);
        amigos.splice(index, 1);
        li.remove();
});

    lista.appendChild(li);
    nombreIngresado.value = "";
}

function actualizarLista() {
const lista = document.getElementById("listaAmigos");

lista.innerHTML = "";

for (let index = 0; index < amigos.length; index++) {
        const li = document.createElement("li"); 
        li.textContent = amigos[index]; 
        lista.appendChild(li); 
}
}

function sortearAmigo() {
if (amigos.length === 0) {
        alert("No hay amigos en la lista, porfavor agrega a tus amigos");
        return;
}

const indexAleatorio = Math.floor(Math.random() * amigos.length);
const nombreSorteo = amigos[indexAleatorio];

const resultadoAmigo = document.getElementById("resultado");
resultadoAmigo.textContent = `Tu amigo secreto es ${nombreSorteo}`;
}