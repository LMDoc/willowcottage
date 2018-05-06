// Scroll Buttons

const btns = document.querySelectorAll('.btn');
const explore = document.querySelector('#explore');


function scrollTo() {
   const selector =  this.getAttribute('data-value'),
         target   =  document.querySelector(selector);
   
   target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
   });
}

btns.forEach(btn => btn.addEventListener('click', scrollTo))

// Slider

const frame = document.querySelector('#slider');
let i = 0;
let images = 
  [
    './images/inside1.jpg',
    './images/living.jpg',
    './images/living2.jpg',
    './images/view.jpg',
    './images/inside2.jpg',
    './images/dining.jpg',
    './images/kitchen.jpg',
    './images/outside.JPG',
    './images/inside3.jpg',
    './images/main.JPG',
    './images/inside5.jpg',
    './images/inside6.jpg',
    './images/patio.JPG',
  ];

function change() {
	frame.src = images[i];

	if (i < images.length -1) {
		i++
	} else {
		i = 0;
	}

	setTimeout("change()", 3000);
}

window.onload = change();


// MAP

function initMap() {
        var uluru = {lat: 53.535800, lng: -1.6142151};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }