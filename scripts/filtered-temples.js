const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
	{
		templeName: "Arequipa Peru Temple",
		location: "Arequipa, Peru",
		dedicated: "2017, March, 4",
		area: 32000,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186-main.jpg"
	},
	{
	templeName: "Dallas Texas Temple",
	location: "Dallas, Texas",
	dedicated: "1984, October, 24",
	area: 24000,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55221.jpg"
	},
	{
	templeName: "Cusco Peru Temple",
	location: "Cusco, Peru",
	dedicated: "2022, October, 4",
	area: 10000,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/cusco-peru-temple/cusco-peru-temple-44681.jpg"
	},
  ];
  /*
	Loop through the array and create "temple cards" for each temple by displaying:
	The name of the temple.
	The location of the temple.
	The date the temple was dedicated.
	The total area of the temple in square feet.
	The provided image of the temple (an absolute address), making sure to include an appropriate alt value such as the name of the temple.
	Use native lazy loading for each temple image. 
  */
  const container = document.querySelector('.temples'); // Select space on temples class
  
  temples.forEach(temple => {
	const card = document.createElement('div');
	card.classList.add('temple-card');
  
	const name = document.createElement('h3');
	name.textContent = temple.templeName;
  
	const location = document.createElement('p');
	location.textContent = `Location: ${temple.location}`;
  
	const dedicated = document.createElement('p');
	dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
	const area = document.createElement('p');
	area.textContent = `Area: ${temple.area} sq ft`;
  
	const image = document.createElement('img');
	image.setAttribute('src', temple.imageUrl);
	image.setAttribute('alt', temple.templeName);
	image.setAttribute('loading', 'lazy');
  
	card.appendChild(name);
	card.appendChild(location);
	card.appendChild(dedicated);
	card.appendChild(area);
	card.appendChild(image);
  
	container.appendChild(card);
  });
  /*
	Respond to the main navigation menu items by filtering and displaying the temples as follows:
	Old – temples built before 1900
	New – temples built after 2000
	Large – temples larger than 90,000 square feet
	Small – temples smaller than 10,000 square feet
	Home – displays all the temples stored in the array. 
  */
  const oldButton = document.querySelector('#old');
  const newButton = document.querySelector('#new');
  const largeButton = document.querySelector('#large');
  const smallButton = document.querySelector('#small');
  const homeButton = document.querySelector('#home');	
  oldButton.addEventListener('click', () => {
	temples.filter(temple => {
	  const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
	  return dedicatedYear < 1900;
	}).forEach(temple => {
	  const card = document.createElement('div');
	  card.classList.add('temple-card');

	  const name = document.createElement('h3');
	  name.textContent = temple.templeName;

	  const location = document.createElement('p');
	  location.textContent = `Location: ${temple.location}`;

	  const dedicated = document.createElement('p');
	  dedicated.textContent = `Dedicated: ${temple.dedicated}`;

	  const area = document.createElement('p');
	  area.textContent = `Area: ${temple.area} sq ft`;

	  const image = document.createElement('img');
	  image.setAttribute('src', temple.imageUrl);
	  image.setAttribute('alt', temple.templeName);
	  image.setAttribute('loading', 'lazy');

	  card.appendChild(name);
	  card.appendChild(location);
	  card.appendChild(dedicated);
	  card.appendChild(area);
	  card.appendChild(image);

	  container.innerHTML = '';
	  container.appendChild(card);
	});
  });
  newButton.addEventListener('click', () => {
	temples.filter(temple => {
	  const dedicatedYear = parseInt(temple.dedicated.split(', ')[0]);
	  return dedicatedYear > 2000;
	}).forEach(temple => {
	  const card = document.createElement('div');
	  card.classList.add('temple-card');

	  const name = document.createElement('h3');
	  name.textContent = temple.templeName;

	  const location = document.createElement('p');
	  location.textContent = `Location: ${temple.location}`;

	  const dedicated = document.createElement('p');
	  dedicated.textContent = `Dedicated: ${temple.dedicated}`;

	  const area = document.createElement('p');
	  area.textContent = `Area: ${temple.area} sq ft`;

	  const image = document.createElement('img');
	  image.setAttribute('src', temple.imageUrl);
	  image.setAttribute('alt', temple.templeName);
	  image.setAttribute('loading', 'lazy');

	  card.appendChild(name);
	  card.appendChild(location);
	  card.appendChild(dedicated);
	  card.appendChild(area);
	  card.appendChild(image);

	  container.innerHTML = '';
	  container.appendChild(card);
	});
  });
  largeButton.addEventListener('click', () => {
	temples.filter(temple => temple.area > 90000).forEach(temple => {
	  const card = document.createElement('div');
	  card.classList.add('temple-card');

	  const name = document.createElement('h3');
	  name.textContent = temple.templeName;

	  const location = document.createElement('p');
	  location.textContent = `Location: ${temple.location}`;

	  const dedicated = document.createElement('p');
	  dedicated.textContent = `Dedicated: ${temple.dedicated}`;

	  const area = document.createElement('p');
	  area.textContent = `Area: ${temple.area} sq ft`;

	  const image = document.createElement('img');
	  image.setAttribute('src', temple.imageUrl);
	  image.setAttribute('alt', temple.templeName);
	  image.setAttribute('loading', 'lazy');

	  card.appendChild(name);
	  card.appendChild(location);
	  card.appendChild(dedicated);
	  card.appendChild(area);
	  card.appendChild(image);

	  container.innerHTML = '';
	  container.appendChild(card);
	});
  });
  smallButton.addEventListener('click', () => {
	temples.filter(temple => temple.area < 10000).forEach(temple => {
	  const card = document.createElement('div');
	  card.classList.add('temple-card');

	  const name = document.createElement('h3');
	  name.textContent = temple.templeName;

	  const location = document.createElement('p');
	  location.textContent = `Location: ${temple.location}`;

	  const dedicated = document.createElement('p');
	  dedicated.textContent = `Dedicated: ${temple.dedicated}`;

	  const area = document.createElement('p');
	  area.textContent = `Area: ${temple.area} sq ft`;

	  const image = document.createElement('img');
	  image.setAttribute('src', temple.imageUrl);
	  image.setAttribute('alt', temple.templeName);
	  image.setAttribute('loading', 'lazy');

	  card.appendChild(name);
	  card.appendChild(location);
	  card.appendChild(dedicated);
	  card.appendChild(area);
	  card.appendChild(image);

	  container.innerHTML = '';
	  container.appendChild(card);
	});
  });
  homeButton.addEventListener('click', () => {
	container.innerHTML = '';
	temples.forEach(temple => {
	  const card = document.createElement('div');
	  card.classList.add('temple-card');

	  const name = document.createElement('h3');
	  name.textContent = temple.templeName;

	  const location = document.createElement('p');
	  location.textContent = `Location: ${temple.location}`;

	  const dedicated = document.createElement('p');
	  dedicated.textContent = `Dedicated: ${temple.dedicated}`;

	  const area = document.createElement('p');
	  area.textContent = `Area: ${temple.area} sq ft`;

	  const image = document.createElement('img');
	  image.setAttribute('src', temple.imageUrl);
	  image.setAttribute('alt', temple.templeName);
	  image.setAttribute('loading', 'lazy');

	  card.appendChild(name);
	  card.appendChild(location);
	  card.appendChild(dedicated);
	  card.appendChild(area);
	  card.appendChild(image);

	  container.appendChild(card);
	});
  });


