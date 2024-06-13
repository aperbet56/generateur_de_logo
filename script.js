// Récupération des différents éléments
const companyName = document.querySelector("#company__name").value;
const tagline = document.querySelector("#tagline").value;
const colors = document.querySelector("#colors").value;
const form = document.querySelector("#form");
const logoPreview = document.querySelector("#logo__preview");

/**
 * Déclaration de la fonction generateLogo ayant comme paramètres companyName, tagline et colors
 * Cette fonction va permettre de générer un logo
 **/
const generateLogo = (companyName, tagline, colors) => {
  // Création de l'élément HTML canvas
  const canvas = document.createElement("canvas");
  canvas.width = 300;
  canvas.height = 500;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = colors;
  ctx.font = "bold 50px Arial";
  ctx.textAlign = "center";
  ctx.fillText(companyName, canvas.width / 2, canvas.height / 2);

  ctx.font = "italic 30px Arial";
  ctx.fillText(tagline, canvas.width / 2, canvas.height / 2 + 60);

  logoPreview.textContent = "";
  // Insertion de l'élément canvas dans le DOM
  logoPreview.appendChild(canvas);
};

// Ecoute de l'événement "submit" sur le formulaire
form.addEventListener("submit", (e) => {
  // Suppression du comportement par défaut du formulaire
  e.preventDefault();
  // Appel de la fonction generateLogo ayant comme paramètre companyName, tagline et colors
  generateLogo(companyName, tagline, colors);
});
