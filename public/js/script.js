$(document).ready(function() {

    console.log('ready');

    // Changement de theme
    let btn = $('.btn');
    let btnNight = $('.btnNight');
    let btnDay = $('.btnDay');

    if (localStorage.getItem('theme') == 'night') {
        document.styleSheets[0].disabled = true;
        document.styleSheets[1].disabled = false;
        $(btnNight).show();
        $(btnDay).hide();

    } else {
        document.styleSheets[0].disabled = false;
        document.styleSheets[1].disabled = true;
        $(btnNight).hide();
        $(btnDay).show();
    };

    $(btn).click(function() {


        if (localStorage.getItem('theme') == 'day') {
            document.styleSheets[0].disabled = true;
            document.styleSheets[1].disabled = false;
            localStorage.setItem('theme', 'night');
            $(btnNight).show();
            $(btnDay).hide();
        } else {
            document.styleSheets[0].disabled = false;
            document.styleSheets[1].disabled = true;
            localStorage.setItem('theme', 'day');
            $(btnNight).hide();
            $(btnDay).show();
        }

    });
    
    document.getElementById('type').addEventListener('change', filterImages);
document.getElementById('filterColor').addEventListener('change', filterImages);

// Filtrer les images
function filterImages() {
    var type = document.getElementById('type').value;
    var color = document.getElementById('filterColor').value;
    
    var items = document.querySelectorAll('.grid-item');
    
    items.forEach(function(item) {
      var img = item.querySelector('img');
      var itemType = img.getAttribute('data-type');
      var itemColor = img.getAttribute('data-color');
      
      if ((type === '' || itemType === type) && (color === '' || itemColor === color)) {
        item.classList.remove('hidden');
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
        item.classList.add('hidden');
      }
    });
  }

  // Ajouter une légende à chaque image
  function setFigcaptionText() {
    var images = document.querySelectorAll('.grid-item img');
    images.forEach(function(img) {
      var src = img.getAttribute('src');
      var name = src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('.'));
      img.nextElementSibling.textContent = name;
    });
  }
  
  // Appeler la fonction après que les images ont été ajoutées à la page
  setFigcaptionText();


// Afficher les images en plus grand lors d'un clic
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Obtenez toutes les images
var images = document.querySelectorAll(".grid-item img");

// Ajoutez un écouteur d'événements à chaque image
images.forEach(function(img) {
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});

// Lorsque l'utilisateur clique sur <span> (x), fermer la modale
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}

// Lorsque l'utilisateur clique en dehors de l'image, fermer la modale
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Ouvrir et fermer le menu
var openButton = document.getElementById('open-selectors');
var menu = document.querySelector('.selecteurs');

openButton.addEventListener('click', function() {
  if (menu.classList.contains('open')) {
    // Si le menu est ouvert, fermez-le et réinitialisez la position du bouton
    menu.classList.remove('open');
    openButton.classList.remove('open');
    openButton.classList.add('close');
  } else {
    // Si le menu est fermé, ouvrez-le et déplacez le bouton
    menu.classList.add('open');
    openButton.classList.add('open');
    openButton.classList.remove('close');
  }
});

document.getElementById('pageTop').addEventListener('click', function() {
  var top = window.pageYOffset || document.documentElement.scrollTop;
  var step = top / 50; // Ajustez ce nombre pour changer la vitesse de l'animation

  var intervalId = setInterval(function() {
    top -= step;
    if (top <= 0) {
      clearInterval(intervalId);
      top = 0;
    }
    window.scrollTo(0, top);
  }, 15); // Vitesse de l'animation
});
  
var button = document.getElementById('pageTop');

var handleScroll = function() {
  if (window.pageYOffset > 0) {
    button.style.opacity = "1";
    button.style.visibility = "visible";
  } else {
    button.style.opacity = "0";
    button.style.visibility = "hidden";
  }
};

window.addEventListener('scroll', handleScroll);

// Appelle la fonction de gestion de l'événement de défilement au chargement de la page
handleScroll();

var slider = document.getElementById('image-width-slider');
var galerie = document.getElementById('galerie');
var sliderValue = document.getElementById('slider-value');

// Initialise la propriété grid-template-columns de #galerie et l'élément #slider-value avec la valeur par défaut du slider
var defaultNumberOfColumns = slider.value;
galerie.style.gridTemplateColumns = 'repeat(' + defaultNumberOfColumns + ', 1fr)';
sliderValue.textContent = defaultNumberOfColumns;

slider.addEventListener('change', function() {
  var numberOfColumns = this.value; // Obtient le nombre de colonnes à partir de la valeur du slider

  // Ajuste la propriété grid-template-columns de #galerie
  galerie.style.gridTemplateColumns = 'repeat(' + numberOfColumns + ', 1fr)';

  // Met à jour l'élément #slider-value
  sliderValue.textContent = numberOfColumns;
});

var resetButton = document.getElementById('reset-button');
var selectType = document.getElementById('type');
var selectColor = document.getElementById('filterColor');

resetButton.addEventListener('click', function() {
  // Réinitialise la valeur du slider
  slider.value = "3";
  slider.dispatchEvent(new Event('change'));

  // Réinitialise les valeurs des sélecteurs
  selectType.value = "";
  selectColor.value = "";

  // Déclenche les événements change pour mettre à jour la galerie
  selectType.dispatchEvent(new Event('change'));
  selectColor.dispatchEvent(new Event('change'));
});

})
