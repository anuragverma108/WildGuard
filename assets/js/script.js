'use strict';

// Login
const popup = document.getElementById('popup');

// Get the icon element to open the popup
const openPopup = document.getElementById('openPopup');

// Get the close button element
const closePopup = document.getElementById('closePopup');

// Function to open the popup
openPopup.addEventListener('click', () => {
    popup.style.display = 'flex'; // Show the popup
});

// Function to close the popup
closePopup.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the popup
});

// Close the popup when clicking outside the popup content
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none'; // Hide the popup
    }
});

// Optional: Switch between login and signup forms
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Event listener for login tab
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});

// Event listener for signup tab
signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}

function toggleAnswer(element) {
  const answer = element.nextElementSibling;

  // Toggle the answer display
  if (answer.style.display === "block") {
      answer.style.display = "none";
  } else {
      answer.style.display = "block";
  }
}


/**
 * language translation
 */

const translations = {
  en: {
      welcome: "Welcome to WildGuard",  
      home: "Home",
      about: "About",
      service: "Service",
      donate: "Donate",
      event: "Event",
      contact: "Contact",
      login: "Login/Register",
      donButton: "Donation",
      love: "Give Love for Saving",
      animal: "World Animals",
      defending: "Defending Wildlife, One Paw at a Time",
      shelter: "Safe Shelter",
      water: "Safe Water",
      ecology: "Ecology Save",
      environment: "Environment",
      why: "Why Choose Us ?",
      riseHandToSave: "Rise Your Hand to Save ",
      animalLife: "World Animals Life",
      mission: "Our Mission",
      vision: "Our Vision",
      nextPlan: "Next Plan",
      riseHandText: "But I must explain to you how all this mistaken denouncing pleasure and praising pain was born and I will give you a complete account of the system expoundmaster",
      foodCharity: "Charity For Foods",
      educationCharity: "Charity For Education",
      waterCharity: "Charity For Water",
      medicalCharity: "Charity For Medical",
      learn: "Learn More About Us",
      trust: "324+ Trusted Global Partners",
      become: "Become a Partner",
      what: "What We Do",
      work: "We Work Differently to Keep",
      world: "The World Safe",
      nature: "Save Nature",
      ecology2: " Save Ecology",
      read: "Read More",
      tree: "Tree Plantation",
      ocean: "Clear Ocean",
      raised: "Raised",
      goal: "Goal",
      raise: "Raise",
      toGo: "To Go",
      raiseHand: "Raise Hand To Save Animals",
      testimonial: "Our Testimonials",
      people: "What People Say About",
      organization: "Our Organization",
      manager: "Business Manager",
      program: "Event & Program",
      cause: "Our Most Popular Causes For ",
      fund: "Building Fund",
      oceanWater: "Ocean Water",
      view: "View Event",
      terms: "Terms of use",
      privacy: "Privacy & Policy",
      rights: "All Rights Reserved",
      aboutUs: "About Us",
      footer: "WildGuard is dedicated to preserving wildlife and protecting endangered species worldwide. Join us in our mission to create a sustainable future for the planet's most vulnerable creatures.",
      quick: "Quick Links",
      subs: "Subscribe",
      connected: "Stay Connected"
  },
  es: {
      welcome: "Bienvenido a WildGuard",
      home: "Hogar",
      about: "Acerca de",
      service: "Servicio",
      donate: "Donar",
      event: "Evento",
      contact: "Contacto",
      login: "Iniciar Sesión/Registrarse",
      donButton: "Donación",
      love:"Dale Amor para Salvar",
      animal: "Animales del Mundo",
      defending: "Defendiendo la vida silvestre, una pata a la vez",
      shelter: "Refugio seguro",
      water: "Agua Segura",
      ecology: "Ecología Salvar",
      environment: "Medio Ambiente",
      why: "¿Por qué elegirnos?",
      riseHandToSave: "Levanta la mano para salvar ",
      animalLife: "Animales del Mundo",
      mission: "Nuestra Misión",
      vision: "Nuestra Visión",
      nextPlan: "Próximo Plan",
      riseHandText: "Pero debo explicarte cómo todo este error de denunciar el placer y alabar el dolor nació, y te daré un relato completo del sistema del maestro expositor.",
      foodCharity: "Caridad para alimentos",
      educationCharity: "Caridad para la educación",
      waterCharity: "Caridad para el agua",
      medicalCharity: "Caridad para la medicina",
      learn: "Aprende más sobre nosotros",
      trust: "324+ Socios Globales de Confianza",
      become: "Conviértete en Socio",
      what: "Lo Que Hacemos",
      work: "Trabajamos de manera diferente para mantener",
      world: "El Mundo Seguro",
      nature: "Salvar la Naturaleza",
      ecology2: "Salvar la Ecología",
      read: "Leer más",
      tree: "Plantación de árboles",
      ocean: "Océano Claro",
      raised: "Recaudado",
      goal: "Objetivo",
      raise: "Levantar",
      toGo: "Para ir",
      raiseHand: "Levanta la Mano para Salvar a los Animales",
      testimonial: "Nuestros Testimonios",
      people: "Lo que la gente dice sobre ",
      organization: "Nuestra Organización",
      manager: "Gerente de Negocios",
      program: "Evento y Programa",
      cause: "Nuestras Causas Más Populares Para ",
      fund: "Construir Fondos",
      oceanWater: "Agua del Océano",
      view: "Ver Evento",
      terms: "Términos de uso",
      privacy: "Privacidad y Política",
      rights: "Todos los derechos reservados",
      aboutUs: "Sobre Nosotros",
      footer: "WildGuard se dedica a preservar la vida silvestre y proteger las especies en peligro de extinción en todo el mundo. Únete a nosotros en nuestra misión de crear un futuro sostenible para las criaturas más vulnerables del planeta.",
      quick: "Enlaces Rápidos",
      subs: "Suscribir",
      connected: "Mantente Conectado"
    },
  fr: {
      welcome: "Bienvenue sur WildGuard",
      home: "Home",
      about: "À propos",
      service: "Service",
      donate: "Donner",
      event: "Événement",
      contact: "Contact",
      login: "Connexion/Inscription",
      donButton: "Donation",
      love:"Donnez de l'amour pour sauver les",
      animal: "Animaux du monde",
      defending: "Défendre la faune, une patte à la fois",
      shelter: "Refuge Sûr",
      water: "Eau Salubre",
      ecology: "Écologie Sauver",
      environment: "Environnement",
      why: "Pourquoi nous choisir ?",
      riseHandToSave: "Levez la main pour sauver ",
      animalLife: "Animaux du Monde",
      mission: "Notre Mission",
      vision: "Notre Mision",
      nextPlan: "Prochain Plan",
      riseHandText: "Mais je dois vous expliquer comment toute cette erreur de dénoncer le plaisir et de louer la douleur est née, et je vous donnerai un compte rendu complet du système du maître exposant.",
      foodCharity: "Charité pour les aliments",
      educationCharity: "Charité pour l'éducation",
      waterCharity: "Charité pour l'eau",
      medicalCharity: "Charité pour la médecine",
      learn: "Apprenez-en plus sur nous",
      trust: "324+ Partenaires mondiaux de confiance",
      become: "Devenir Partenaire",
      what: "Ce Que Nous Faisons",
      work: "Nous travaillons différemment pour garder",
      world: "Le Monde en Sécurité",
      nature: "Sauver la Nature",
      ecology2: "Sauver l'Écologie",
      read: "Lire la suite",
      tree: "Plantation d'arbres",
      ocean: "Océan Clair",
      raised: "Collecté",
      goal: "Objectif",
      raise: "Élever",
      toGo: "À Aller",
      raiseHand: "Levez la Main pour Sauver les Animaux",
      testimonial: "Nos Témoignages",
      people: "Ce que les gens disent de ",
      organization: "Notre Organisation",
      manager: "Directeur Commercial",
      program: "Événement & Programme",
      cause: "Nos Causes les Plus Populaires Pour ",
      fund: "Construire des Fonds",
      oceanWater: "Eau de l'Océan",
      view: "Voir l'événement",
      terms: "Conditions d'utilisation",
      privacy: "Politique de confidentialité",
      rights: "Tous droits réservés",
      aboutUs: "À propos de nous",
      footer: "WildGuard est dédié à la préservation de la faune et à la protection des espèces en voie de disparition dans le monde entier. Rejoignez-nous dans notre mission de créer un avenir durable pour les créatures les plus vulnérables de la planète.",
      quick: "Liens Rapides",
      subs: "S'abonner",
      connected: "Restez Connecté"
  }
};

