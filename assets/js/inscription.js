// add active to label on focus in the input
const inputs = document.querySelectorAll("input, select");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (label) {
      label.classList.add("active");
    }
  });

  input.addEventListener("blur", () => {
    label = document.querySelector(`label[for="${input.id}"]`);
    if (label && input.value === "") {
      label.classList.remove("active");
    }
  });
});

// select form inscription
const schoolCycle = document.getElementById("school_cycle");
const schoolLevel = document.getElementById("school_level");

const levels = {
  null: [{ value: "", text: "Choisis votre cycle scolaire" }],
  Primaire: [
    { value: "1ère Année Primaire", text: "1ère Année Primaire" },
    { value: "2ème Année Primaire", text: "2ème Année Primaire" },
    { value: "3ème Année Primaire", text: "3ème Année Primaire" },
    { value: "4ème Année Primaire", text: "4ème Année Primaire" },
    { value: "5ème Année Primaire", text: "5ème Année Primaire" },
    { value: "6ème Année Primaire", text: "6ème Année Primaire" },
  ],
  Collège: [
    { value: "1ère Année Collège", text: "1ère Année Collège" },
    { value: "2ème Année Collège", text: "2ème Année Collège" },
    { value: "3ème Année Collège", text: "3ème Année Collège" },
  ],
  Lycée: [
    { value: "Tronc Commun", text: "Tronc Commun" },
    { value: "1ère Année Baccalauréat", text: "1ère Année Baccalauréat" },
    { value: "2ème Année Baccalauréat", text: "2ème Année Baccalauréat" },
  ],
  Supérieur: [
    { value: "Bac +1", text: "Bac +1" },
    { value: "Bac +2", text: "Bac +2" },
    { value: "Bac +3", text: "Bac +3" },
    { value: "Bac +4", text: "Bac +4" },
    { value: "Bac +5", text: "Bac +5" },
    { value: "Bac +6", text: "Bac +6" },
    { value: "Bac +7", text: "Bac +7" },
    { value: "Bac +8", text: "Bac +8" },
  ],
};

schoolCycle.addEventListener("change", () => {
  const selectedCycle = schoolCycle.value;
  schoolLevel.innerHTML = "";

  if (levels[selectedCycle]) {
    levels[selectedCycle].forEach((level) => {
      const option = document.createElement("option");
      option.value = level.value;
      option.textContent = level.text;
      schoolLevel.appendChild(option);
    });
  }
});

// send inscription informations
// const inscription_form = document.querySelector(
//   ".inscription_sec .main_inscription .inscription_form form"
// );

// const lastname = document.getElementById("lastname");
// const firstname = document.getElementById("firstname");
// const insc_email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const school_cycle = document.getElementById("school_cycle");
// const school_level = document.getElementById("school_level");
// const select_course = document.getElementById("select_course");

// function sendEmail() {
//   const Insc_Message = `
//     Nom : ${lastname.value} <br>
//     Prénom : ${firstname.value} <br>
//     Email : ${insc_email.value} <br>
//     Téléphone : ${phone.value} <br>
//     Cycle scolaire : ${school_cycle.value} <br>
//     Niveau scolaire : ${school_level.value} <br>
//     Cours : ${select_course.value} <br>
//   `;

//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "yassinechmarekh88@gmail.com",
//     Password: "05EC02FB29BA45BE780038FCF7D8A7B0E8C9",
//     To: "yassinechmarekh88@gmail.com",
//     From: "yassinechmarekh88@gmail.com",
//     Subject: "Apprentis - Formulaire d'inscription",
//     Body: Insc_Message,
//   }).then((message) => {
//     if (message) {
//       Swal.fire({
//         title: "Merci de remplir le formulaire !",
//         text: "Vous receverez une appel pour confirmer votre inscription.",
//         icon: "success",
//         confirmButtonColor: "#f4c552",
//       });
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Une erreur est produite lors de l'envoie du formulaire, réessayez plûtart.",
//         footer: '<a href="index.html#contact">Avez-vous des questions ?</a>',
//         confirmButtonColor: "#f4c552",
//       });
//     }
//   });
// }

// inscription_form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   sendEmail();
// });


// inscription google sheet
document.querySelector('.inscription_sec .main_inscription .inscription_form form').addEventListener('submit', function(event) {
  event.preventDefault();

  const lastname = document.getElementById("lastname").value;
  const firstname = document.getElementById("firstname").value;
  const insc_email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const school_cycle = document.getElementById("school_cycle").value;
  const school_level = document.getElementById("school_level").value;
  const select_course = document.getElementById("select_course").value;

  fetch('https://script.google.com/macros/s/AKfycbzOaPMT-8THBAbG9WYCub6jZtdUlvxjPH9_Qfh9mKE8QNLljqUSZm1onooj0DDiKuZe/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ lastname, firstname, insc_email, phone, school_cycle, school_level, select_course})
  })
  .then(response => response.json())
  .then(data => {
    Swal.fire({
      title: "Merci de remplir le formulaire !",
      text: "Vous receverez une appel pour confirmer votre inscription.",
      icon: "success",
      confirmButtonColor: "#f4c552",
    });
  })
  .catch(error => {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Une erreur est produite lors de l'envoie du formulaire, réessayez plûtart.",
      footer: '<a href="index.html#contact">Avez-vous des questions ?</a>',
      confirmButtonColor: "#f4c552",
    });
  });
});
