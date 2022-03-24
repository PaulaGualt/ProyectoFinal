export const mostrarProdMarca = (data, contenedor) => {

  data.forEach(producto => {
    let { id, img, nombreProd, precio } = producto;

    contenedor.innerHTML += `
        <div class="contenedorFicha">
        <section class="fichaSecccion">
          <div class="ficha">
          <div class="fichaEncabezado">
            <a href="#"><img src="${img}" alt=""></a></div>
            <div class="cuerpoFicha">
              <h4 class="nombreProducto">${nombreProd}</h4>
              <h4 class="precioProducto"> $ ${precio}</h4>
            </div>
            <div class="pieFicha">
              <a href="#"><i class="fa-solid fa-heart"></i></a>
              <button id=${id} class="agregar">Agregar</button>
            </div>
            </div>
        </section>

      </div>
        
    `

  })
}
