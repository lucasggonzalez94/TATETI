// Selecciono los nodos necesarios
const tablero = document.querySelector('#tablero')
const celda1 = document.querySelector('#celda1')
const celda2 = document.querySelector('#celda2')
const celda3 = document.querySelector('#celda3')
const celda4 = document.querySelector('#celda4')
const celda5 = document.querySelector('#celda5')
const celda6 = document.querySelector('#celda6')
const celda7 = document.querySelector('#celda7')
const celda8 = document.querySelector('#celda8')
const celda9 = document.querySelector('#celda9')
const mensaje = document.querySelector('#mensaje')

// Variables globales
let jugador = true
let numCeldasDisponibles=9;
const mapa = [0,0,0,0,0,0,0,0,0]

cargarEvenListener()
function cargarEvenListener(){
    tablero.addEventListener('click', verificarGanador)
    celda1.addEventListener('click', generarJugada)
    celda2.addEventListener('click', generarJugada)
    celda3.addEventListener('click', generarJugada)
    celda4.addEventListener('click', generarJugada)
    celda5.addEventListener('click', generarJugada)
    celda6.addEventListener('click', generarJugada)
    celda7.addEventListener('click', generarJugada)
    celda8.addEventListener('click', generarJugada)
    celda9.addEventListener('click', generarJugada)
}

function removerEvenListener(){
    tablero.removeEventListener('click', verificarGanador)
    celda1.removeEventListener('click', generarJugada)
    celda2.removeEventListener('click', generarJugada)
    celda3.removeEventListener('click', generarJugada)
    celda4.removeEventListener('click', generarJugada)
    celda5.removeEventListener('click', generarJugada)
    celda6.removeEventListener('click', generarJugada)
    celda7.removeEventListener('click', generarJugada)
    celda8.removeEventListener('click', generarJugada)
    celda9.removeEventListener('click', generarJugada)
}

function generarJugada(e) {
    dibujarSimbolo(e.target)
}

function dibujarSimbolo(celda) {
    if (celda.innerText === undefined && numCeldasDisponibles > 1) {
        insertarMensajes('No puede seleccionar una celda ocupada.', 'error', true)
        return
    }
    if (jugador === true && celda.innerText !== undefined) {
        celda.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="120" height="120" viewBox="0 0 24 24" stroke-width="2" stroke="#1466c5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>`

        jugador = false
        
        if (celda.id === 'celda1') {
            mapa[0] = 1
        }else if (celda.id === 'celda2') {
            mapa[1] = 1
        }else if (celda.id === 'celda3') {
            mapa[2] = 1
        }else if (celda.id === 'celda4') {
            mapa[3] = 1
        }else if (celda.id === 'celda5') {
            mapa[4] = 1
        }else if (celda.id === 'celda6') {
            mapa[5] = 1
        }else if (celda.id === 'celda7') {
            mapa[6] = 1
        }else if (celda.id === 'celda8') {
            mapa[7] = 1
        }else if (celda.id === 'celda9') {
            mapa[8] = 1
        }
    }else if (jugador === false && celda.innerText !== undefined) {
        celda.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle" width="100" height="100" viewBox="0 0 24 24" stroke-width="2" stroke="#dc135f" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="9" />
        </svg>`

        jugador = true

        if (celda.id === 'celda1') {
            mapa[0] = 2
        }else if (celda.id === 'celda2') {
            mapa[1] = 2
        }else if (celda.id === 'celda3') {
            mapa[2] = 2
        }else if (celda.id === 'celda4') {
            mapa[3] = 2
        }else if (celda.id === 'celda5') {
            mapa[4] = 2
        }else if (celda.id === 'celda6') {
            mapa[5] = 2
        }else if (celda.id === 'celda7') {
            mapa[6] = 2
        }else if (celda.id === 'celda8') {
            mapa[7] = 2
        }else if (celda.id === 'celda9') {
            mapa[8] = 2
        }
    }
    // console.log(celda.innerText)
}

function verificarGanador(){

    if (numCeldasDisponibles === 1){
        removerEvenListener()
        insertarMensajes('No quedan celdas disponibles, el juego terminó.', '', false)
    }
    
    let aux = 0
    for(let i=0; i<=9; i++){
        if(mapa[i] === 0) {
            aux++
            numCeldasDisponibles = aux;
        }
    }
    // Las líneas horizontales
    if(mapa[0] == mapa[1] && mapa[1] == mapa[2] && mapa[0] !=0) {
        celda1.style = 'background-color: lime'
        celda2.style = 'background-color: lime'
        celda3.style = 'background-color: lime'
        removerEvenListener()
        insertarMensajes('El juego terminó!', '', false)
    }
    if(mapa[3] == mapa[4] && mapa[4] == mapa[5] && mapa[3] !=0) {
        celda4.style = 'background-color: lime'
        celda5.style = 'background-color: lime'
        celda6.style = 'background-color: lime'
        removerEvenListener()
        insertarMensajes('El juego terminó!', false)
    }
    if(mapa[6] == mapa[7] && mapa[7] == mapa[8] && mapa[6] !=0) {
        celda7.style = 'background-color: lime'
        celda8.style = 'background-color: lime'
        celda9.style = 'background-color: lime'
        removerEvenListener()
        insertarMensajes('El juego terminó!', '', false)
    }
    //Las líneas verticales
    if(mapa[0] == mapa[3] && mapa[3] == mapa[6] && mapa[0] !=0) {
        celda1.style = 'background-color: lime'
        celda4.style = 'background-color: lime'
        celda7.style = 'background-color: lime'
        removerEvenListener()
        insertarMensajes('El juego terminó!', '', false)
    }
    if(mapa[1] == mapa[4] && mapa[4] == mapa[7] && mapa[1] !=0) {
        celda2.style = 'background-color: lime'
        celda5.style = 'background-color: lime'
        celda8.style = 'background-color: lime'
        removerEvenListener()
        insertarMensajes('El juego terminó!', '', false)
    }
    if(mapa[2] == mapa[5] && mapa[5] == mapa[8] && mapa[2] !=0) {
        celda3.style = 'background-color: lime'
        celda6.style = 'background-color: lime'
        celda9.style = 'background-color: lime'
        removerEvenListener()
        insertarMensajes('El juego terminó!', '', false)
    }
    //Las diagonales
    if(mapa[0] == mapa[4] && mapa[4] == mapa[8] && mapa[0] !=0) {
        celda1.style = 'background-color: lime'
        celda5.style = 'background-color: lime'
        celda9.style = 'background-color: lime'
        removerEvenListener()
        insertarMensajes('El juego terminó!', '', false)
    }
    if(mapa[2] == mapa[4] && mapa[4] == mapa[6] && mapa[2] !=0) {
        celda3.style = 'background-color: lime'
        celda5.style = 'background-color: lime'
        celda7.style = 'background-color: lime'
        removerEvenListener()
        insertarMensajes('El juego terminó!', '', false)
    }
}

function insertarMensajes(leyenda, tipo, tiempo) {
    if(!mensaje.firstChild) {
        const parrafo = document.createElement('p')
        parrafo.textContent = leyenda
        mensaje.appendChild(parrafo)

        if (tipo === 'error') {
            parrafo.classList.add('error')
        }else {
            parrafo.classList.add('success')
        }

        if (tiempo) {
            setTimeout(() => {
                parrafo.remove()
            }, 3000)
        }
    }
}