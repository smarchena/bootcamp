var estado = false;
var contenido_suma1;
var contenido_rest1;
var contenido_mult1;
var contenido_div1;
var valor_izquierdo = "";
var valor_derecho = "";

var boton_9 = document.getElementById("key_9");
var boton_8 = document.getElementById("key_8");
var boton_7 = document.getElementById("key_7");
var boton_6 = document.getElementById("key_6");
var boton_5 = document.getElementById("key_5");
var boton_4 = document.getElementById("key_4");
var boton_3 = document.getElementById("key_3");
var boton_2 = document.getElementById("key_2");
var boton_1 = document.getElementById("key_1");
var boton_0 = document.getElementById("key_0");
var boton_sum = document.getElementById("key_sum");
var boton_rest = document.getElementById("key_rest");
var boton_mult = document.getElementById("key_mult");
var boton_div = document.getElementById("key_div");
var boton_result = document.getElementById("key_result");
var boton_reset = document.getElementById("key_reset");
// var boton_change = document.getElementById("change");
var boton_input1 = document.getElementById("firstBox");
// var boton_input2 = document.getElementById("secondBox");

boton_9.addEventListener("click", function(){
    if(estado == false){        
        value_9 = boton_9.value;
        valor_izquierdo = valor_izquierdo + value_9;    
        boton_input1.value = valor_izquierdo;                
    }else{        
        value_9 = boton_9.value;
        valor_derecho = valor_derecho + value_9;
        boton_input1.value = valor_derecho; 
    }    
    // boton_input2.value = boton_input2.value + value_9;    
});

boton_8.addEventListener("click", function(){
    if(estado == false){        
        value_8 = boton_8.value;
        valor_izquierdo = valor_izquierdo + value_8;    
        boton_input1.value = valor_izquierdo;                
    }else{        
        value_8 = boton_8.value;
        valor_derecho = valor_derecho + value_8;
        boton_input1.value = valor_derecho; 
    }  
});

boton_7.addEventListener("click", function(){
    if(estado == false){        
        value_7 = boton_7.value;
        valor_izquierdo = valor_izquierdo + value_7;    
        boton_input1.value = valor_izquierdo;                
    }else{        
        value_7 = boton_7.value;
        valor_derecho = valor_derecho + value_7;
        boton_input1.value = valor_derecho; 
    }  
});

boton_6.addEventListener("click", function(){
    if(estado == false){        
        value_6 = boton_6.value;
        valor_izquierdo = valor_izquierdo + value_6;    
        boton_input1.value = valor_izquierdo;                
    }else{        
        value_6 = boton_6.value;
        valor_derecho = valor_derecho + value_6;
        boton_input1.value = valor_derecho; 
    }  
});

boton_5.addEventListener("click", function(){
    if(estado == false){        
        value_5 = boton_5.value;
        valor_izquierdo = valor_izquierdo + value_5;    
        boton_input1.value = valor_izquierdo;                
    }else{        
        value_5 = boton_5.value;
        valor_derecho = valor_derecho + value_5;
        boton_input1.value = valor_derecho; 
    }  
});

boton_4.addEventListener("click", function(){
    if(estado == false){        
        value_4 = boton_4.value;
        valor_izquierdo = valor_izquierdo + value_4;    
        boton_input1.value = valor_izquierdo;                
    }else{        
        value_4 = boton_4.value;
        valor_derecho = valor_derecho + value_4;
        boton_input1.value = valor_derecho; 
    }  
});

boton_3.addEventListener("click", function(){
    if(estado == false){        
        value_3 = boton_3.value;
        valor_izquierdo = valor_izquierdo + value_3;    
        boton_input1.value = valor_izquierdo;                
    }else{        
        value_3 = boton_3.value;
        valor_derecho = valor_derecho + value_3;
        boton_input1.value = valor_derecho; 
    }  
});

