function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("tel").value;
    
    if (nombre.trim() === "" || email.trim() === "" || telefono.trim() === "") {
        alert("Por favor completa todos los campos.");
        return false;
    }
    
    // Validar el formato del email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor introduce un email válido.");
        return false;
    }
    
    // Validar el formato del teléfono
    var telefonoPattern = /^[0-9\s]{7,}$/;
    if (!telefonoPattern.test(telefono)) {
        alert("Por favor introduce un número de teléfono válido.");
        return false;
    }
    
    // Si la validación pasa, enviar el formulario
    return true;
}

