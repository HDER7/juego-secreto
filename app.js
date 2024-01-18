let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let max = 10;
//console.log(numeroSecreto);

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function intento(){
    let valor = parseInt(document.getElementById('valorUsuario').value);

    if(valor===numeroSecreto){
        asignarTexto('p', `¡Adivinaste el número en ${intentos} ${intentos===1?'vez':'veces'}!`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(valor > numeroSecreto){
            asignarTexto('p','El numero secreto es menor')
        }
        else{
            asignarTexto('p','El numero secreto es mayor');
        }
        intentos++;
        clear();
    }
    return;
}

function clear(){
    document.getElementById("valorUsuario").value='';
    return;
}
function inicio() {
    asignarTexto('h1','Juego del número secreto!');
    asignarTexto('p',`Indica un numero del 1 al ${max}`);
    numeroSecreto = generarNumero();
    intentos = 1;
    return;
}

function generarNumero(){
    let num = Math.floor(Math.random()*max)+1;

    if(numerosSorteados.length == max){
        asignarTexto('p','Ya se sortearon todos los numeros posibles')
    }else{
        if (numerosSorteados.includes(num)){
            return generarNumero();
        } else{
            numerosSorteados.push(num)
            return num;
        }
    }
}

function reiniciarJuego(){
    clear();
    inicio();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

inicio();

