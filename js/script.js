let arreglo = [];

function actualizarResultado() {
    document.getElementById('resultado').textContent = `Arreglo: [${arreglo.join(', ')}]`;
}

function pushElemento() {
    const elemento = document.getElementById('nuevoElemento').value;
    arreglo.push(elemento);
    actualizarResultado();
}

function popElemento() {
    arreglo.pop();
    actualizarResultado();
}

function unshiftElemento() {
    const elemento = document.getElementById('nuevoElemento').value;
    arreglo.unshift(elemento);
    actualizarResultado();
}

function shiftElemento() {
    arreglo.shift();
    actualizarResultado();
}

function spliceElemento() {
    arreglo.splice(1, 1);
    actualizarResultado();
}

function deleteElemento() {
    delete arreglo[0];
    actualizarResultado();
}

function reverseArreglo() {
    arreglo.reverse();
    actualizarResultado();
}

function sortArreglo() {
    arreglo.sort();
    actualizarResultado();
}

function concatArreglo() {
    const otroArreglo = ['x', 'y', 'z'];
    arreglo = arreglo.concat(otroArreglo);
    actualizarResultado();
}

function joinArreglo() {
    const joinedString = arreglo.join(' - ');
    document.getElementById('resultado').textContent = `Joined: ${joinedString}`;
}

function longitudArreglo() {
    const length = arreglo.length;
    document.getElementById('resultado').textContent = `Longitud: ${length}`;
}
