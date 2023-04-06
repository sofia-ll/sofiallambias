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
                                <img class="img_obras" src="../../img/litografia/paradigmas1.jpg" alt="obras tecnica litografia">
                            </th>
                            <td class="carrito-laminas">
                                <small>Título</small>
                                <h3>Litografía 1</h3>
                            </td>
                            <td class="carrito-lamina-tamano">
                                <small>Tamaño</small>
                                <p>35 cm x 50 cm</p>
                            </td>
                            <td class="carrito-lamina-precio">
                                <small>Precio</small>
                                <p>$10000</p>
                            </td>
                            <td class="carrito-lamina-unidades">
                                <small>Unidades</small>
                                <p>1</p>
                            </td>

                            <td>
                                <button class="carrito-producto-eliminar"> 
                                <i class="bi bi-trash-fill"></i>
                            </button>
                            </td>
                        </tr>`
}

