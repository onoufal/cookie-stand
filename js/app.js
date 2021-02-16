'use strict'

let workHours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7] // Working hours for each location.

// Generate random number of customers for every opening hour with a minimum and maximum arguments.
function randHourlyCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//  Create a literal object for the 1st location
const shop1 = {
  locName: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,

  //generate the number of customers per hour from the random function created.
  custPerHour: [],
  calcCustPerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      this.custPerHour.push(randHourlyCust(this.minCust, this.maxCust))
    }
  },

  //calculate cookies sold per hour by multipling the average cookies sold for each customer with random number of customers each hour.
  cookiesPerHour: [],
  calcCookiesPerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgCookie));
    }
  },

  render: function () {
    let parent = document.getElementById('parent');
    let shopName = document.createElement('h2');
    parent.appendChild(shopName);
    shopName.textContent = this.locName;
    let unorderedList = document.createElement('ul');
    parent.appendChild(unorderedList);

    for (let i = 0; i < workHours.length; i++) {
      let listItem = document.createElement('li');
      unorderedList.appendChild(listItem);
      listItem.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]}`

    }
  }
}

shop1.render()

console.log(shop1.cookiesPerHour[0]);


shop1.calcCustPerHour()
shop1.calcCookiesPerHour()

console.log(shop1);

// console.log(randHourlyCust(23, 65));