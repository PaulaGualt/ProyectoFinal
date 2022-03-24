import { mostrarProdMarca } from "../modulos/mostrarProdMarca.js"


let contProductMarTO = document.getElementById("contProductMarTO")

document.addEventListener('DOMContentLoaded', async() =>{
    let res = await fetch('http://localhost:4000/productos');
    let data = await res.json();
    console.log(data)

    let marcaTheOrdinary = data.filter(item =>item.marca == 'The Ordinary' )

    mostrarProdMarca(marcaTheOrdinary,contProductMarTO); 
})

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('agregar')){
       let idProducto = e.target.id;
       alert(idProducto)
    }
})