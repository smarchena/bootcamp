let estado = false;
let valor_izquierdo = "";
let valor_derecho = "";
let operation = "";

let boton_9 = document.getElementById("key_9");
let boton_8 = document.getElementById("key_8");
let boton_7 = document.getElementById("key_7");
let boton_6 = document.getElementById("key_6");
let boton_5 = document.getElementById("key_5");
let boton_4 = document.getElementById("key_4");
let boton_3 = document.getElementById("key_3");
let boton_2 = document.getElementById("key_2");
let boton_1 = document.getElementById("key_1");
let boton_0 = document.getElementById("key_0");
let boton_sum = document.getElementById("key_sum");
let boton_rest = document.getElementById("key_rest");
let boton_mult = document.getElementById("key_mult");
let boton_div = document.getElementById("key_div");
let boton_result = document.getElementById("key_result");
let boton_reset = document.getElementById("key_reset");
let boton_input1 = document.getElementById("firstBox");

boton_9.addEventListener("click", function(){
    if(estado == false){        
        value_9 = boton_9.value;
        valor_izquierdo = valor_izquierdo + value_9;    
        boton_input1.value = valor_izquierdo;                
    }else{        
        value_9 = boton_9.value;
        valor_derecho = valor_derecho + value_9;
        boton_input1.value = valor_izquierdo + operation + valor_derecho + ' ' + '='; 
    }    
     
});

boton_8.addEventListener("click", function(){
    if(estado == false){        
        value_8 = boton_8.value;
        valor_izquierdo = valor_izquierdo + value_8;    
        boton_input1.value = valor_izquierdo;                
    }else{        
        value_8 = boton_8.value;
        valor_derecho = valor_derecho + value_8;
        boton_input1.value = valor_izquierdo + operation + valor_derecho + ' ' + '=';; 
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
        boton_input1.value = valor_izquierdo + operation + valor_derecho + ' ' + '=';; 
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
        boton_input1.value = valor_izquierdo + operation + valor_derecho + ' ' + '=';; 
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
        boton_input1.value = valor_izquierdo + operation + valor_derecho + ' ' + '=';; 
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
        boton_input1.value = valor_izquierdo + operation + valor_derecho + ' ' + '='; 
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
        boton_input1.value = valor_izquierdo + operation + valor_derecho + ' ' + '=';; 
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
        boton_input1.value = valor_izquierdo + operation + valor_derecho + ' ' + '=';; 
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
        boton_input1.value = valor_izquierdo + operation + valor_derecho + ' ' + '=';; 
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
        boton_input1.value = valor_izquierdo + operation + valor_derecho + ' ' + '=';; 
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
    operation = boton_sum.value;  
    boton_input1.value = valor_izquierdo + "\u002B"; 
      
});

boton_rest.addEventListener("click", function(){
    estado = true;    
    operation = boton_rest.value;   
    boton_input1.value = valor_izquierdo + "\u2212";
     
});

boton_mult.addEventListener("click", function(){
    estado = true;    
    operation = boton_mult.value;   
    boton_input1.value = valor_izquierdo + "\u00D7";
    
});

boton_div.addEventListener("click", function(){
    estado = true;    
    operation = boton_div.value;   
    boton_input1.value = valor_izquierdo + '\u00F7';
     
});

    
// RESULTADO 

boton_result.addEventListener("click", function(){   

    let resultado;
    let valor_izquierdoFinal;
    let valor_derechoFinal;

    if(operation == "+"){
        valor_izquierdoFinal = parseFloat(valor_izquierdo);
        valor_derechoFinal = parseFloat(valor_derecho);
        resultado = valor_izquierdoFinal + valor_derechoFinal;
        boton_input1.value = valor_izquierdo + '\u002B' + valor_derecho + ' = '+ resultado;
        
    }else if(operation == "-"){
        valor_izquierdoFinal = parseFloat(valor_izquierdo);
        valor_derechoFinal = parseFloat(valor_derecho);
        resultado = valor_izquierdoFinal - valor_derechoFinal;
        boton_input1.value = valor_izquierdo + '\u2212' + valor_derecho + ' = '+ resultado;

    }else if(operation == "*"){
        valor_izquierdoFinal = parseFloat(valor_izquierdo);
        valor_derechoFinal = parseFloat(valor_derecho);
        resultado = valor_izquierdoFinal * valor_derechoFinal;
        boton_input1.value = valor_izquierdo + '\u00D7' + valor_derecho + ' = '+ resultado;

    }else if(operation == "/"){
        valor_izquierdoFinal = parseFloat(valor_izquierdo);
        valor_derechoFinal = parseFloat(valor_derecho);
        resultado = valor_izquierdoFinal / valor_derechoFinal;
        boton_input1.value = valor_izquierdo + '\u00F7' + valor_derecho + ' = '+ resultado;       
    }
    
});


// -------------------------- CONVERTER -----------------------------

let texto = document.getElementById('texto');
let mayus = document.getElementById('mayuscula');
let minus = document.getElementById('minuscula');
let cant = document.getElementById('caracteres');
let reset = document.getElementById('boton');

texto.addEventListener("input", function(){
    value_texto = texto.value;
    mayus.textContent = value_texto.toUpperCase();
    minus.textContent = value_texto.toLowerCase();
    cant.textContent = value_texto.length;
});

reset.addEventListener("click", function(){
    let reset1 = "";
    value_texto = texto.value;
    texto.value = reset1;
    mayus.textContent = reset1;
    minus.textContent = reset1;
    cant.textContent = reset1;
})

