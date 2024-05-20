
document.getElementById('formulario').addEventListener('submit', function(event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var tel = document.getElementById('tel').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();
    var tipoContacto = document.getElementById('sel-tipo').value;
    
    // Variable para almacenar mensajes de error
    var mensajeError = '';

    // Validar el campo de nombre
    if (nombre === '') {
        mensajeError += 'El campo de Nombre y Apellido no puede estar vacío.\n';
    } else if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        mensajeError += 'El Nombre y Apellido solo puede contener letras y espacios.\n';
    }

    // Validar el campo de correo electrónico
    if (email === '') {
        mensajeError += 'El campo de Correo Electrónico no puede estar vacío.\n';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mensajeError += 'El formato del Correo Electrónico no es válido.\n';
    }

    // Validar el campo de teléfono
    if (tel === '') {
        mensajeError += 'El campo de Teléfono no puede estar vacío.\n';
    } else if (!/^\d{2} \d{4} \d{4}$/.test(tel)) {
        mensajeError += 'El formato del Teléfono debe ser 11 1234 5678.\n';
    }

    // Validar la selección de tipo de contacto
    if (tipoContacto === 'sel-tipo') {
        mensajeError += 'Debe seleccionar un tipo de contacto.\n';
    }

    // Validar el campo de mensaje
    if (mensaje === '') {
        mensajeError += 'El campo de Mensaje no puede estar vacío.\n';
    }

    // Mostrar mensajes de error si hay alguno
    if (mensajeError) {
        alert(mensajeError);
    } else {
        // Si no hay errores, puedes proceder con el envío del formulario
        // alert('Formulario enviado correctamente.');
        document.getElementById('formulario').submit();
        return true;
    }
});



