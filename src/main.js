import './style.css'
import './index.html'
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';

const footerSunrise = document.querySelector('.footer-sunrise');
const footerSunset = document.querySelector('.footer-sunset');
const city = document.querySelector('.main-header');
const tempMain = document.querySelector('.temperature.temp');
const tempFeelsLike = document.querySelector('.temperature.feels-like');
const humidity = document.querySelector('.temperature.humidity');
const wind = document.querySelector('.wind-index');
const clouds = document.querySelector('.clouds')
const country = document.querySelector('.footer-country');

const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
	method: 'GET',
	headers: {
 		'x-rapidapi-key': 'b8c4ded738msh474f26e54b51cfdp1a4bbcjsn179660eb84eb',
 		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};
function dateSet(){
	let dateSunRise = new Date(Number(footerSunrise.innerHTML));
	footerSunrise.innerHTML = `${dateSunRise.getHours()}:${dateSunRise.getMinutes()}`

	let dateSunSet = new Date(Number(footerSunset.innerHTML));
	footerSunset.innerHTML = `${dateSunSet.getHours()}:${dateSunSet.getMinutes()}`
}

dateSet();

  try {
  	const response = await fetch(url, options);
  	const {location, current} = await response.json();
    city.innerHTML = location.name;
 	country.innerHTML = location.country;
 	clouds.innerHTML = current.cloud;
 	tempMain.innerHTML = current.heatindex_c;
 	tempFeelsLike.innerHTML = current.feelslike_c;
 	humidity.innerHTML = current.humidity;
 	wind.innerHTML = current.wind_kph;
  	} catch (error) {
  	console.error(error);
  }