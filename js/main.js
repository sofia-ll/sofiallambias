let mensajeCosto = "";
let continuar = true;

const mensajeInicial = "¿Querés comprar láminas de la artista SOFIA LLAMBIAS?"
const mensajeUno = "¡Te damos la bienvenida a nuestra TIENDA online!"
const mensajeDos = "¿Querés comprar obras originales de la artista SOFIA LLAMBIAS?"
const mensajeTres = "Contactame al 1532122100 o a sofiallambias@gmail.com"
const mensajeCuatro = "Te invito a que recorras mi sitio web. Vas a ver que hago litografías, esculturas, dibujos, pinturas, fotografía y video, también calados. Cada técnica tiene su encanto. ¡Ojalá disfrutes de mis obras tanto como yo al hacerlas!";


const carrito = []

const laminas = [{imagen:"../img/litografia/paradigmas1.jpg", numeroLamina: 0, nombre: "Litografía 1", precio: 10000 },
                {imagen:"../img/escultura/esc1.jpg", numeroLamina: 1, nombre: "Escultura 1", precio: 10000 },
                {imagen:"../img/pintura1.jpg", numeroLamina: 2, nombre: "Pintura 1", precio: 12000 },
                {imagen:"../img/calados1.jpg", numeroLamina: 3, nombre: "Calado 1", precio: 10000 },
                {imagen:"../img/dibujo1.jpg", numeroLamina: 4, nombre: "Dibujo 1", precio: 12000 },
                {imagen:"../img/fotografia1.jpg", numeroLamina: 5, nombre: "Fotografía 1", precio: 10000 }];

function comprarLaminas(){
    
        alert(mensajeUno)
        if(confirm(mensajeInicial)){
            iniciarCompra()
        }


        else{
            if(confirm(mensajeDos)){
                alert(mensajeTres)
                alert(mensajeCuatro)
                }
            else{
                alert(mensajeCuatro)
            }
        }
}

let unidades = parseInt(prompt("¿Cuántas unidades querés llevar?"))

function iniciarCompra() {

    let numeroLamina = prompt("¿Cuál es el número de la lámina que querés comprar?")
    let laminaComprada = buscarLamina(numeroLamina)
        
    if (laminaComprada === undefined) {
        alert("⛔️ Elegí una lámina, por favor.")
        return
    }
    else {
        carrito.push(laminaComprada)
        alert(`La lámina ${laminaComprada.nombre} se agregó tu carrito. 😀`)
        let unidades = parseInt(prompt("¿Cuántas unidades querés llevar?"))
        let seguir = confirm("¿Querés elegir otra lámina?")
        if(seguir) {
            iniciarCompra()
        }
        else{
            terminarCompra()
        }
    }
    }

function buscarLamina(numeroLamina) {
    let busquedaLamina = laminas.find(lamina => lamina.numeroLamina === parseInt(numeroLamina))
        return busquedaLamina;
}


function terminarCompra(){
        if(carrito.length === 0){
            console.warn("¡Tu carrito está vacío! 😞")
            return
        }
        else {
            subtotal()
        }
            }

function subtotal(){
    const total = carrito.reduce((acc, lamina) => acc + lamina.precio * unidades, 0).toFixed(2)
    confirm(`El total es de $ ${total}`)
    console.log(total)
}

