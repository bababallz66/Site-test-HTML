// Initialise EmailJS avec ta clé publique
(function () {
  emailjs.init("L18fjfrkD2fXVGldi");
})();

function sendMail() {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_wy1e04h", "template_0tapa78", this).then(
        function () {
          document.getElementById("response-message").innerText =
            "Email envoyé avec succès !";
          document.getElementById("contact-form").reset();
        },
        function (error) {
          document.getElementById("response-message").innerText =
            "Erreur : " + JSON.stringify(error);
        }
      );
    });
}
