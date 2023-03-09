let mensajeCosto = "";
let continuar = true;

const mensajeInicial = "¿Querés comprar láminas de SOFIA LLAMBIAS? \n"

const mensajeDos = "Ingresa el código de la lámina que quisieras comprar \n" +
"a) Litografía 1 \n" +
"b) Escultura 1 \n" +
"c) Pintura 1 \n" +
"d) Calados 1 \n" +
"e) Dibujo 1 \n" +
"f) Fotografía 1\n" 

function comprarLaminas(){
    if (confirm("¡Te damos la bienvenida a nuestra TIENDA online! \n" + "¿Querés comprar obras originales de SOFIA LLAMBIAS?") === true) {
        alert("Contactame al 1532122100 o a sofiallambias@gmail.com")
    } else {
    confirm(mensajeInicial)
    iniciarConsulta()
    }
}

function iniciarConsulta() {
    let seleccion = prompt(mensajeDos).toLowerCase().trim()
    
    if (seleccion !== "a" && seleccion !== "b" && seleccion !== "c" 
        && seleccion !== "d" && seleccion !== "e" && seleccion !== "f") {
        alert("⛔️ Debes ingresar un código válido, por favor.")
    } else {
        switch(seleccion) {
            case "a":
                alert("La lámina - Litografía 1 - cuesta $10.000")
                break
            case "b":
                alert("La lámina - Escultura 1 - cuesta $10.000")
                break
            case "c":
                alert("La lámina - Pintura 1 - cuesta $12.000")
                break
            case "d":
                alert("La lámina - Calados 1 - cuesta $10.000")
                break
            case "e":
                alert("La lámina - Dibujo 1 - cuesta $12.000")
                break
            case "f":
                alert("La lámina - Fotografía 1 - cuesta $10.000")
                break
            default: 
                console.error("Algo se rompió. No debería ver este mensaje.")
        }
    }
}

function preguntarPrecios() {
    comprarLaminas()
    while(continuar) {
        iniciarConsulta()
        continuar = confirm("¿Deseas conocer otro precio?")
    }
}