const titleElement = document.getElementById("welcomeNote") || {};
const homeElement = document.getElementById("homeNav") || {};
const aboutElement = document.getElementById("aboutNav") || {};
const serviceElement = document.getElementById("serviceNav") || {};
const donateElement = document.getElementById("donateNav") || {};
const homeElement2 = document.getElementById("homeFoot") || {};
const aboutElement2 = document.getElementById("aboutv") || {};
const serviceElement2 = document.getElementById("serviceFoot") || {};
const donateElement2 = document.getElementById("donateFoot") || {};
const eventElement = document.getElementById("eventNav") || {};
const contactElement = document.getElementById("contactNav") || {};
const contactElement2 = document.getElementById("contactFoot") || {};
const donateButtonElement = document.getElementById("donateButton") || {};
const donateButton2Element = document.getElementById("donateButton2") || {};
const giveLoveElement = document.getElementById("giveLove") || {};
const worldAnimalElement = document.getElementById("worldAnimal") || {};
const defendingWildlifeElement = document.getElementById("defendingWildlife") || {};
const safeShelterElement = document.getElementById("safeShelter") || {};
const safeWaterElement = document.getElementById("safeWater") || {};
const saveEcologyElement = document.getElementById("saveEcology") || {};
const saveEnvironmentElement = document.getElementById("saveEnvironment") || {};
const whyUsElement = document.getElementById("whyUs") || {};
const riseHandToSaveElement = document.getElementById("riseHandToSave") || {};
const animalLifeElement = document.getElementById("animalLife") || {};
const ourMissionElement = document.getElementById("ourMission") || {};
const ourVisionElement = document.getElementById("ourVision") || {};
const nextPlanElement = document.getElementById("nextPlan") || {};
const riseHandTextElement = document.getElementById("riseHandText") || {};
const foodCharityElement = document.getElementById("foodCharity") || {};
const educationCharityElement = document.getElementById("educationCharity") || {};
const waterCharityElement = document.getElementById("waterCharity") || {};
const medicalCharityElement = document.getElementById("medicalCharity") || {};
const learnMoreElement = document.getElementById("learnMore") || {};
const learnMoreElement2 = document.getElementById("learnMore-2") || {};
const trustedPartnersElement = document.getElementById("trustedPartners") || {};
const becomePartnerElement = document.getElementById("becomePartner") || {};
const whatWeDoElement = document.getElementById("whatWeDo") || {};
const weWorkElement = document.getElementById("weWork") || {};
const keepTheWorldElement = document.getElementById("keepTheWorld") || {};
const saveNatureElement = document.getElementById("saveNature") || {};
const saveEcologyElement2 = document.getElementById("saveEcology2") || {};
const readElement1 = document.getElementById("read-1") || {};
const readElement2 = document.getElementById("read-2") || {};
const readElement3 = document.getElementById("read-3") || {};
const readElement4 = document.getElementById("read-4") || {};
const treePlantationElement = document.getElementById("treePlantation") || {};
const clearOceanElement = document.getElementById("clearOcean") || {};
const raisedElement1 = document.getElementById("raised-1") || {};
const raisedElement2 = document.getElementById("raised-2") || {};
const raisedElement3 = document.getElementById("raised-3") || {};
const raisedElement4 = document.getElementById("raised-4") || {};
const goalElement1 = document.getElementById("goal-1") || {};
const goalElement2 = document.getElementById("goal-2") || {};
const goalElement3 = document.getElementById("goal-3") || {};
const goalElement4 = document.getElementById("goal-4") || {};
const raiseElement1 = document.getElementById("raise-1") || {};
const raiseElement2 = document.getElementById("raise-2") || {};
const raiseElement3 = document.getElementById("raise-3") || {};
const raiseElement4 = document.getElementById("raise-4") || {};
const toGoElement1 = document.getElementById("toGo-1") || {};
const toGoElement2 = document.getElementById("toGo-2") || {};
const toGoElement3 = document.getElementById("toGo-3") || {};
const toGoElement4 = document.getElementById("toGo-4") || {};
const donateButton3Element = document.getElementById("donateButton3") || {};
const donateButton4Element = document.getElementById("donateButton4") || {};
const donateButton5Element = document.getElementById("donateButton5") || {};
const donateButton6Element = document.getElementById("donateButton6") || {};
const raiseHandToSaveAnimalsElement1 = document.getElementById("raiseHandToSaveAnimals-1") || {};
const raiseHandToSaveAnimalsElement2 = document.getElementById("raiseHandToSaveAnimals-2") || {};
const raiseHandToSaveAnimalsElement3 = document.getElementById("raiseHandToSaveAnimals-3") || {};
const raiseHandToSaveAnimalsElement4 = document.getElementById("raiseHandToSaveAnimals-4") || {};
const ourTestimonialsElement = document.getElementById("ourTestimonials") || {};
const whatPeopleSayElement = document.getElementById("whatPeopleSay") || {};
const ourOrganizationElement = document.getElementById("ourOrganization") || {};
const businessManagerElement = document.getElementById("businessManager") || {};
const eventProgramElement = document.getElementById("eventProgram") || {};
const popularCausesElement = document.getElementById("popularCauses") || {};
const buildingFundElement = document.getElementById("buildingFund") || {};
const oceanWaterElement1 = document.getElementById("oceanWater-1") || {};
const oceanWaterElement2 = document.getElementById("oceanWater-2") || {};
const oceanWaterElement3 = document.getElementById("oceanWater-3") || {};
const viewEventsElement1 = document.getElementById("viewEvents-1") || {};
const viewEventsElement2 = document.getElementById("viewEvents-2") || {};
const viewEventsElement3 = document.getElementById("viewEvents-3") || {};
const termsElement = document.getElementById("terms") || {};
const privacyPolicyElement = document.getElementById("privacyPolicy") || {};
const termsElement2 = document.getElementById("terms-2") || {};
const privacyPolicyElement2 = document.getElementById("privacyPolicy-2") || {};
const allRightsElement = document.getElementById("allRights") || {};
const aboutUsElement = document.getElementById("aboutUs") || {};
const footerDescriptionElement = document.getElementById("footerDescription") || {};
const quickLinkselement = document.getElementById("quickLinks") || {};
const subscribelement = document.getElementById("subscribe") || {};
const stayConnectedElement = document.getElementById("stayConnected") || {};

