// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Permite solo el uso de letras y espacios
let regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

let nombresAmigo = [];

function agregarAmigo(){
    
    let nombreUsuario = document.getElementById('amigo').value.trim();
    console.log("Nombre ingresado: "+ nombreUsuario);
    if (nombreUsuario === ''){
        alert('Campo vacio, debes ingresar un nombre valido');
    }else if (!regex.test(nombreUsuario)) {
        alert('El nombre solo puede contener letras y espacios');
    }else{
        nombresAmigo.push(nombreUsuario);
        mostrarListaAmigos();
    }
    console.log("nombresAmigo: "+ nombresAmigo);
    limpiarCaja();
}

function mostrarListaAmigos(){

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < nombresAmigo.length; i++) {
        let nuevoRegistro = document.createElement('li');
        nuevoRegistro.textContent = nombresAmigo[i];
        lista.appendChild(nuevoRegistro);
    }
    return lista;
}

function sortearAmigo() {
    //Valida que la lista no este vacia y haya mas de un elemento
    if (nombresAmigo.length === 0 || nombresAmigo.length ===1) {
        alert("No hay amigos suficientes en la lista para sortear");
        return;
    }

    // Elije un nombre al azar
    let indiceSorteado = Math.floor(Math.random() * nombresAmigo.length);
    let amigoSorteado = nombresAmigo[indiceSorteado];

    // Muestra el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="sorteado">El amigo sorteado es: ${amigoSorteado}</li>`;
}


function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
