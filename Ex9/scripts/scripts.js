document.addEventListener("DOMContentLoaded", () => {
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

  function openModal(message) {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    modalMessage.textContent = message;
    modal.style.display = "block";
  }

  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  document.querySelector(".close-button").addEventListener("click", closeModal);
  window.addEventListener("click", (event) => {
    if (event.target == document.getElementById("modal")) {
      closeModal();
    }
  });

  async function sendFormData(data) {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok) {
        localStorage.setItem("formData", JSON.stringify(responseData));
        openModal(`Suscripción exitosa:\n${JSON.stringify(responseData, null, 2)}`);
        clearForm(); 
      } else {
        openModal(`Error en la suscripción: ${responseData.message}`);
      }
    } catch (error) {
      openModal(`Error en la suscripción: ${error.message}`);
    }
  }

  function clearForm() {
    document.getElementById("subscription-form").reset();
    formTitle.textContent = "Registro diario"; 
  }

  function validateForm() {
    let isValid = true;
    const errorMessages = [];
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
      showError("full-name", "El nombre completo debe tener más de 6 letras y al menos un espacio.");
      errorMessages.push("El nombre completo debe tener más de 6 letras y al menos un espacio.");
      isValid = false;
    }

    clearError("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showError("email", "Formato de email no válido.");
      errorMessages.push("Formato de email no válido.");
      isValid = false;
    }

    clearError("password");
    if (password.length < 8 || !/\d/.test(password)) {
      showError("password", "La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.");
      errorMessages.push("La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.");
      isValid = false;
    }

    clearError("confirm-password");
    if (confirmPassword !== password) {
      showError("confirm-password", "Las contraseñas no coinciden.");
      errorMessages.push("Las contraseñas no coinciden.");
      isValid = false;
    }

    clearError("age");
    if (age < 18 || !Number.isInteger(Number(age))) {
      showError("age", "La edad debe ser un número entero mayor o igual a 18.");
      errorMessages.push("La edad debe ser un número entero mayor o igual a 18.");
      isValid = false;
    }

    clearError("phone");
    if (phone.length < 7 || !/^\d+$/.test(phone)) {
      showError("phone", "El teléfono debe tener al menos 7 dígitos y no debe contener espacios, guiones ni paréntesis.");
      errorMessages.push("El teléfono debe tener al menos 7 dígitos y no debe contener espacios, guiones ni paréntesis.");
      isValid = false;
    }

    clearError("address");
    if (address.length < 5 || !address.includes(" ")) {
      showError("address", "La dirección debe tener al menos 5 caracteres y un espacio.");
      errorMessages.push("La dirección debe tener al menos 5 caracteres y un espacio.");
      isValid = false;
    }

    clearError("city");
    if (city.length < 3) {
      showError("city", "La ciudad debe tener al menos 3 caracteres.");
      errorMessages.push("La ciudad debe tener al menos 3 caracteres.");
      isValid = false;
    }

    clearError("postal-code");
    if (postalCode.length < 3) {
      showError("postal-code", "El código postal debe tener al menos 3 caracteres.");
      errorMessages.push("El código postal debe tener al menos 3 caracteres.");
      isValid = false;
    }

    clearError("dni");
    if (!/^\d{7,8}$/.test(dni)) {
      showError("dni", "El DNI debe tener 7 u 8 dígitos.");
      errorMessages.push("El DNI debe tener 7 u 8 dígitos.");
      isValid = false;
    }

    if (isValid) {
      const formData = {
        fullName,
        email,
        password,
        age,
        phone,
        address,
        city,
        postalCode,
        dni,
      };
      sendFormData(formData);
    } else {
      openModal(`Por favor corrige los siguientes errores:\n${errorMessages.join('\n')}`);
    }
  }

  document.getElementById("subscription-form").addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();
  });

  const savedData = localStorage.getItem("formData");
  if (savedData) {
    const formData = JSON.parse(savedData);
    document.getElementById("full-name").value = formData.fullName;
    document.getElementById("email").value = formData.email;
    document.getElementById("password").value = formData.password;
    document.getElementById("confirm-password").value = formData.password;
    document.getElementById("age").value = formData.age;
    document.getElementById("phone").value = formData.phone;
    document.getElementById("address").value = formData.address;
    document.getElementById("city").value = formData.city;
    document.getElementById("postal-code").value = formData.postalCode;
    document.getElementById("dni").value = formData.dni;
    formTitle.textContent = `HOLA ${formData.fullName.toUpperCase()}`;
  }
});