document.getElementById("languageSelect").addEventListener("change", function() {
  const selectedLanguage = this.value;
  updateContent(selectedLanguage);
});

  function updateContent(language) {
  titleElement.textContent = translations[language].welcome;
  homeElement.textContent = translations[language].home;
  aboutElement.textContent = translations[language].about;
  serviceElement.textContent = translations[language].service;
  donateElement.textContent = translations[language].donate;
  eventElement.textContent = translations[language].event;
  contactElement.textContent = translations[language].contact;
  donateButtonElement.textContent = translations[language].donButton;
  donateButton2Element.textContent = translations[language].donButton;
  giveLoveElement.textContent = translations[language].love;
  worldAnimalElement.textContent = translations[language].animal;
  defendingWildlifeElement.textContent = translations[language].defending;
  safeShelterElement.textContent = translations[language].shelter;
  safeWaterElement.textContent = translations[language].water;
  saveEcologyElement.textContent = translations[language].ecology;
  saveEnvironmentElement.textContent = translations[language].environment;
  whyUsElement.textContent = translations[language].why;
  riseHandToSaveElement.textContent = translations[language].riseHandToSave;
  animalLifeElement.textContent = translations[language].animalLife;
  ourMissionElement.textContent = translations[language].mission;
  ourVisionElement.textContent = translations[language].vision;
  nextPlanElement.textContent = translations[language].nextPlan;
  riseHandTextElement.textContent = translations[language].riseHandText;
  foodCharityElement.textContent = translations[language].foodCharity;
  educationCharityElement.textContent = translations[language].educationCharity;
  waterCharityElement.textContent = translations[language].waterCharity;
  medicalCharityElement.textContent = translations[language].medicalCharity;
  learnMoreElement.textContent = translations[language].learn;
  learnMoreElement2.textContent = translations[language].learn;
  trustedPartnersElement.textContent = translations[language].trust;
  becomePartnerElement.textContent = translations[language].become;
  whatWeDoElement.textContent = translations[language].what;
  weWorkElement.textContent = translations[language].work;
  keepTheWorldElement.textContent = translations[language].world;
  saveNatureElement.textContent = translations[language].nature;
  saveEcologyElement2.textContent = translations[language].ecology2;
  treePlantationElement.textContent = translations[language].tree;
  clearOceanElement.textContent = translations[language].ocean;
  readElement1.textContent = translations[language].read;
  readElement2.textContent = translations[language].read;
  readElement3.textContent = translations[language].read;
  readElement4.textContent = translations[language].read;
  raisedElement1.textContent = translations[language].raised;
  raisedElement2.textContent = translations[language].raised;
  raisedElement3.textContent = translations[language].raised;
  raisedElement4.textContent = translations[language].raised;
  goalElement1.textContent = translations[language].goal;
  goalElement2.textContent = translations[language].goal;
  goalElement3.textContent = translations[language].goal;
  goalElement4.textContent = translations[language].goal;
  raiseElement1.textContent = translations[language].raise;
  raiseElement2.textContent = translations[language].raise;
  raiseElement3.textContent = translations[language].raise;
  raiseElement4.textContent = translations[language].raise;
  toGoElement1.textContent = translations[language].toGo;
  toGoElement2.textContent = translations[language].toGo;
  toGoElement3.textContent = translations[language].toGo;
  toGoElement4.textContent = translations[language].toGo;
  donateButton3Element.textContent = translations[language].donButton;
  donateButton4Element.textContent = translations[language].donButton;
  donateButton5Element.textContent = translations[language].donButton;
  donateButton6Element.textContent = translations[language].donButton;
  raiseHandToSaveAnimalsElement1.textContent = translations[language].raiseHand;
  raiseHandToSaveAnimalsElement2.textContent = translations[language].raiseHand;
  raiseHandToSaveAnimalsElement3.textContent = translations[language].raiseHand;
  raiseHandToSaveAnimalsElement4.textContent = translations[language].raiseHand;
  ourTestimonialsElement.textContent = translations[language].testimonial;
  whatPeopleSayElement.textContent = translations[language].people;
  ourOrganizationElement.textContent = translations[language].organization;
  businessManagerElement.textContent = translations[language].manager;
  eventProgramElement.textContent = translations[language].program;
  popularCausesElement.textContent = translations[language].cause;
  buildingFundElement.textContent = translations[language].fund;
  oceanWaterElement1.textContent = translations[language].oceanWater;
  oceanWaterElement2.textContent = translations[language].oceanWater;
  oceanWaterElement3.textContent = translations[language].oceanWater;
  viewEventsElement1.textContent = translations[language].view;
  viewEventsElement2.textContent = translations[language].view;
  viewEventsElement3.textContent = translations[language].view;
  termsElement.textContent = translations[language].terms;
  privacyPolicyElement.textContent = translations[language].privacy;
  termsElement2.textContent = translations[language].terms;
  privacyPolicyElement2.textContent = translations[language].privacy;
  allRightsElement.textContent = translations[language].rights;
  aboutUsElement.textContent = translations[language].aboutUs;
  footerDescriptionElement.textContent = translations[language].footer;
  quickLinkselement.textContent = translations[language].quick;
  subscribelement.textContent = translations[language].subs;
  stayConnectedElement.textContent = translations[language].connected;

}

