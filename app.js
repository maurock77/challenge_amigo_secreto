// Array para almacenar los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }
    
    amigos.push(nombre);
    actualizarListaAmigos();
    inputAmigo.value = '';
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.className = 'friend-item';
        
        const nombreSpan = document.createElement('span');
        nombreSpan.textContent = amigo;
        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = '&times;';
        deleteButton.onclick = () => eliminarAmigo(index);
        
        li.appendChild(nombreSpan);
        li.appendChild(deleteButton);
        listaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
}

// Función para sortear amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Se necesitan al menos 2 personas para realizar el sorteo');
        return;
    }
    
    const resultado = document.getElementById('resultado');
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    
    resultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
    
    // Crear botón de reinicio
    const reiniciarButton = document.createElement('button');
    reiniciarButton.className = 'button-restart';
    reiniciarButton.textContent = 'Reiniciar Juego';
    reiniciarButton.onclick = reiniciarJuego;
    resultado.appendChild(reiniciarButton);
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = [];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '<li>Juego reiniciado</li>';
    actualizarListaAmigos();
    
    // Limpiar el mensaje después de 2 segundos
    setTimeout(() => {
        resultado.innerHTML = '';
    }, 2000);
}

// Agregar evento para el Enter en el input
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});