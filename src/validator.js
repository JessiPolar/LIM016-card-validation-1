const validator = {
  isValid: function(numero){
      let digitos = numero.toString().split("");
      digitos = digitos.reverse();
      for( let i = 0; i < digitos.length; i++){
        digitos[i] = parseInt(digitos[i]);
      }
      for( let i = 0; i < digitos.length; i++ ){
        if(i % 2 == 1){
          digitos[i] = digitos[i] * 2;
          if(digitos[i] >= 10){
            digitos[i] = digitos[i] - 9;
          }
        }
    
      }
      let suma = 0;
      for( let i = 0; i < digitos.length; i++){
        suma += digitos[i];
      }
      if( suma % 10 == 0){
        return true
        
      }else{
        return false
        
      }
  },
  maskify: function(numero){
      let digitos= numero;
      
  
      return digitos.slice(0, -4).replace(/[0-9a-zA-Z]/g, '#').concat(digitos.slice(-4, digitos.len));

  }
    

  
   
};
    
    
  


export default validator;  