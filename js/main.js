let a = document.getElementById("datos").value;
        datos.focus();
function cifrar (){
    let texto1 = document.getElementById("datos").value;
        textoNuevo1 = texto1.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.getElementById("resultado").value = textoNuevo1; 
        datos.value= ""; 
        datos.focus();  
}
function descifrar (){
        let texto2 = document.getElementById("datos").value;
        textoNuevo2 = texto2.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.getElementById("resultado").value = textoNuevo2;
        datos.value= "";
}
function copiar(){
    let content = document.getElementById("resultado");
        content.select();
        document.execCommand("copy");
        resultado.value = "";
        alert("Copiado!");
        datos.focus();
}
function validar(e){
    var key = e.keyCode || e.which;
    var tecla = String.fromCharCode(key).toLowerCase();
    var letras = " abcdefghijklmnopqrstuvwxyz";
    var especiales = [8,13];
    var tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]){
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        alert("Ingresar solo letras");
        return false;
    }
}
