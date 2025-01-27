//**
// 
// 2C = 2 de treboles
// 2D = 2 de diamantes
// 2H = 2 de corazones
// 2S = 2 de espadas
//
//  */

let deck = [];

const tipos = ['C', 'D', 'H', 'S'];

const especiales = ['A', 'J', 'Q', 'K'];


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
    console.log(deck);
    return deck;
}



crearDeck();


// Esta funcion me permite tomar una carta

const pedirCarta = () => {    


    if (deck.length === 0) {
        throw 'no hay cartas en el deck';

    }
    
    let carta = deck.pop();
    
    console.log(deck);
    console.log(carta);
    return carta;

   
}



// pedirCarta();


const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    let puntos = 0;

    if (isNaN(valor)){
        console.log('No es un nuemro');

    }
    else{
        console.log('Es un numero');
        puntos = valor * 1;
    }

    console.log(puntos);


}

valorCarta('KD');