window.onload = function() {
  updateContent('en'); // Default to English
};



/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});




/**
 * adding functionality to about section
 */

const sectionText1 = document.getElementById("section-text-1");
const sectionText2 = document.getElementById("section-text-2");
const sectionText3 = document.getElementById("section-text-3");
const ourMission = document.getElementById("ourMission");
const ourVision = document.getElementById("ourVision");
const nextPlan = document.getElementById("nextPlan");

sectionText1.style.display = "block";
sectionText2.style.display = "none";
sectionText3.style.display = "none";

function our_mission(){
  ourMission.classList.add("active");
  ourVision.classList.remove("active");
  nextPlan.classList.remove("active");

  sectionText1.style.display = "block";
  sectionText2.style.display = "none";
  sectionText3.style.display = "none";
}

function our_vision(){
  ourVision.classList.add("active");
  ourMission.classList.remove("active");
  nextPlan.classList.remove("active");

  sectionText1.style.display = "none";
  sectionText2.style.display = "block";
  sectionText3.style.display = "none";
}

function next_plan(){
  nextPlan.classList.add("active");
  ourMission.classList.remove("active");
  ourVision.classList.remove("active");

  sectionText1.style.display = "none";
  sectionText2.style.display = "none";
  sectionText3.style.display = "block";
}


