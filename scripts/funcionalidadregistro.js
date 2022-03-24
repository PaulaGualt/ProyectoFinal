let formRegistro = document.getElementById("formularioRegistro");
let mostrarUsuario =document.getElementById("nameUser")

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault()
    let nombreUsuarioNuevo =document.getElementById("nombreNuevoUsuario").value;
    let apellidoUsuarioNuevo = document. getElementById("apellidoNuevoUsuario").value;
    let emailUsuarioNuevo = document.getElementById("emailNuevoUsuario").value;
    let contraseñaUsuarioNuevo = document.getElementById("contraseñaNuevoUsuario").value;

    fetch('http://localhost:4000/UsuariosRegistrados', {
        method: 'POST',
        body: JSON.stringify({
            nombreUser: nombreUsuarioNuevo,
            apellidoUser: apellidoUsuarioNuevo,
            emailUser: emailUsuarioNuevo,
            contraseñaUser: contraseñaUsuarioNuevo,
        }),
        headers: {
            'Content-Type': "application/json; charset=UTF-8"

        }
    }).then(() => {
        window.location.href="../pages/cerave.js"
        alert("Te has registrado correctamente")
        
        document.innerHTML = `esto es una prueba`
    }).catch((err)=> {
        alert(error)
    })

})