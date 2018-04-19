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
let images = [];

images[0] = './images/inside1.jpg';
images[1] = './images/inside2.jpg';
images[2] = './images/outside.jpg';
images[3] = './images/inside3.jpg';
images[4] = './images/main.jpg';
images[5] = './images/inside5.jpg';
images[6] = './images/inside6.jpg';
images[7] = './images/patio.jpg';

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