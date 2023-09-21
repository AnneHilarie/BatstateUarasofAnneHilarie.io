var navLinks; 
var isMenuOpen = true;
var image1, image2, image3,image4,image5,image6,textElement,textElement1;
var element,  newImageUrl;
var col;
var dropdownButton,  dropdownMenu, bar5;
document.addEventListener("DOMContentLoaded", function () {
  navLinks = document.getElementById("navLinks"); 
});

function toggleMenu() {
  navLinks.style.visibility= "visible";
  if (isMenuOpen) {
    navLinks.style.right = "0"
    navLinks.style.display ='block';
    
  } else {
    navLinks.style.right = "-200%";
    navLinks.style.display ='none';
   
   
    
  }
  isMenuOpen = !isMenuOpen;
}

function myFunction(x) {
  x.classList.toggle("change");
  toggleMenu();
}






document.addEventListener("DOMContentLoaded", function () {
 image1 = document.getElementById('slider1');
 image2 = document.getElementById('slider2');
 image3 = document.getElementById('slider3');
 image4 = document.getElementById('slider4');
 image5 = document.getElementById('slider5');
 image6 = document.getElementById('slider6');
 element = document.getElementById("myElement");
 textElement = document.getElementById('text');
 textElement1 = document.getElementById('text1');


image1.addEventListener('click', () => {
  
  textElement.textContent = 'College of Accountancy, Business, Economics and International Hospitality Management';
  textElement1.textContent = 'The College of Accountancy, Business, Economics and International Hospitality Management is a college that offers graduate and undergraduate programs in business and hospitality management, customs and public administration, and disaster risk management that are nationally accredited. The college, which employs more than 100 faculty members and support personnel to serve more than 3,500 students, is known for producing competent graduates with licenses in the fields of business, entrepreneurship, management accounting, hospitality and tourism management, public administration, and disaster risk management for both the region and the entire nation.';
  newImageUrl = '4.jpg'; 
  element.style.backgroundImage = 'url(' + newImageUrl + ')';
});

image2.addEventListener('click', () => {
  textElement.textContent = 'College of Arts and Sciences';
  textElement1.textContent = 'The College aims to provide exemplary leadership essential to the education of proficient and humans professionals in the arts and sciences.';
  newImageUrl = '5.jpg'; 
  element.style.backgroundImage = 'url(' + newImageUrl + ')';
  
  
});

image3.addEventListener('click', () => {
  textElement.textContent = 'College of Informations and Computing Sciences';
  textElement1.textContent = 'The College of Informations and Computing Sciences is committed in producing globally competitive professionals is continuing to commit itself to develop highly dynamic, righteous, and competent pool to professionals equipped by quality education and practical training.';
  newImageUrl = '6.jpg';
  element.style.backgroundImage = 'url(' + newImageUrl + ')';
});

image4.addEventListener('click', () => {
  textElement.textContent = 'College of Engineering and Technology';
  textElement1.textContent = 'The College Engineering and Technology aims to develop a well-rounded graduate imbued with moral and ethical values, spiritual vigor, and utmost concern for the environment as integral parts of the furtherance of a chosen profession, and produce well-rounded and globally competitive individuals who meet local, national and international demands for skilled workers.';
  newImageUrl = '7.jpg';
  element.style.backgroundImage = 'url(' + newImageUrl + ')';
});
image5.addEventListener('click', () => {
  textElement.textContent = 'College of Nursing and Allied Health Sciences';
  textElement1.textContent = 'The College of Teacher Education endeavors to produce well-rounded acaddemicians who possess technical, pedagogical and research skills in order to address the challenges of diverse educational settings and engage in lifelong learning.';
  newImageUrl = '8.jpg'; 
  element.style.backgroundImage = 'url(' + newImageUrl + ')';
});
image6.addEventListener('click', () => {
  textElement.textContent = 'College of Teacher Education';
  textElement1.textContent = 'The College of Teacher Education endeavors to produce well-rounded acaddemicians who possess technical, pedagogical and research skills in order to address the challenges of diverse educational settings and engage in lifelong learning.';
  newImageUrl = '9.jpg'; 
  element.style.backgroundImage = 'url(' + newImageUrl + ')';
});
function showLoader() {
  document.querySelector('.loader').style.display = 'block';
}


function hideLoader() {
  document.querySelector('.loader').style.display = 'none';
}


function simulateLoading() {
  showLoader();

  setTimeout(function () {
    hideLoader();
    document.querySelector('.cover').style.display = 'block';
  }, 0000); 
}

window.addEventListener('load', simulateLoading);


 dropdownButton = document.getElementById('dropdown-button')
 dropdownMenu = document.querySelector('.dropdown-menu')
 bar5 = document.querySelector('.bar5');

dropdownButton.addEventListener("click", function() {
  col = document.getElementById('col');
  if (isMenuOpen) {
    col.style.marginBottom = '1600px';
    dropdownMenu.style.display ='block';
    bar5.style.display = "none";
    
  } else {
    
    col.style.marginBottom = '300px';
    dropdownMenu.style.display ='none';
    bar5.style.display = "block";
   
    
  }
  isMenuOpen = !isMenuOpen;



  
});
});