// funcion para agregar borde rojo en la imagen
function bordes(){

    img = document.querySelector("#img")

    if(img.style.border){
        img.style.border = ""
        console.log("sin borde")
    }
    else{
        img.style.border = "2px solid red"
        console.log("borde")
    }
}

// stickers

function total(){
    valor1 = Number(document.querySelector("#valor1").value);
    valor2 = Number(document.querySelector("#valor2").value);
    valor3 = Number(document.querySelector("#valor3").value);
    
    resultado = Number(valor1 + valor2 + valor3)
    
    parrafo = document.querySelector("#parrafo")

    if (resultado === 0){
        parrafo.innerHTML = "No tienes Stickers"
        console.log(0)
    }
    else if(resultado === 1){
        parrafo.innerHTML = "Llevas 1 Sticker"
        console.log(1)
    }
    else if (resultado === 2){
        parrafo.innerHTML = "Llevas 2 Stickers"
        console.log(2)
    }
    else if (resultado === 3){
         parrafo.innerHTML = "Llevas 3 Stickers"
         console.log(3)
    }
    else if (resultado === 4){
        parrafo.innerHTML = "Llevas 4 Stickers"
        console.log(4)
    }
    else if (resultado === 5){
        parrafo.innerHTML = "Llevas 5 Stickers"
        console.log(5)
    }
    else if (resultado === 6){
        parrafo.innerHTML = "Llevas 6 Stickers"
        console.log(6)
    }
    else if (resultado === 7){
        parrafo.innerHTML = "Llevas 7 Stickers"
        console.log(7)
    }
    else if (resultado === 8){
       parrafo.innerHTML = "Llevas 8 Stickers"
       console.log(8)
    }
    else if (resultado === 9){
       parrafo.innerHTML = "Llevas 9 Stickers"
       console.log(9)
    }
    else if (resultado === 10){
       parrafo.innerHTML = "Llevas 10 Stickers"
       console.log(10)
    }
    else{
        parrafo.innerHTML = "Llevas demasiados Stickers"
        console.log(">10")
           }
 }

//  password

function clave(){
    number1 = document.querySelector("#number1").value;
    number2 = document.querySelector("#number2").value;
    number3 = document.querySelector("#number3").value;

    password = number1 + number2 + number3
    texto = document.querySelector("#texto")

    if(password == 911){
        texto.innerHTML = "Password 1 Correcta"
        console.log("password1")
    }
    else if(password == 714){
        texto.innerHTML = "Password 2 Correcta"
        console.log("password2")
    }
    else{
        texto.innerHTML = "Password  Incorrecta"
        console.log("password incorrecta")
    }
}