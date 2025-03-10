// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;

    if(nombreAmigo == ''){
        return alert('Ingrese un nombre valido')
    }
    console.log(nombreAmigo);
    amigos.push(nombreAmigo);
    console.log(amigos);
    document.getElementById('amigo').value = '';
    mostrarLista();
}

function mostrarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let i=0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
        console.log(amigos[i]);
    }
}

function sortearAmigo() {
    
}

