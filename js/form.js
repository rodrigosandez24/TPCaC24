function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validación de campos vacíos
    if (nombre === "" || email === "" || tel === ""|| mensaje === "") {
        alert("Todos los campos son obligatorios.");js/form.js
        return false;
    }

    // Validación de formato nombre
    var nombreRegExp = /^[a-zA-Z ]+$/;
    if (!nombre.match(nombreRegExp)) {
        alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
        return false;
    }
        
    // Validación de formato de email electrónico
    var emailRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!email.match(emailRegExp)) {
        alert("El email electrónico no es válido.");
        return false;
    }

    // Validación de formato de número de teléfono en Argentina
    var telRegExp = /^(?:\+54|0)(?:11|2[0-9]|3[0-9]|4[0-9]|5[0-9]|9[0-9])[0-9]{6,7}$/;
    if (!tel.match(telRegExp)) {
        alert("El número de teléfono no es válido en Argentina.");
        return false;
    }

    return true;


}