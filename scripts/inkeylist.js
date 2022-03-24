import { mostrarProdMarca } from "../modulos/mostrarProdMarca.js"


let contenedorProductMarIl = document.getElementById("contProductMarIl")

document.addEventListener('DOMContentLoaded', async() =>{
    let res = await fetch('http://localhost:4000/productos');
    let data = await res.json();
    console.log(data)

    let marcaInkeyList = data.filter(item => item.marca == 'The Inkey List')
    
    mostrarProdMarca(marcaInkeyList, contenedorProductMarIl);
})