const openModalRegistro = document.getElementById('btnCrearCuenta');
const modalRegistro = document.querySelector('.modalRegistro');
const cerrarModalRegistro = document.getElementById('modalRegistroCerrar');

openModalRegistro.addEventListener('click', (e)=>{
    e.preventDefault();
    modalRegistro.classList.add('mostrarModalRegistro')
});

cerrarModalRegistro.addEventListener('click', (e)=>{
    e.preventDefault();
    modalRegistro.classList.remove('mostrarModalRegistro');
});