// Scroll To Top Button
// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// Show button on scroll
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Scroll to top
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/**
*search-bar with functionality
 */
const searchIcon = document.getElementById("searchIcon");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const searchableElements = document.querySelectorAll("h2, p,div"); // Search within headings and paragraphs

// Elements for navigating between matches
const nextMatchBtn = document.getElementById("nextMatch");
const prevMatchBtn = document.getElementById("prevMatch");
const clearSearchBtn = document.getElementById("clearSearch");
const matchCounter = document.getElementById("matchCounter");

let matchedElements = []; // To store matched elements
let currentMatchIndex = 0; // To keep track of the current match

// Toggle search input visibility when clicking the search icon
searchIcon.addEventListener("click", function () {
  searchBar.style.display = searchBar.style.display === "block" ? "none" : "flex";
  searchInput.focus();
});

// Close search bar when ESC key is pressed
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeSearchBar();
  }
});

// Close search bar when clicked outside
document.addEventListener("click", function(event) {
  if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
    closeSearchBar();
  }
});

// Close search bar function
function closeSearchBar() {
  searchBar.style.display = "none";
  hideNavigationButtons(); // Hide buttons and counter when search is closed
}

// Scroll to and highlight the matching element
searchInput.addEventListener("input", function (event) {
  const query = event.target.value.toLowerCase();
  matchedElements = []; // Reset the matches array
  currentMatchIndex = 0; // Reset current match index

  // Reset previously highlighted elements
  searchableElements.forEach(element => {
    element.classList.remove("highlight");
  });

  if (query) {
    // Find all matches
    searchableElements.forEach(element => {
      const text = element.textContent.toLowerCase();
      if (text.includes(query)) {
        matchedElements.push(element); // Add match to array
      }
    });

    if (matchedElements.length > 0) {
      highlightMatch(currentMatchIndex); // Highlight the first match
      updateMatchCounter(); // Update match counter
      showNavigationButtons(); // Show navigation buttons and match counter
    } else {
      // No matches found, show 0/0 or "No items found"
      matchCounter.textContent = "0/0 - No items found";
      hideNavigationButtons(); // Hide navigation buttons since there's nothing to navigate
      matchCounter.style.display = "inline"; // Ensure counter is visible even with no results
    }
  } else {
    hideNavigationButtons(); // Hide navigation buttons if search is cleared
  }
});

