window.onload = function () {
  var loginEmail = document.querySelector("#email-login");
  var loginPass = document.querySelector("#pass-login");
  var loginButton = document.querySelector("#login-button");
  var fieldsetEmailMesage = document.querySelector("#email-fieldset");
  var fieldsetPassMesage = document.querySelector("#pass-fieldset");
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var emailStatus = false;
  var passStatus = false;
  var emailError = "One of the fields have an error";
  var passError = "One of the fields have an error";
  var emailValue = "";

  loginEmail.addEventListener("blur", checkEmail);
  loginEmail.addEventListener("focus", removeEmailError);
  loginPass.addEventListener("blur", checkPass);
  loginPass.addEventListener("focus", removePassError);
  loginButton.addEventListener("click", loginSubmit);

  function checkEmail(e) {
    var mailCurrent = e.target.value;
    if (mailCurrent.match(emailExpression)) {
      emailStatus = true;
      emailValue = mailCurrent;
      loginEmail.classList.remove("error-border");
      loginEmail.classList.add("success-border");
      return emailValue;
    } else {
      emailStatus = false;
      loginEmail.classList.remove("success-border");
      loginEmail.classList.add("error-border");
      showErrorMail();
    }
  }

  function checkPass(e) {
    passError = "";
    var passCurrent = e.target.value;
    if (passCurrent.length >= 8 && passCurrent.indexOf(" ") == -1) {
      var intNumb = 0;
      var upper = 0;
      var lower = 0;
      for (var i = 0; i < passCurrent.length; i++) {
        char = passCurrent.charAt(i);
        if (char.charCodeAt() > 47 && char.charCodeAt() < 58) {
          intNumb++;
        } else if (
          (char.charCodeAt() > 64 && char.charCodeAt() < 91) ||
          char.charCodeAt() == 209
        ) {
          upper++;
        } else if (
          (char.charCodeAt() > 96 && char.charCodeAt() < 123) ||
          char.charCodeAt() == 241
        ) {
          lower++;
        }
        if (intNumb + upper + lower == passCurrent.length) {
          passStatus = true;
          passError = false;
          loginPass.classList.remove("error-border");
          loginPass.classList.add("success-border");
        } else {
          passError = "One of the fields have an error";
          passStatus = false;
        }
      }
      showErrorPass();
    } else {
      passError = "One of the fields have an error";
      passStatus = false;
      showErrorPass();
    }
  }

  function loginSubmit(e) {
    e.preventDefault();
    if (emailStatus && passStatus) {
      mostrarRespuestaLogin(loginEmail.value, loginPass.value);
    }
  }

  function removeEmailError() {
    var pErrorMail = document.querySelector("#email-error-p");
    if (pErrorMail) {
      loginPass.classList.remove("error-border");
      pErrorMail.parentNode.removeChild(pErrorMail);
    }
  }

  function removePassError() {
    var pErrorPass = document.querySelector("#pass-error-p");
    if (pErrorPass) {
      loginEmail.classList.remove("error-border");
      pErrorPass.parentNode.removeChild(pErrorPass);
    }
  }

  function showErrorMail() {
    var p = document.createElement("h3");
    p.setAttribute("id", "email-error-p");
    p.innerText = emailError;
    fieldsetEmailMesage.appendChild(p);
  }

  function showErrorPass() {
    if (passError) {
      var p = document.createElement("h3");
      p.setAttribute("id", "pass-error-p");
      p.innerText = passError;
      fieldsetPassMesage.appendChild(p);
      loginPass.classList.remove("success-border");
      loginPass.classList.add("error-border");
    }
  }

  function mostrarRepuesta(fr) {
    if (fr.msg) {
      alert(`ERROR!!\n${fr.msg}`);
    } else {
      var msgErrorAlert = "ERROR!!\n";
      for (var i = 0; i < fr.errors.length; i++) {
        var errorItem = fr.errors[i].msg;
        msgErrorAlert += `${errorItem}\n`;
      }
      alert(msgErrorAlert);
    }
  }
  function mostrarRespuestaLogin(email, pass) {
    var url = `https://api-rest-server.vercel.app/login?email=${email}&password=${pass}`;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          alert(`Login Succesfull!!\n${data.msg}`);
        } else {
          mostrarRepuesta(data);
        }
      })
      .catch(function (error) {
        alert(error);
      });
  }
};
