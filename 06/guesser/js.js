let rNumber = Math.floor(Math.random() * 5);
let count = 0;
document.querySelector('#score').innerHTML = 0;

const button = document.querySelector('#sendGuess');

function sendTheGuess(){
    console.log(document.querySelector('#guess').value);
    console.log(rNumber);
    if(parseInt(document.querySelector('#guess').value) === rNumber){
        document.querySelector('#result').innerHTML = "Bravo! Hai indovinato, il numero giusto erà " + rNumber;
        count = count + 1;
        document.querySelector('#score').innerHTML = count;
    }else{
        document.querySelector('#result').innerHTML = "Sbagliato! Hai perso, il numero giusto erà " + rNumber;
    }

    button.disabled = true;
}

function nextRound(){
    document.querySelector('#result').innerHTML = "";
    rNumber = Math.floor(Math.random() * 5);

    button.disabled = false;
}

function Reset(){
    count = 0;
    document.querySelector('#score').innerHTML = count;
    document.querySelector('#result').innerHTML = "";
}