// Highlight the current match
function highlightMatch(index) {
  // Clear previous highlights
  searchableElements.forEach(element => {
    element.classList.remove("highlight");
  });

  const element = matchedElements[index];
  element.scrollIntoView({ behavior: "smooth", block: "center" });
  element.classList.add("highlight");
}

// Navigate to next match
nextMatchBtn.addEventListener("click", function () {
  if (matchedElements.length > 0) {
    currentMatchIndex = (currentMatchIndex + 1) % matchedElements.length; // Loop through matches
    highlightMatch(currentMatchIndex);
    updateMatchCounter();
  }
});

// Navigate to previous match
prevMatchBtn.addEventListener("click", function () {
  if (matchedElements.length > 0) {
    currentMatchIndex = (currentMatchIndex - 1 + matchedElements.length) % matchedElements.length; // Loop through matches
    highlightMatch(currentMatchIndex);
    updateMatchCounter();
  }
});

// Clear search input and highlights
clearSearchBtn.addEventListener("click", function () {
  searchInput.value = ""; // Clear the input
  hideNavigationButtons(); // Hide navigation buttons
  matchedElements = []; // Clear matches
  searchableElements.forEach(element => element.classList.remove("highlight")); // Remove highlights
});

// Update match counter (e.g., "1/3")
function updateMatchCounter() {
  matchCounter.textContent = `${currentMatchIndex + 1}/${matchedElements.length}`;
}

// Show navigation buttons and match counter
function showNavigationButtons() {
  nextMatchBtn.style.display = "inline";
  prevMatchBtn.style.display = "inline";
  clearSearchBtn.style.display = "inline";
  matchCounter.style.display = "inline";
}

// Hide navigation buttons and match counter
function hideNavigationButtons() {
  nextMatchBtn.style.display = "none";
  prevMatchBtn.style.display = "none";
  clearSearchBtn.style.display = "none";
  matchCounter.style.display = "none";
}

// Dynamically update the year in the footer
document.getElementById("currentYear").textContent = new Date().getFullYear();


// faq js
