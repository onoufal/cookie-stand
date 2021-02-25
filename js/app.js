'use strict'

// Working hours for each location.
let workHours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM']

// Generate random number of customers for every opening hour with a minimum and maximum arguments.
function randHourlyCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



// Creat an object constructer:
let shops = [];

function Shop(locName, minCust, maxCust, avgCookie) {
  this.locName = locName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesPerDay = 0;
  shops.push(this);
}

// Calculate customers per hour
Shop.prototype.calcCustPerHour = function () {
  for (let i = 0; i < workHours.length; i++) {
    this.custPerHour.push(randHourlyCust(this.minCust, this.maxCust))
  }
}

// Calculate Cookies per hour.
Shop.prototype.calcCookiesPerHour = function () {
  for (let i = 0; i < workHours.length; i++) {
    this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgCookie));
    this.totalCookiesPerDay += this.cookiesPerHour[i]
  }
}


// create location instances 
let seattle = new Shop('Seattle', 23, 65, 6.3)
let tokyo = new Shop('Tokyo', 3, 24, 1.2)
let dubai = new Shop('Dubai', 11, 38, 3.7)
let paris = new Shop('Paris', 20, 38, 3.3)
let lima = new Shop('Lima', 2, 16, 4.6)

// add the table element
let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);



//add the header row
let headerRow = document.createElement('tr');
table.appendChild(headerRow);

// create the name headedr cell
let firstTh = document.createElement('th');
headerRow.appendChild(firstTh);
firstTh.textContent = 'Name';

// add the working hours to the header row
for (let i = 0; i < (workHours.length); i++) {
  let thElement = document.createElement('th');
  headerRow.appendChild(thElement);
  thElement.textContent = workHours[i];
}

// add the last daily location header cell
let lastTh = document.createElement('th');
headerRow.appendChild(lastTh);
lastTh.textContent = 'Daily Location Total';

// this code dosent render table rows for the locations

// rendering table rows for each location
Shop.prototype.render = function () {


  let dataRow = document.createElement('tr');
  table.appendChild(dataRow);

  let nameData = document.createElement('td');
  dataRow.appendChild(nameData);
  nameData.textContent = this.locName;

  for (let i = 0; i < workHours.length; i++) {
    let tdElement = document.createElement('td')
    tdElement.textContent = this.cookiesPerHour[i];
    dataRow.appendChild(tdElement)
  }

  let totalDataPerLoc = document.createElement('td');
  dataRow.appendChild(totalDataPerLoc);
  totalDataPerLoc.textContent = this.totalCookiesPerDay
}



let makeFooter = function () {
  let footerRow = document.createElement('tr');
  table.appendChild(footerRow)

  let footerTh = document.createElement('th');
  footerRow.appendChild(footerTh);
  footerTh.textContent = 'Totals'

  let grandTotal = 0;
  for (let i = 0; i < workHours.length; i++) {
    let totalPerHour = 0;


    for (let j = 0; j < shops.length; j++) {
      totalPerHour += shops[j].cookiesPerHour[i];
      grandTotal += shops[j].cookiesPerHour[i];
    }

    footerTh = document.createElement('th');
    footerRow.appendChild(footerTh);
    footerTh.textContent = totalPerHour;
  }

  let finalTH = document.createElement('th');
  footerRow.appendChild(finalTH);
  finalTH.textContent = grandTotal


}




let locForm = document.getElementById('locationForm');

locForm.addEventListener('submit', submitter)


function submitter(event) {

  event.preventDefault()

  console.log(event);

  let locName = event.target.locName.value;

  console.log(locName);

  let minCust = event.target.minCust.value;

  console.log(minCust);


  let maxCust = event.target.maxCust.value;
  console.log(maxCust);

  let avgCookies = event.target.avgCookies.value
  console.log(avgCookies);


  let addedLocation = new Shop(locName, minCust, maxCust, avgCookies);

  addedLocation.calcCustPerHour();
  addedLocation.calcCookiesPerHour();
  addedLocation.render();


  // let container = document.getElementById('parent')

  // console.log(container);

  // container.textContent = ''

  // for (let i = 0; i < shops.length; i++) {
  //   shops[i].calcCustPerHour();
  //   shops[i].calcCookiesPerHour();
  //   shops[i].render();
  // }



}





for (let i = 0; i < shops.length; i++) {
  shops[i].calcCustPerHour();
  shops[i].calcCookiesPerHour();
  shops[i].render();
}

makeFooter();