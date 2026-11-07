const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const mensaje = document.getElementById("mensaje");

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = "mensaje " + (tipo || "");
}

function limpiarMensaje() {
  mostrarMensaje("", "");
}

function correoValido(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

function validarEmail() {
  const valor = email.value.trim();

  if (valor === "") {
    mostrarMensaje("El correo no puede estar vacío.", "error");
    return false;
  }

  if (!correoValido(valor)) {
    mostrarMensaje("Ingresa un correo con formato válido.", "error");
    return false;
  }

  return true;
}

function validarPassword() {
  if (password.value.length < 8) {
    mostrarMensaje("La contraseña debe tener al menos 8 caracteres.", "error");
    return false;
  }

  return true;
}

togglePassword.addEventListener("click", function () {
  const esPassword = password.type === "password";
  password.type = esPassword ? "text" : "password";
  togglePassword.textContent = esPassword ? "Ocultar" : "Mostrar";
  togglePassword.setAttribute("aria-pressed", String(esPassword));
});

email.addEventListener("input", limpiarMensaje);
password.addEventListener("input", limpiarMensaje);

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (!validarEmail()) {
    email.focus();
    return;
  }

  if (!validarPassword()) {
    password.focus();
    return;
  }

  mostrarMensaje("Datos válidos. Acceso de demostración correcto.", "exito");
});