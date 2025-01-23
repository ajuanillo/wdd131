// select the DOM elements for output
const full = document.querySelector("#full");
const worldfull = document.querySelector("#world-full");
const short = document.querySelector("#short");
const medium = document.querySelector("#medium");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const dayofweek = document.querySelector("#dayofweek");
const lastmod = document.querySelector("#lastmodified");

// use the date object
const today = new Date();
if (full!=null)
{
	full.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat(
		"en-US",
		{
			dateStyle: "full"
		}
	).format(today)}</span>`;
}

/*
worldfull.innerHTML = `UK: <span class="highlight">${new Intl.DateTimeFormat(
	"en-UK",
	{
		dateStyle: "full"
	}
).format(today)}</span>`; */
if (short!=null)
	{
	short.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
		"en-US",
		{
			dateStyle: "short"
		}
	).format(today)}</span>`; 
	}
/* medium.innerHTML = `Medium: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "medium"
	}
).format(today)}</span>`;  */

year.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
//month.innerHTML = `getMonth(): <span class="highlight">${today.getMonth()}</span>`;
//day.innerHTML = `getDate(): <span class="highlight">${today.getDate()}</span>`;
// dayofweek.innerHTML = `getDay(): <span class="highlight">${today.getDay()}</span>`;
lastmod.innerHTML = `Last modification <span class="highlight">${document.lastModified}</span>`;
