let mensajeCosto = "";
let continuar = true;

const mensajeInicial = "¿Querés comprar láminas de la artista SOFIA LLAMBIAS?"
const mensajeUno = "¡Te damos la bienvenida a nuestra TIENDA online!"
const mensajeDos = "¿Querés comprar obras originales de la artista SOFIA LLAMBIAS?"
const mensajeTres = "Contactame al 1532122100 o a sofiallambias@gmail.com"
const mensajeCuatro = "Te invito a que recorras mi sitio web. Vas a ver que hago litografías, esculturas, dibujos, pinturas, fotografía y video, también calados. Cada técnica tiene su encanto. ¡Ojalá disfrutes de mis obras tanto como yo al hacerlas!";


const carrito = []

const laminas = [{imagen:"../img/litografia/paradigmas1.jpg", numeroLamina: 0, nombre: "Litografía 1", precio: 10000, tamano: "35 cm x 50 cm", id: "cero"},
                {imagen:"../img/escultura/esc1.jpg", numeroLamina: 1, nombre: "Escultura 1", precio: 10000, tamano: "35 cm x 50 cm", id: "uno" },
                {imagen:"../img/pintura1.jpg", numeroLamina: 2, nombre: "Pintura 1", precio: 12000, tamano: "50 cm x 50 cm" id: "dos" },
                {imagen:"../img/calados1.jpg", numeroLamina: 3, nombre: "Calado 1", precio: 10000, tamano: "35 cm x 50 cm", id: "tres"  },
                {imagen:"../img/dibujo1.jpg", numeroLamina: 4, nombre: "Dibujo 1", precio: 12000, tamano: "50 cm x 50 cm", id: "cuatro" },
                {imagen:"../img/fotografia1.jpg", numeroLamina: 5, nombre: "Fotografía 1", precio: 10000, tamano: "35 cm x 50 cm", id: "cinco" }];

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

// function cardsDinamicasMobile(){
    const cardsDinamicasMob = (lamina)=>{
        return `<div class="col fotoperfilcv mainmobile">
            <div class="card" style="width: 100%;">
                    <div class="card-img-top">
                        ${lamina.imagen}   
                    </div>
                    <div class="card-body text-center">
                        <p class="card-text fs-6 justify producto"><span class="bold">0 - </span> ${lamina.nombre} </p>
                    </div>
                    <div class="card-body text-center">
                        <p class="card-text fs-6 justify tamaño"><span class="bold">${lamina.tamano}</span> </p>
                    </div>
                    <div class="card-body text-center">
                        <p class="card-text fs-6 justify precio"><span class="bold">${lamina.precio}</span> </p>
                    </div>
                    <div class="card-body text-center">
                        <p class="card-text fs-6 justify precio"><span class="bold">${lamina.unidades}</span> </p>
                    </div>
                    <div class="card-body text-center boton-cards">
                        <button class="card-text fs-6 justify button ${lamina.id} ">AGREGAR</button>
                    </div>
            </div>
        </div>`
    }
// }

const tbody = document.querySelector("tbody")

function retornoLaminaCarrito(lamina) {
                        return `<tr>
                            <th scope="row">
                                ${lamina.imagen}
                            </th>
                            <td class="carrito-laminas">
                                <small>Título</small>
                                <h3>${lamina.nombre}</h3>
                            </td>
                            <td class="carrito-lamina-tamano">
                                <small>Tamaño</small>
                                <p>${lamina.tamano}</p>
                            </td>
                            <td class="carrito-lamina-precio">
                                <small>Precio</small>
                                <p>${lamina.precio}$</p>
                            </td>
                            <td class="carrito-lamina-unidades">
                                <small>Unidades</small>
                                <p>$ ${lamina.unidades} </p>
                            </td>

                            <td>
                                <button class="carrito-producto-eliminar"> 
                                <i class="bi bi-trash-fill"></i>
                            </button>
                            </td>
                        </tr>`
}


// imagen:"../img/litografia/paradigmas1.jpg", numeroLamina: 0, nombre: "Litografía 1", precio: 10000, tamano: "35 cm x 50 cm", id: "cero"},

function cargarLaminas(array){
array.array.forEach(element => {
    tbody.innerHTML += retornoLaminaCarrito(element)
});
}