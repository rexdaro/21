
// Patron modulo

// (() => {})()             ----> eso seria como funcion flecha
// (function modulo(){ })() ----> eso seria como una funcion normal 

(() => {
    

    let deck         = [];

    const tipos      = ['C', 'D', 'H', 'S'];
    
    const especiales = ['A', 'J', 'Q', 'K'];
    
    let puntosJugador     = 0,
        puntosComputadora = 0;
    
    // referencias del html
    
    const btnPedir             = document.querySelector('#btnPedir');
    
    const btnDetener           = document.querySelector('#btnDetener');
    
    const btnNuevoJuego          = document.querySelector('#btnNuevo');
    
    const puntosHtml           = document.querySelectorAll('small');
    
    const divCartasJugador     = document.querySelector('#jugador-cartas');
    
    const divCartasComputadora = document.querySelector('#computadora-cartas');
    
    
    
    
    
    
    // Esta funcion crea un nuevo deck, barajeado;
    const crearDeck = () => {
    
    
        for (let i = 2; i <= 10; i++) {
    
            for (let tipo of tipos){
                deck.push(i + tipo);
            }
            
            
    
        }
    
        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }
    
        deck = _.shuffle(deck);
       
        return deck;
    }
    
    
    
    crearDeck();
    
    
    // Esta funcion me permite tomar una carta
    
    const pedirCarta = () => {    
    
    
        if (deck.length === 0) {
            throw 'no hay cartas en el deck';
    
        }
        
        let carta = deck.pop();
        
        // console.log(deck);
        // console.log(carta);
        return carta;
    
       
    }
    
    
    
    // pedirCarta();
    
    
    const valorCarta = (carta) => {
    
        const valor = carta.substring(0, carta.length - 1);
    
    
    
        return (isNaN(valor)) ? 
                (valor === 'A') ? 11: 10
                : valor * 1;
    
    
    }
    
    // logica de la computadora
    
    const turnoComputadora = (puntosMinimos) => {
        do {
    
        const carta = pedirCarta();
    
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHtml[1].innerText = puntosComputadora;
    
        // <img class="carta" src="assets/cartas/4C.png" alt=""> 
         const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);  
    
        if (puntosMinimos === 21){
            break;
        }
    
        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos < 22) );
    }
    
    
    
    
    const valor = valorCarta(pedirCarta());
    
    
    
    
    // Eventos
    
    btnPedir.addEventListener('click', () => {
    
        const carta = pedirCarta();
    
        puntosJugador = puntosJugador + valorCarta(carta);
        puntosHtml[0].innerText = puntosJugador;
    
        // <img class="carta" src="assets/cartas/4C.png" alt=""> 
         const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasJugador.append(imgCarta);
    
    
        if( puntosJugador > 21 ) {
            console.warn('lo siento, perdiste.');
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador);
    
        } else if (puntosJugador === 21) {
            alert('usted llego a 21');
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador);
            
        }
    
        
    
    });
    
    btnDetener.addEventListener('click', () => {
    
    
        turnoComputadora(puntosJugador);
    
        btnPedir.disabled = true;
    
        btnDetener.disabled = true;
    
    
        setTimeout(() => {
            if (puntosComputadora > puntosJugador && puntosComputadora <= 21){
                alert(`Perdiste!, la computadora obtuvo ${puntosComputadora} puntos.`)
            }else if(puntosJugador > 21){
                alert(`Perdiste!, la computadora obtuvo ${puntosComputadora} puntos.`)
            }else if(puntosJugador == puntosComputadora){
                alert(`Nadie gano`)
            }else{alert(`Ganaste esta ronda!`)}
        }, 30);
    
        
    
    
    });
    
    btnNuevoJuego.addEventListener('click', () => {
    
    
        crearDeck();
        
    
        puntosJugador = 0;
        puntosHtml[0].innerText = puntosJugador;
    
        puntosComputadora = 0;
        puntosHtml[1].innerText = puntosComputadora;
    
        btnPedir.disabled = false;
    
        btnDetener.disabled = false;
        divCartasJugador.innerHTML = '';
        divCartasComputadora.innerHTML = '';
    });





     

}
)();

