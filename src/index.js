//import validator from './validator.js';

    
const tarjeta = document.querySelector('#tarjeta'),
        datos = document.querySelector('#formulario-datos'),
        formulario = document.querySelector('#formulario-tarjeta'),
        numeroTarjeta = document.querySelector('#tarjeta .numero'),
        nombreTarjeta = document.querySelector('#tarjeta .nombre'),
        mesExpiracion = document.querySelector('#tarjeta .mes'),
        yearExpiracion = document.querySelector('#tarjeta .year'),
        cvv = document.querySelector('#tarjeta .cvv');


//Input numero de tarjeta

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

    // Input nombre de tarjeta

    formulario.inputNombre.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
        formulario.inputNombre.value = (valorInput.toUpperCase())
        //Eliminar numeros
        .replace(/[0-9]/g, '');
        
    });

   
   


//Seleccionar mes * generado dinamicamente.

for(let i=1; i<=12; i++){
    let opcion= document.createElement('option');
    opcion.value= i;
    opcion.innerText= i;
    formulario.selectMes.appendChild(opcion);

}

//Seleccionar año * generado dinamicamente.

const yearActual = new Date().getFullYear();

for(let i= yearActual; i<=yearActual + 6; i++){
    let opcion= document.createElement('option');
    opcion.value= i;
    opcion.innerText= i;
    formulario.selectYear.appendChild(opcion);

}

// Input cvv
formulario.inputcvv.addEventListener('keyup', () =>{
    formulario.inputcvv.value = formulario.inputcvv.value
//Eliminar los espacios
.replace(/\s/g, '')
// Eliminar las letras
.replace(/\D/g, '');


});

