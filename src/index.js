import validator from './validator.js';

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
const paginaPrincipal = document.getElementById("principal");
const formularioDireccion = document.getElementById("formulario-datos");
const botonComprar = document.getElementById("btnComprar");


botonComprar.addEventListener('click', mostrarDireccion); 
function mostrarDireccion() {
    formularioDireccion.style.display="block";
    paginaPrincipal.style.display="none";
}


botonComprar.addEventListener('click', ocultarPaginaPrincipal); 
function ocultarPaginaPrincipal() {
    paginaPrincipal.style.display="none";
}

const formularioDePago = document.getElementById("formulario");
const botonSeguirComprando = document.getElementById("btnSeguirComprando");
    
botonSeguirComprando.addEventListener('click', mostrarPago); 
function mostrarPago() {
    formularioDePago.style.display="block";
    formularioDireccion.style.display="none";
}


/*botonSeguirComprando.addEventListener('click', function(){
    //document.getElementById('principal').style.display="none";
    //formularioDireccion.style.display="none";
    formularioDePago.style.display="block";
}); 

botonComprar.addEventListener('click', function(){
    formularioDireccion.style.display="block";
    paginaPrincipal.style.display="none";
}); 
*/