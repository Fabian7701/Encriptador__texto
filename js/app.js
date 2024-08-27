//Selección de elemntos.
const botonEncriptar= document.querySelector(".encriptador__botones__encriptar");
const textoEncriptar= document.querySelector(".encriptador__input");
const alerta= document.querySelector(".encriptador__texto__alerta");
const resultado=document.querySelector(".desencriptado__container__mensaje");
const contenidoCapturado=document.querySelector(".desencriptado__container");
const botonCopiar=document.querySelector(".desencriptado__container__boton");
const botonDesencriptar=document.querySelector(".encriptador__botones__desencriptar");


//Boton encriptador.
botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    //Esta linea reemplaza todos los valores o caracteres del paratesis por un espacio vacio.
    let txt= texto.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );

    if(texto == ""){
        alerta.style.color= "#00BCD4";
        alerta.style.fontweight = "800";
        alerta.textContent = "El campo de texto no debe estar vacío";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1.500);
    
    }

    else if(texto !==txt){
        alerta.style.color= "#00BCD4";
        alerta.style.fontweight = "800";
        alerta.textContent = "No se aceptan textos con acentos y caracteres especiales";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1.500);
    
    }

    else if(texto !== texto.toLowerCase()){
        alerta.style.color= "#00BCD4";
        alerta.style.fontweight = "800";
        alerta.textContent = "El texto no debe contener mayúsculas";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1.500);
    
    }

    else{

        texto=texto.replace(/e/mg, "enter");
        texto=texto.replace(/i/mg, "imes");
        texto=texto.replace(/a/mg, "ai");
        texto=texto.replace(/o/mg, "ober");
        texto=texto.replace(/u/mg, "ufat");

        resultado.innerHTML=texto;
        botonCopiar.style.visibility="inherit";
        contenidoCapturado.remove();
    }

});


//Boton desencriptador.
botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    //Esta linea reemplaza todos los valores o caracteres del paratesis por un espacio vacio.
    let txt= texto.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );

    if(texto == ""){
        alerta.style.color= "#00BCD4";
        alerta.style.fontweight = "800";
        alerta.textContent = "El campo de texto no debe estar vacío";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1.500);
    
    }

    else if(texto !==txt){
        alerta.style.color= "#00BCD4";
        alerta.style.fontweight = "800";
        alerta.textContent = "No se aceptan textos con acentos y caracteres especiales";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1.500);
    
    }

    else if(texto !== texto.toLowerCase()){
        alerta.style.color= "#00BCD4";
        alerta.style.fontweight = "800";
        alerta.textContent = "El texto no debe contener mayúsculas";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1.500);
    
    }

    else{

        texto=texto.replace(/enter/mg, "e");
        texto=texto.replace(/imes/mg, "i");
        texto=texto.replace(/ai/mg, "a");
        texto=texto.replace(/ober/mg, "o");
        texto=texto.replace(/ufat/mg, "u");

        resultado.innerHTML=texto;
        botonCopiar.style.visibility="inherit";
        contenidoCapturado.remove();
    }

});


//Boton copiar.
botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar=resultado;
    copiar.select();
    document.execCommand("copy");
});