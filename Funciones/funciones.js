//1
function sumar() {
    const numerosInput=document.getElementById('numbers').value;
    const numerosArray=numerosInput.split(',').map(numero=>parseFloat(numero.trim()));
    const suma=numerosArray.reduce((acumulador, numero)=>acumulador + numero, 0);
    document.getElementById('resultado').innerText=`El resultado de la suma es: ${suma}`;
  }

//2
function calcularFactorial() {
    const numero=parseInt(document.getElementById('numero').value);
    if (isNaN(numero)) {
      document.getElementById('factorial').innerText = 'Ingrese un número válido';
      return;
    }
    if (numero < 0) {
      document.getElementById('factorial').innerText = 'No existe factorial de números negativos.';
      return;
    }
    let factorial=1;
    for (let i=2; i<=numero; i++) {
      factorial*=i;
    }
    document.getElementById('factorial').innerText=`El factorial de ${numero} es: ${factorial}`;
  }

//3
function verificarPrimo() {
    const numeros=parseInt(document.getElementById('numeros').value);
    if (isNaN(numeros)) {
      document.getElementById('resultados').innerText='Ingrese un número válido';
      return;
    }
    if (numeros<=1) {
      document.getElementById('resultados').innerText = 'El número debe ser mayor que 1.';
      return;
    }
    let EsPrimo=true;
    //Si un número no es primo, al menos uno de sus divisores (aparte de 1 y él mismo) estará en el rango de 2 a su raíz cuadrada.
    for (let i=2; i<=Math.sqrt(numeros);i++) {   
      if (numeros%i===0) {
        EsPrimo=false;
        break;
      }
    }
    if (EsPrimo) {
      document.getElementById('resultados').innerText=`${numeros} es un número primo.`;
    } else {
      document.getElementById('resultados').innerText=`${numeros} no es un número primo.`;
    }
  }

//4
function convertirgrados() {
    const celsius=parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsius)) {
      document.getElementById('fahrenheit').innerText='Ingrese un número válido';
      return;
    }
    const fahrenheit=(celsius*9/5)+32;
    document.getElementById('fahrenheit').innerText = `${celsius} grados Celsius equivalen a ${fahrenheit.toFixed(2)} grados Fahrenheit.`;
  }

//5
function calcularMCD() {
    const numero1=parseInt(document.getElementById('numero1').value);
    const numero2=parseInt(document.getElementById('numero2').value);
    
    if (isNaN(numero1) || isNaN(numero2)) {     //"o"
      document.getElementById('mcd').innerText='Ingrese números válidos.';
      return;
    }
    let mcd=1;
    for (let i = 2; i <= Math.min(numero1, numero2); i++) {
      if (numero1%i===0 && numero2%i===0) {           //"y"
        mcd=i;
      }
    }
    document.getElementById('mcd').innerText = `El MCD de ${numero1} y ${numero2} es: ${mcd}`;
  }

//6
function encontrarMayor() {
    const input=document.getElementById('numberss').value;
    const numbersArray=input.split(',').map(numbe=> parseFloat(numbe.trim()));
  
    if (numbersArray.some(isNaN)) {
      document.getElementById('result').innerText='Ingrese números válidos.';
      return;
    }
    let mayor=numbersArray[0];     //mayor inicialmente
    for (let i=1; i<numbersArray.length; i++) {
    if (numbersArray[i]> mayor) {
      mayor=numbersArray[i];
        document.getElementById('result').innerText=`El número mayor es: ${mayor}`;
        }
        }
    }