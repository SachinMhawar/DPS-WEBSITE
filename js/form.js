   function generateCaptcha() {
      let chars = "0123456789abcdefghijklmnopqrstuvwxyz";
      let code = "";
      for (let i = 0; i < 6; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
      }
      document.getElementById("captchaText").textContent = code;
      document.getElementById("captchaCode").value = code;
      document.getElementById("captchaInput").value = "";
    }

    function validateCaptcha() {
      let input = document.getElementById("captchaInput").value;
      let code = document.getElementById("captchaCode").value;
      if (input === code) {
        alert("Captcha correct!");
        return true;
      } else {
        alert("Captcha incorrect, try again.");
        generateCaptcha();
        return false;
      }
    }

    window.onload = generateCaptcha;