boton_2.addEventListener("click", function(){
    if(estado == false){        
        value_2 = boton_2.value;
        valor_izquierdo = valor_izquierdo + value_2;    
        boton_input1.value = valor_izquierdo;                
    }else{        
        value_2 = boton_2.value;
        valor_derecho = valor_derecho + value_2;
        boton_input1.value = valor_derecho; 
    }  
});

boton_1.addEventListener("click", function(){
    if(estado == false){        
        value_1 = boton_1.value;
        valor_izquierdo = valor_izquierdo + value_1;    
        boton_input1.value = valor_izquierdo;                
    }else{        
        value_1 = boton_1.value;
        valor_derecho = valor_derecho + value_1;
        boton_input1.value = valor_derecho; 
    }  
});

boton_0.addEventListener("click", function(){
    if(estado == false){        
        value_0 = boton_0.value;
        valor_izquierdo = valor_izquierdo + value_0;    
        boton_input1.value = valor_izquierdo;                
    }else{        
        value_0 = boton_0.value;
        valor_derecho = valor_derecho + value_0;
        boton_input1.value = valor_derecho; 
    }  
});

boton_reset.addEventListener("click", function(){
    estado = false;
    valor_izquierdo = "";
    valor_derecho = "";
    boton_input1.value = "";
    
});

boton_sum.addEventListener("click", function(){
    estado = true;    
    contenido_suma1 = boton_sum.value;   
    boton_input1.value = "+";
    
      
});

boton_rest.addEventListener("click", function(){
    estado = true;    
    contenido_rest1 = boton_rest.value;   
    boton_input1.value = "-";
     
});

boton_mult.addEventListener("click", function(){
    estado = true;    
    contenido_mult1 = boton_mult.value;   
    boton_input1.value = "*";
    
});

boton_div.addEventListener("click", function(){
    estado = true;    
    contenido_div1 = boton_div.value;   
    boton_input1.value = "/";
     
});

    
// RESULTADO 

boton_result.addEventListener("click", function(){   

    var resultado;
    var valor_izquierdoFinal;
    var valor_derechoFinal;

    if(contenido_suma1 == "+"){
        valor_izquierdoFinal = parseFloat(valor_izquierdo);
        valor_derechoFinal = parseFloat(valor_derecho);
        resultado = valor_izquierdoFinal + valor_derechoFinal;
        boton_input1.value = resultado;
        
    }else if(contenido_rest1 == "-"){
        valor_izquierdoFinal = parseFloat(valor_izquierdo);
        valor_derechoFinal = parseFloat(valor_derecho);
        resultado = valor_izquierdoFinal - valor_derechoFinal;
        boton_input1.value = resultado;

    }else if(contenido_mult1 == "*"){
        valor_izquierdoFinal = parseFloat(valor_izquierdo);
        valor_derechoFinal = parseFloat(valor_derecho);
        resultado = valor_izquierdoFinal * valor_derechoFinal;
        boton_input1.value = resultado;

    }else if(contenido_div1 == "/"){
        valor_izquierdoFinal = parseFloat(valor_izquierdo);
        valor_derechoFinal = parseFloat(valor_derecho);
        resultado = valor_izquierdoFinal / valor_derechoFinal;
        boton_input1.value = resultado;       
    }
    
});


// -------------------------- CONVERTER -----------------------------

var texto = document.getElementById('texto');
var mayus = document.getElementById('mayuscula');
var minus = document.getElementById('minuscula');
var cant = document.getElementById('caracteres');
var reset = document.getElementById('boton');

texto.addEventListener("input", function(){
    value_texto = texto.value;
    mayus.textContent = value_texto.toUpperCase();
    minus.textContent = value_texto.toLowerCase();
    cant.textContent = value_texto.length;
});

reset.addEventListener("click", function(){
    var reset1 = "";
    value_texto = texto.value;
    texto.value = reset1;
    mayus.textContent = reset1;
    minus.textContent = reset1;
    cant.textContent = reset1;
})

