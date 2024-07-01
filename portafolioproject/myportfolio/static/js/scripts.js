$(document).ready(function () {
  $('#contactForm').validate({
    rules: {
      nombre: "required",
      email: {
        required: true,
        email: true
      },
      mensaje: "required"
    },
    messages: {
      nombre: "Por favor, escriba su nombre",
      email: {
        required: "Por favor ingrese su correo electrónico",
        email: "Por favor introduzca un correo electrónico válido"
      },
      mensaje: "Por favor ingrese un mensaje"
    },
  });
});