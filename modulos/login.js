const openModalLogin = document.getElementById('btnUsuario');
const modal = document.querySelector('.modalLogin');
const cerrarModal = document.getElementById('modalRegresar');

openModalLogin.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('mostrarModalLogin')
});

cerrarModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('mostrarModalLogin');
});

