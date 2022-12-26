var text = document.querySelector("#numero");

var ruc = "";
var numeros =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var guionExiste =false;
var longitud = 0;

text.addEventListener('keyup', () => {
    longitud = ruc.length
    if (longitud === 0 ){
        guionExiste = false;
    }
    if (text.value.length < longitud){
        if (!ruc.includes('-'))
            guionExiste = false
        ruc = text.value;
        document.getElementById("numero").style.borderColor = "red"
        return;
    }
    if (guionExiste && ruc.charAt(longitud - 1)!== "-") {
        text.value = ruc;
        return;
    }

    ingresado = text.value.charAt(text.value.length - 1);
    if (text.value.length === 1 && ingresado === "-") {
        console.log("borratodo")
        text.value = '';
        return;
    }
    if (ingresado === "-" && guionExiste) {
        text.value = ruc;
        document.getElementById("numero").style.borderColor = "green"
        console.log("hola")
        return;
    }

    if (ingresado === '-') {
            guionExiste = true;
            document.getElementById("numero").style.borderColor = "green"
            console.log("hola")
    }


    
    if (numeros.includes(ingresado) || ingresado === '-') {
         ruc += ingresado;
            text.value = ruc;  
          

    } else {
        text.value = ruc;
        
    }

    
            
})