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

// Lorsque l'utilisateur clique sur <span> (x), fermez la modale
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}

// Lorsque l'utilisateur clique en dehors de l'image, fermez la modale
modal.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

})
