window.onload = function () {
  var name = document.querySelector("#reg-name");
  var surname = document.querySelector("#reg-surname");
  var dni = document.querySelector("#reg-dni");
  var dateBirth = document.querySelector("#reg-date-birth");
  var phone = document.querySelector("#reg-phone");
  var address = document.querySelector("#reg-address");
  var city = document.querySelector("#reg-city");
  var zip = document.querySelector("#reg-zip");
  var email = document.querySelector("#reg-email");
  var pass = document.querySelector("#reg-pass");
  var passRepeat = document.querySelector("#reg-pass-repeat");
  var regButton = document.querySelector("#reg-button");
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var mesageError = "All fields are required";
  var passSuccess = "";
  var successfullDate = "";
  var itemsLocalStorage = {};

  name.addEventListener("blur", validateName);
  surname.addEventListener("blur", validateName);
  dni.addEventListener("blur", validateDni);
  dateBirth.addEventListener("blur", validateDateBirth);
  phone.addEventListener("blur", validatePhone);
  address.addEventListener("blur", validateAddress);
  city.addEventListener("blur", validateCity);
  zip.addEventListener("blur", validateZip);
  email.addEventListener("blur", validateEmail);
  pass.addEventListener("blur", validatePass);
  passRepeat.addEventListener("blur", validatePassRepeat);
  regButton.addEventListener("click", regSubmit);

  name.addEventListener("focus", removeError);
  surname.addEventListener("focus", removeError);
  dni.addEventListener("focus", removeError);
  dateBirth.addEventListener("focus", removeError);
  phone.addEventListener("focus", removeError);
  address.addEventListener("focus", removeError);
  city.addEventListener("focus", removeError);
  zip.addEventListener("focus", removeError);
  email.addEventListener("focus", removeError);
  pass.addEventListener("focus", removeError);
  passRepeat.addEventListener("focus", removeError);

  function showSuccess(id) {
    successField = document.getElementById(id);
    successField.classList.remove("error-field");
    successField.classList.add("success-field");
    var valueID = document.getElementById(id);
  }

  function showError(id, errorId) {
    var currentElement = document.getElementById(id);
    var p = document.createElement("p");
    p.setAttribute("class", "error-text");
    p.innerText = errorId;
    currentElement.parentNode.appendChild(p);
    currentElement.classList.remove("success-field");
    currentElement.classList.add("error-field");
  }

  function removeError(e) {
    var field = document.getElementById(e.target.id);
    field.classList.remove("error-field");
    var errorId = e.target.id;
    var errorIdSel = "#" + errorId + " + p";
    var errorIdElement = document.querySelector(errorIdSel);
    if (errorIdElement) {
      errorIdElement.parentNode.removeChild(errorIdElement);
    }
  }

  function checkLower(x) {
    return (
      (x.charCodeAt() > 96 && x.charCodeAt() < 123) || x.charCodeAt() == 241
    );
  }

  function checkUpper(y) {
    return (
      (y.charCodeAt() > 64 && y.charCodeAt() < 91) || y.charCodeAt() == 209
    );
  }

  function checkNumber(z) {
    return z.charCodeAt() > 47 && z.charCodeAt() < 58;
  }
  function checkSpace(w) {
    return w.charCodeAt() == 32;
  }

  function validateName(e) {
    var nameError = mesageError;
    var nameCurrent = e.target.value.trim();
    if (nameCurrent.length == 0) {
      showError(e.target.id, nameError);
      return;
    }
    if (nameCurrent.length < 4) {
      nameError = "This field needs 3 letters at least";
    } else {
      var countName = 0;
      for (var i = 0; i < nameCurrent.length; i++) {
        var nameChar = nameCurrent.charAt(i);
        if (checkLower(nameChar) || checkUpper(nameChar)) {
          countName++;
        }
      }
      if (countName == nameCurrent.length) {
        showSuccess(e.target.id);
        return;
      } else {
        nameError = "This field only accepts letters";
      }
    }
    showError(e.target.id, nameError);
  }

  function validateDni(e) {
    var dniError = mesageError;
    var dniCurrent = e.target.value.trim();
    if (dniCurrent.length == 0) {
      showError(e.target.id, dniError);
      return;
    }
    if (dniCurrent.length < 7) {
      dniError = "This field needs 7 numbers at least";
    } else {
      var countDni = 0;
      for (var i = 0; i < dniCurrent.length; i++) {
        var dniChar = dniCurrent.charAt(i);
        if (checkNumber(dniChar)) {
          countDni++;
        }
      }
      if (countDni == dniCurrent.length) {
        showSuccess(e.target.id);
        return;
      } else {
        dniError = "This field only accepts numbers";
      }
    }
    showError(e.target.id, dniError);
  }

  function validateDateBirth(e) {
    dateError = mesageError;
    var dateCurrent = e.target.value;
    if (!dateCurrent) {
      showError(e.target.id, dateError);
    } else {
      var year = dateCurrent.substring(0, 4);
      var month = dateCurrent.substring(5, 7);
      var day = dateCurrent.substring(8, 10);
      var reverseDate = month + "/" + day + "/" + year;
      successfullDate = reverseDate;
      showSuccess(e.target.id);
    }
  }

  function validatePhone(e) {
    var phoneError = mesageError;
    var phoneCurrent = e.target.value.trim();
    if (phoneCurrent.length == 0) {
      showError(e.target.id, phoneError);
      return;
    }
    var countPhone = 0;
    for (var i = 0; i < phoneCurrent.length; i++) {
      var phoneChar = phoneCurrent.charAt(i);
      if (checkNumber(phoneChar)) {
        countPhone++;
      }
    }
    if (countPhone != phoneCurrent.length) {
      phoneError = "This field only accepts numbers";
      showError(e.target.id, phoneError);
      return;
    }
    if (countPhone <= 9 || countPhone > 10) {
      phoneError = "This field needs 10 Numbers";
      showError(e.target.id, phoneError);
      return;
    }
    if (countPhone == 10) {
      showSuccess(e.target.id);
      return;
    }
    showError(e.target.id, phoneError);
  }

  function validateAddress(e) {
    var addressError = mesageError;
    var addressCurrent = e.target.value.trim();
    if (addressCurrent.length == 0) {
      showError(e.target.id, addressError);
      return;
    }
    var countAddressChar = 0;
    var countAddressSpace = 0;
    for (var i = 0; i < addressCurrent.length; i++) {
      var addressChar = addressCurrent.charAt(i);
      if (
        checkLower(addressChar) ||
        checkUpper(addressChar) ||
        checkNumber(addressChar)
      ) {
        countAddressChar++;
      }
      if (checkSpace(addressChar)) {
        countAddressSpace++;
      }
    }
    if (addressCurrent.length < 6 || countAddressSpace != 1) {
      addressError = "This field needs at least 5 characters and one space";
      showError(e.target.id, addressError);
      return;
    }
    if (addressCurrent.length != countAddressChar + countAddressSpace) {
      addressError = "This field only accepts letters and numbers";
      showError(e.target.id, addressError);
      return;
    } else {
      showSuccess(e.target.id);
      return;
    }
  }

  function validateCity(e) {
    var cityError = mesageError;
    var cityCurrent = e.target.value.trim();
    if (cityCurrent.length == 0) {
      showError(e.target.id, cityError);
      return;
    }
    var countNumbSpace = 0;
    var countLetters = 0;
    for (var i = 0; i < cityCurrent.length; i++) {
      var cityChar = cityCurrent.charAt(i);
      if (checkUpper(cityChar) || checkLower(cityChar)) {
        countLetters++;
      }
      if (checkNumber(cityChar) || checkSpace(cityChar)) {
        countNumbSpace++;
      }
    }
    if (cityCurrent.length != countLetters + countNumbSpace) {
      cityError = "This field only accepts letters and numbers";
    } else if (countLetters < 3) {
      cityError = "This field needs 3 letters at least";
    } else {
      showSuccess(e.target.id);
      return;
    }
    showError(e.target.id, cityError);
  }

  function validateZip(e) {
    var zipError = mesageError;
    var zipCurrent = e.target.value.trim();
    if (zipCurrent.length == 0) {
      showError(e.target.id, zipError);
      return;
    }
    if (zipCurrent.length < 4 || zipCurrent.length > 5) {
      zipError = "This field needs 4 or 5 numbers";
    } else {
      var countZip = 0;
      for (var i = 0; i < zipCurrent.length; i++) {
        var zipChar = zipCurrent.charAt(i);
        if (checkNumber(zipChar)) {
          countZip++;
        }
      }
      if (countZip == zipCurrent.length) {
        showSuccess(e.target.id);
        return;
      } else {
        zipError = "This field only accepts numbers";
      }
    }
    showError(e.target.id, zipError);
  }

  function validateEmail(e) {
    var emailError = mesageError;
    var emailCurrent = e.target.value.trim();
    if (emailCurrent.length == 0) {
      showError(e.target.id, emailError);
      return;
    }
    if (emailCurrent.match(emailExpression)) {
      showSuccess(e.target.id);
      return;
    } else {
      emailError = "You must povide a valid email";
      showError(e.target.id, emailError);
    }
  }

  function validatePass(e) {
    passError = mesageError;
    var passCurrent = e.target.value;
    if (passCurrent.length == 0) {
      showError(e.target.id, passError);
      passSuccess = "";
      return;
    }
    if (passCurrent.length >= 8 && passCurrent.indexOf(" ") == -1) {
      var intNumb = 0;
      var upper = 0;
      var lower = 0;
      for (var i = 0; i < passCurrent.length; i++) {
        passChar = passCurrent.charAt(i);
        if (checkNumber(passChar)) {
          intNumb++;
        } else if (checkUpper(passChar)) {
          upper++;
        } else if (checkLower(passChar)) {
          lower++;
        }
        if (intNumb + upper + lower == passCurrent.length) {
          showSuccess(e.target.id);
          passSuccess = passCurrent;
          return;
        } else {
          passError = "Password must have only letters and numbers";
        }
      }
      passSucces = "";
      showError(e.target.id, passError);
    } else {
      passError = "Password must have at least 8 characters without spaces";
      passSucces = "";
      showError(e.target.id, passError);
    }
  }

  function validatePassRepeat(e) {
    passRepeatError = mesageError;
    var passRepeatCurrent = e.target.value;
    if (!passRepeatCurrent) {
      showError(e.target.id, passRepeatError);
      return;
    }
    if (passRepeatCurrent === passSuccess) {
      showSuccess(e.target.id);
      return;
    } else {
      passRepeatError = "The password doesn't match";
    }
    showError(e.target.id, passRepeatError);
  }

  function adLocalStorage() {
    localStorage.setItem((key = "name"), (value = name.value));
    localStorage.setItem((key = "surname"), (value = surname.value));
    localStorage.setItem((key = "dni"), (value = dni.value));
    localStorage.setItem((key = "dateBirth"), (value = dateBirth.value));
    localStorage.setItem((key = "phone"), (value = phone.value));
    localStorage.setItem((key = "address"), (value = address.value));
    localStorage.setItem((key = "city"), (value = city.value));
    localStorage.setItem((key = "zip"), (value = zip.value));
    localStorage.setItem((key = "email"), (value = email.value));
    localStorage.setItem((key = "pass"), (value = pass.value));
    localStorage.setItem((key = "passRepeat"), (value = passRepeat.value));
  }
  function getLocalStorage() {
    var localName = localStorage.getItem("name");
    var localSurname = localStorage.getItem("surname");
    var localDni = localStorage.getItem("dni");
    var localDateBirth = localStorage.getItem("dateBirth");
    var localPhone = localStorage.getItem("phone");
    var localAddress = localStorage.getItem("address");
    var localCity = localStorage.getItem("city");
    var localZip = localStorage.getItem("zip");
    var localEmail = localStorage.getItem("email");
    var localPass = localStorage.getItem("pass");
    var localPassRepeat = localStorage.getItem("passRepeat");

    if (
      localName &&
      localSurname &&
      localDni &&
      localDateBirth &&
      localPhone &&
      localAddress &&
      localZip &&
      localCity &&
      localEmail &&
      localPass &&
      localPassRepeat
    ) {
      name.value = localName;
      surname.value = localSurname;
      dni.value = localDni;
      dateBirth.value = localDateBirth;
      phone.value = localPhone;
      address.value = localAddress;
      zip.value = localZip;
      city.value = localCity;
      email.value = localEmail;
      pass.value = localPass;
      passRepeat.value = localPassRepeat;
    }
  }
  getLocalStorage();
  function activateBlur() {
    var eventBlur = new Event("blur");
    name.dispatchEvent(eventBlur);
    surname.dispatchEvent(eventBlur);
    dni.dispatchEvent(eventBlur);
    dateBirth.dispatchEvent(eventBlur);
    phone.dispatchEvent(eventBlur);
    address.dispatchEvent(eventBlur);
    zip.dispatchEvent(eventBlur);
    city.dispatchEvent(eventBlur);
    email.dispatchEvent(eventBlur);
    pass.dispatchEvent(eventBlur);
    passRepeat.dispatchEvent(eventBlur);
  }
  function regSubmit(e) {
    e.preventDefault();
    activateBlur();
    params = `?name=${name.value}&lastName=${surname.value}&dni=${dni.value}&dob=${successfullDate}&phone=${phone.value}&address=${address.value}&city=${city.value}&zip=${zip.value}&email=${email.value}&password=${pass.value}`;
    urlSuccess = `${url}${params}`;
    var successSubmit = document.querySelectorAll(".success-field");
    var errorSubmit = document.querySelectorAll(".error-field");
    if (errorSubmit.length == 0 && successSubmit.length < 11) {
      alert("All fields are required");
      return;
    }
    if (successSubmit.length == 11) {
      successFetch();
      adLocalStorage();
    } else {
      var mesageSubmitError = "";
      for (var i = 0; i < errorSubmit.length; i++) {
        var errorSubmitElement = errorSubmit[i];
        var errorSubmitId = errorSubmitElement.parentNode.id;
        var elementSelectorLabel = "#" + errorSubmitId + " label";
        var elementSelectorText = "#" + errorSubmitId + " p";
        var errorSubmitLabel =
          document.querySelector(elementSelectorLabel).textContent;
        var errorSubmitText =
          document.querySelector(elementSelectorText).textContent;
        var mesageSubmitElement =
          errorSubmitLabel + ": " + errorSubmitText + "\n";
        mesageSubmitError += mesageSubmitElement;
      }
      alert(mesageSubmitError);
    }
  }
  var params = "";
  var url = "https://api-rest-server.vercel.app/signup";
  var urlSuccess = "";
  function successFetch() {
    fetch(urlSuccess)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          alert(`You are succefully registered!!\n${data.msg}`);
        } else {
          var msgErrorAlert = "";
          for (var i = 0; i < data.errors.length; i++) {
            var errorItem = data.errors[i].msg;
            msgErrorAlert += `${errorItem}\n`;
          }
          throw new Error(msgErrorAlert);
        }
      })
      .catch(function (error) {
        alert(error);
      });
  }
};
