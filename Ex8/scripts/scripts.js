const formTitle = document.getElementById("form-title");
const fullNameInput = document.getElementById("full-name");

fullNameInput.addEventListener("input", () => {
  formTitle.textContent = `HOLA ${fullNameInput.value.toUpperCase()}`;
});

function showError(inputId, message) {
  const errorElement = document.getElementById(`${inputId}-error`);
  errorElement.textContent = message;
}

function clearError(inputId) {
  const errorElement = document.getElementById(`${inputId}-error`);
  errorElement.textContent = "";
}

function validateForm() {
  let isValid = true;
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const age = document.getElementById("age").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const postalCode = document.getElementById("postal-code").value;
  const dni = document.getElementById("dni").value;

  clearError("full-name");
  if (fullName.length <= 6 || !fullName.includes(" ")) {
    showError(
      "full-name",
      "El nombre completo debe tener más de 6 letras y al menos un espacio."
    );
    isValid = false;
  }

  clearError("email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showError("email", "Formato de email no válido.");
    isValid = false;
  }

  clearError("password");
  if (password.length < 8 || !/\d/.test(password)) {
    showError(
      "password",
      "La contraseña debe tener al menos 8 caracteres, incluyendo letras y números."
    );
    isValid = false;
  }

  clearError("confirm-password");
  if (confirmPassword !== password) {
    showError("confirm-password", "Las contraseñas no coinciden.");
    isValid = false;
  }

  clearError("age");
  if (age < 18 || !Number.isInteger(Number(age))) {
    showError("age", "La edad debe ser un número entero mayor o igual a 18.");
    isValid = false;
  }

  clearError("phone");
  if (phone.length < 7 || !/^\d+$/.test(phone)) {
    showError(
      "phone",
      "El teléfono debe tener al menos 7 dígitos y no debe contener espacios, guiones ni paréntesis."
    );
    isValid = false;
  }

  clearError("address");
  if (address.length < 5 || !address.includes(" ")) {
    showError(
      "address",
      "La dirección debe tener al menos 5 caracteres y un espacio."
    );
    isValid = false;
  }

  clearError("city");
  if (city.length < 3) {
    showError("city", "La ciudad debe tener al menos 3 caracteres.");
    isValid = false;
  }

  clearError("postal-code");
  if (postalCode.length < 3) {
    showError(
      "postal-code",
      "El código postal debe tener al menos 3 caracteres."
    );
    isValid = false;
  }

  clearError("dni");
  if (!/^\d{7,8}$/.test(dni)) {
    showError("dni", "El DNI debe tener 7 u 8 dígitos.");
    isValid = false;
  }

  if (isValid) {
    alert(
      `Formulario enviado exitosamente:\nNombre Completo: ${fullName}\nEmail: ${email}\nEdad: ${age}\nTeléfono: ${phone}\nDirección: ${address}\nCiudad: ${city}\nCódigo Postal: ${postalCode}\nDNI: ${dni}`
    );
  } else {
    alert("Por favor corrige los errores en el formulario.");
  }
}

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("blur", (event) => {
    const field = event.target.id;
    validateForm();
  });

  input.addEventListener("focus", (event) => {
    const field = event.target.id;
    clearError(field);
  });
});
