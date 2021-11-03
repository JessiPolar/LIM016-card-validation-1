import validator from './validator.js';

const formulario = document.querySelector('#formulario'); 
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    formulario.inputNumero.value = valorInput

    //Eliminar espacios en blanco

    .replace(/\s/g, '')

    //Eliminar las letras

    .replace(/\D/g, '')

    //Espacio cada cuatro numeros

    .replace(/([0-9]{4})/g, '$1 ')

    //Elimina el ultimo espaciado

    .trim();

});

formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');


});

//Seleccionar mes * generado dinamicamente.

for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
  
  }
  
  //Seleccionar año * generado dinamicamente.
  
  const yearActual = new Date().getFullYear();
  
  for (let i = yearActual; i <= yearActual + 6; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
  
  }

  formulario.inputcvv.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    formulario.inputcvv.value = valorInput.replace(/[a-zA-Z]/g, '');


});



const verificar = document.getElementById('Enviar');
verificar.addEventListener('click', function(e) {
    const creditCardNumber = document.getElementById('inputNumero').value;
        e.preventDefault();

    if(creditCardNumber.length === 0) {
                document.getElementById("Resultado tarjeta").innerHTML = "Ingresar numero de tarjeta";

        return;
    }

    const isValidCard = validator.isValid(creditCardNumber);
    const maskedCard = validator.maskify(creditCardNumber);

    if(isValidCard){
        document.getElementById("Resultado tarjeta").innerHTML = 'Tarjeta valida: ' + maskedCard;
            
    }else{
        document.getElementById("Resultado tarjeta").innerHTML = 'Tarjeta invalida: ' + maskedCard;
    }

});

