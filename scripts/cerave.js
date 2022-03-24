import { mostrarProdMarca } from "../modulos/mostrarProdMarca.js"


let contenedorProductMarCV = document.getElementById("contProductMarCV")

document.addEventListener('DOMContentLoaded', async() =>{
    let res = await fetch('http://localhost:4000/productos');
    let data = await res.json();
    console.log(data)

    let marcaCerave = data.filter(item => item.marca == 'Cerave')
    
    mostrarProdMarca(marcaCerave, contenedorProductMarCV);
})