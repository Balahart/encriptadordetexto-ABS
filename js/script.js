const mensajeEntrada = document.querySelector(".mensaje-in");
const mensajeSalida = document.querySelector(".mensaje-out");

function btnEncriptar(){
    const textoEncriptado = fn_encriptar(mensajeEntrada.value)
    mensajeSalida.value = textoEncriptado
}

function btnDesencriptar(){
    const textoDesencriptado = fn_desencriptar(mensajeEntrada.value)
    mensajeSalida.value = textoDesencriptado
}

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

