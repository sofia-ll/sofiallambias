let mensajeCosto = "";
let continuar = true;

const mensajeInicial = "¿Querés comprar láminas de la artista SOFIA LLAMBIAS?"
const mensajeUno = "¡Te damos la bienvenida a nuestra TIENDA online!"
const mensajeDos = "¿Querés comprar obras originales de la artista SOFIA LLAMBIAS?"
const mensajeTres = "Contactame al 1532122100 o a sofiallambias@gmail.com"
const mensajeCuatro = "Te invito a que recorras mi sitio web. Vas a ver que hago litografías, esculturas, dibujos, pinturas, fotografía y video, también calados. Cada técnica tiene su encanto. ¡Ojalá disfrutes de mis obras tanto como yo al hacerlas!";


const carrito = []

const laminas = [{imagen:"../img/litografia/paradigmas1.jpg", alt:"obras tecnica litografia", numeroLamina: 0, nombre: "Litografía 1", precio: 10000, tamano: "35 cm x 50 cm"},
                {imagen:"../img/escultura/escultura1.jpg", alt:"obras tecnica escultura", numeroLamina: 1, nombre: "Escultura 1", precio: 10000, tamano: "35 cm x 50 cm"},
                {imagen:"../img/pintura1.jpg", alt:"obras tecnica pintura", numeroLamina: 2, nombre: "Pintura 1", precio: 12000, tamano: "50 cm x 50 cm"},
                {imagen:"../img/calados1.jpg", alt:"obras tecnica calado", numeroLamina: 3, nombre: "Calado 1", precio: 10000, tamano: "35 cm x 50 cm"},
                {imagen:"../img/dibujo1.jpg", alt:"obras tecnica dibujo", numeroLamina: 4, nombre: "Dibujo 1", precio: 12000, tamano: "50 cm x 50 cm"},
                {imagen:"../img/fotografia1.jpg", alt:"obras tecnica fotografia", numeroLamina: 5, nombre: "Fotografía 1", precio: 10000, tamano: "35 cm x 50 cm"}];

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

function buscarLamina(numeroLamina) {
    let busquedaLamina = laminas.find(lamina => lamina.numeroLamina === parseInt(numeroLamina))
        return busquedaLamina;
}

function cardsDinamicasHTML(lamina){
        return `<article class="artimgobras">
                    <img class="img_obras" src="${lamina.imagen}" alt="${lamina.alt}">
                    <div class="cont">
                        <div class="card-body text-center">
                            <p class="card-text fs-6 justify producto titulo"><span class="bold"></span> ${lamina.nombre}</p>
                        </div>
                        <div class="card-body text-center">
                            <p class="card-text fs-6 justify tamano"><span class="bold">${lamina.tamano}</span> </p>
                        </div>
                        <div class="card-body text-center">
                            <p class="card-text fs-6 justify precio"><span class="bold">$ ${lamina.precio}</span> </p>
                        </div>
                        <div class="card-body text-center">
                            <button class="card-text fs-6 justify button boton_tienda" id="${lamina.numeroLamina}">
                                Agregar
                            </button>
                        </div>
                    </div>
            </article>`
    }

function onClickBotones() {
	const buttons = document.querySelectorAll("button");
    if (botones !== null){
        for (const button of buttons) {
		button.addEventListener("click", (e) => {
			agregarAlCarrito(e.target.id);
		});
	}
    }
	
}

function cargarLaminas(array) {
    imagenes_obras.innerHTML = ""
    array.forEach((lamina) => { imagenes_obras.innerHTML += cardsDinamicasHTML(lamina) })
    onClickBotones()
}

onClickBotones()

function agregarAlCarrito(numeroLamina) {
	let resultado = laminas.find((lamina) => lamina.numeroLamina === parseInt(numeroLamina));
	if (resultado !== undefined) {
		carrito.push(resultado);
		console.log("Se agregó la lámina", resultado.nombre, "al carrito.");
		guardarCarrito(carrito);
	}
}

function guardarCarrito(carrito) {
	if (carrito.length > 0) {
		localStorage.setItem("carritoLaminas", JSON.stringify(carrito));
	}
}