const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const mensaje = document.getElementById("mensaje");

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = "mensaje " + (tipo || "");
}

function correoValido(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

togglePassword.addEventListener("click", function () {
  const esPassword = password.type === "password";
  password.type = esPassword ? "text" : "password";
  togglePassword.textContent = esPassword ? "Ocultar" : "Mostrar";
});

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const valorEmail = email.value.trim();
  const valorPassword = password.value;

  if (valorEmail === "") {
    mostrarMensaje("El correo no puede estar vacío.", "error");
    email.focus();
    return;
  }

  if (!correoValido(valorEmail)) {
    mostrarMensaje("Ingresa un correo con formato válido.", "error");
    email.focus();
    return;
  }

  if (valorPassword.length < 8) {
    mostrarMensaje("La contraseña debe tener al menos 8 caracteres.", "error");
    password.focus();
    return;
  }

  mostrarMensaje("Datos válidos. Acceso de demostración correcto.", "exito");
});
