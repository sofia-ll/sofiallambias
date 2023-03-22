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

const mensajeTres = "Te invito a que recorras mi sitio web. Vas a ver que hago litografías, esculturas, dibujos, pinturas, fotografía y video, también calados. Cada técnica tiene su encanto. ¡Ojalá disfrutes de mis obras tanto como yo al hacerlas!";

function comprarLaminas(){
    if (confirm("¡Te damos la bienvenida a nuestra TIENDA online! \n" + "¿Querés comprar obras originales de SOFIA LLAMBIAS?") === true) {
        confirm("Contactame al 1532122100 o a sofiallambias@gmail.com") + confirm(mensajeTres) 
    }
    else {
        confirm(mensajeInicial)
        if(mensajeInicial === true){
            iniciarCompra()
            }
            else{
                alert(mensajeTres)
            }
    }
}

    function noCompraLamina(){
        if(mensajeInicial === false){
            confirm(mensajeTres)
        }
    }

function iniciarCompra() {
    // let seleccion = prompt(mensajeDos).toLowerCase().trim()
    let numeroLamina = prompt("¿Cuál es el número de la lámina que querés comprar?")
    let laminaComprada = buscarLamina(numeroLamina)
        
    if (laminaComprada === undefined) {
        alert("⛔️ Elegí una lámina, por favor.")
        return
    }
    else {
        carrito.push(laminaComprada)
        alert("Agregaste la lámina ${laminaComprada.nombre} al carrito")
    }
    
    // if (seleccion !== "a" && seleccion !== "b" && seleccion !== "c" 
    //     && seleccion !== "d" && seleccion !== "e" && seleccion !== "f") {
    //     alert("⛔️ Debes ingresar un código válido, por favor.")
    // } else {
    //     switch(seleccion) {
    //         case "a":
    //             alert("La lámina - Litografía 1 - cuesta $10.000")
    //             break
    //         case "b":
    //             alert("La lámina - Escultura 1 - cuesta $10.000")
    //             break
    //         case "c":
    //             alert("La lámina - Pintura 1 - cuesta $12.000")
    //             break
    //         case "d":
    //             alert("La lámina - Calados 1 - cuesta $10.000")
    //             break
    //         case "e":
    //             alert("La lámina - Dibujo 1 - cuesta $12.000")
    //             break
    //         case "f":
    //             alert("La lámina - Fotografía 1 - cuesta $10.000")
    //             break
    //         default: 
    //             console.error("Algo se rompió. No debería ver este mensaje.")
    //     }
    // }
}

function preguntarPrecios() {
    comprarLaminas()
    while(continuar) {
        iniciarConsulta()
        continuar = confirm("¿Deseas conocer otro precio?")
    }
}

const carrito = []

const laminas = [{imagen:"../img/litografia/paradigmas1.jpg", codigo: 0, nombre: "Litografía 1", precio: 10000 },
                {imagen:"../img/escultura/esc1.jpg", codigo: 1, nombre: "Escultura 1", precio: 10000 },
                {imagen:"../img/pintura1.jpg", codigo: 2, nombre: "Pintura 1", precio: 12000 },
                {imagen:"../img/calados1.jpg", codigo: 3, nombre: "Calado 1", precio: 10000 },
                {imagen:"../img/dibujo1.jpg", codigo: 4, nombre: "Dibujo 1", precio: 12000 },
                {imagen:"../img/fotografia1.jpg", codigo: 5, nombre: "Fotografía 1", precio: 10000 }];

function buscarLamina(codigo) {
    let busquedaLamina = laminas.find(lamina => lamina.codigo === parseInt(codigo))
        return busquedaLamina;
}

