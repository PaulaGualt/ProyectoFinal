let formLogin = document.getElementById("formularioLogin")

formLogin.addEventListener('submit', (e) => {
    e.preventDefault()
    let emailUsuario = document.getElementById("email").value;
    let contraseñaUsuario = document.getElementById("contraseña").value;

    fetch('http://localhost:4000/UsuariosRegistrados', {
        method: 'GET',
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