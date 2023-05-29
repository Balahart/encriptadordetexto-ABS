//Variables
const mensajeEntrada = document.querySelector(".mensaje-in");
const mensajeSalida = document.querySelector(".mensaje-out");
const txtTitulo = document.querySelector(".titulo-msj");
const txtMensaje = document.querySelector(".mensaje-descripcion");
const txtCopiaEncriptado =document.querySelector(".copiar-encriptado");
const prohibidos = /[A-Z0-9~!@#$%&*()_+|{}[\]\\\/?><^:"`;.,áéíóúàèìòù']/g;

// Función de encriptar
function fn_encriptar(){
    let texto = document.getElementById("mensaje-in").value;
    let encriptaTexto = texto.replace(/[aeiou]/g, (i)=>{
        if (i=="a"){return "ai";};
        if (i=="e"){return "enter";};
        if (i=="i"){return "imes";};
        if (i=="o"){return "ober";};
        if (i=="u"){return "ufat";};
    });
    return encriptaTexto;
}

//Función de desencriptar
function fn_desencriptar(){
    let texto = document.getElementById("mensaje-in").value;
    let desencriptaTexto=texto.replace(/(ai)|(enter)|(imes)|(ober)|(ufat)/g, (i)=>{
        if(i=="ai"){return "a";};
        if(i=="enter"){return "e";};
        if(i=="imes"){return "i";};
        if(i=="ober"){return "o";};
        if(i=="ufat"){return "u";};
    });
    return desencriptaTexto;
}

//Función para copia de texto
function fn_copiar(){
    var contenidoCopiado = document.querySelector(".mensaje-out");
    contenidoCopiado.select();
    document.execCommand('copy');
}

//Función para asignar a botón de encriptado (validación y encriptación de texto)
function btnEncriptar(){
    var textoValidacion = document.querySelector(".mensaje-in").value;
    if (textoValidacion == ""){
        alert("Ingresa un texto o frase para continuar");
    } else if (textoValidacion.match(prohibidos) != textoValidacion.match(prohibidos)){
        alert("Recuerda que el texto solo puede estar escrito en letras minúsculas, sin acentos y sin caracteres especiales")
    } else{
        const textoEncriptado = fn_encriptar(mensajeEntrada.value)
        mensajeSalida.value = textoEncriptado
        mensajeEntrada.value = "";
        mensajeSalida.style.backgroundImage = "none";
        txtTitulo.style.visibility = "hidden";
        txtMensaje.style.visibility = "hidden";
        txtCopiaEncriptado.style.visibility = "visible";
    }
}

//Función para asignar a botón de desencriptado (validación y desencriptación de texto)
function btnDesencriptar(){
    var textoValidacion = document.querySelector(".mensaje-in").value;
    if (textoValidacion == ""){
        alert("Ingresa un texto o frase para continuar");
    } else if (textoValidacion.match(prohibidos) != textoValidacion.match(prohibidos)){
        alert("Recuerda que el texto solo puede estar escrito en letras minúsculas, sin acentos y sin caracteres especiales")
    } else{
        const textoDesencriptado = fn_desencriptar(mensajeEntrada.value)
        mensajeSalida.value = textoDesencriptado
        mensajeEntrada.value = "";
        mensajeSalida.style.backgroundImage = "none";
        txtTitulo.style.visibility = "hidden";
        txtMensaje.style.visibility = "hidden";
        txtCopiaEncriptado.style.visibility = "visible";
    }
}


