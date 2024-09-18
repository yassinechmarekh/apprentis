// contact form
const form = document.querySelector(
  ".contact_sec .contact_form .content_contact form"
);
const alert = document.querySelector(
  ".contact_sec .contact_form .content_contact .alert-success"
);

const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const BodyMessage = `
      Nom : ${name.value} <br>
      Email : ${email.value} <br>
      Sujet : ${subject.value} <br>
      Message : ${message.value} <br>
    `;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "yassinechmarekh88@gmail.com",
    Password: "05EC02FB29BA45BE780038FCF7D8A7B0E8C9",
    To: "yassinechmarekh88@gmail.com",
    From: "yassinechmarekh88@gmail.com",
    Subject: subject.value,
    Body: BodyMessage,
  }).then(() => {
    form.classList.add("send");
    alert.classList.add("active");
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
