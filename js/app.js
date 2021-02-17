'use strict'

let workHours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'] // Working hours for each location.

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
  total: 0,

  // generate the number of customers per hour from the random function created.
  custPerHour: [],
  calcCustPerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      this.custPerHour.push(randHourlyCust(this.minCust, this.maxCust))
    }
  },

  // calculate cookies sold per hour by multipling the average cookies sold for each customer with the random number of customers each hour.
  cookiesPerHour: [],
  calcCookiesPerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgCookie));
      // this.total += Math.floor(this.custPerHour[i] * this.avgCookie) // Longer way to calcuolate the total cookies
      this.total += this.cookiesPerHour[i]
    }
  },


  // render a header of the location name and a list of the cookies each hour and the total
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
      listItem.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} Cookies`
    }

    let totalItem = document.createElement('li');
    unorderedList.appendChild(totalItem);
    totalItem.textContent = `Total: ${this.total} Cookies`
  }
}

// calling the functions
shop1.calcCustPerHour();
shop1.calcCookiesPerHour();
shop1.render();


/////////////////////////////////////////////
////////////////////////////////////////////


//  Create a literal object for the 2nd location
const shop2 = {
  locName: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  total: 0,

  // generate the number of customers per hour from the random function created.
  custPerHour: [],
  calcCustPerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      this.custPerHour.push(randHourlyCust(this.minCust, this.maxCust))
    }
  },

  // calculate cookies sold per hour by multipling the average cookies sold for each customer with the random number of customers each hour.
  cookiesPerHour: [],
  calcCookiesPerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgCookie));
      // this.total += Math.floor(this.custPerHour[i] * this.avgCookie) // Longer way to calcuolate the total cookies
      this.total += this.cookiesPerHour[i]
    }
  },


  // render a header of the location name and a list of the cookies each hour and the total
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
      listItem.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} Cookies`
    }

    let totalItem = document.createElement('li');
    unorderedList.appendChild(totalItem);
    totalItem.textContent = `Total: ${this.total} Cookies`
  }
}

// calling the functions
shop2.calcCustPerHour();
shop2.calcCookiesPerHour();
shop2.render();


///////////////////////////////////////
//////////////////////////////////////


//  Create a literal object for the 1st location
const shop3 = {
  locName: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  total: 0,

  // generate the number of customers per hour from the random function created.
  custPerHour: [],
  calcCustPerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      this.custPerHour.push(randHourlyCust(this.minCust, this.maxCust))
    }
  },

  // calculate cookies sold per hour by multipling the average cookies sold for each customer with the random number of customers each hour.
  cookiesPerHour: [],
  calcCookiesPerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgCookie));
      // this.total += Math.floor(this.custPerHour[i] * this.avgCookie) // Longer way to calcuolate the total cookies
      this.total += this.cookiesPerHour[i]
    }
  },


  // render a header of the location name and a list of the cookies each hour and the total
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
      listItem.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} Cookies`
    }

    let totalItem = document.createElement('li');
    unorderedList.appendChild(totalItem);
    totalItem.textContent = `Total: ${this.total} Cookies`
  }
}

// calling the functions
shop3.calcCustPerHour();
shop3.calcCookiesPerHour();
shop3.render()


///////////////////////////////////////////
//////////////////////////////////////////

//  Create a literal object for the 1st location
const shop4 = {
  locName: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 3.3,
  total: 0,

  // generate the number of customers per hour from the random function created.
  custPerHour: [],
  calcCustPerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      this.custPerHour.push(randHourlyCust(this.minCust, this.maxCust))
    }
  },

  // calculate cookies sold per hour by multipling the average cookies sold for each customer with the random number of customers each hour.
  cookiesPerHour: [],
  calcCookiesPerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgCookie));
      // this.total += Math.floor(this.custPerHour[i] * this.avgCookie) // Longer way to calcuolate the total cookies
      this.total += this.cookiesPerHour[i]
    }
  },


  // render a header of the location name and a list of the cookies each hour and the total
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
      listItem.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} Cookies`
    }

    let totalItem = document.createElement('li');
    unorderedList.appendChild(totalItem);
    totalItem.textContent = `Total: ${this.total} Cookies`
  }
}

// calling the functions
shop4.calcCustPerHour();
shop4.calcCookiesPerHour();
shop4.render();


////////////////////////////////////////
///////////////////////////////////////


//  Create a literal object for the 1st location
const shop5 = {
  locName: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  total: 0,

  // generate the number of customers per hour from the random function created.
  custPerHour: [],
  calcCustPerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      this.custPerHour.push(randHourlyCust(this.minCust, this.maxCust))
    }
  },

  // calculate cookies sold per hour by multipling the average cookies sold for each customer with the random number of customers each hour.
  cookiesPerHour: [],
  calcCookiesPerHour: function () {
    for (let i = 0; i < workHours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgCookie));
      // this.total += Math.floor(this.custPerHour[i] * this.avgCookie) // Longer way to calcuolate the total cookies
      this.total += this.cookiesPerHour[i]
    }
  },


  // render a header of the location name and a list of the cookies each hour and the total
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
      listItem.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} Cookies`
    }

    let totalItem = document.createElement('li');
    unorderedList.appendChild(totalItem);
    totalItem.textContent = `Total: ${this.total} Cookies`
  }
}

// calling the functions
shop5.calcCustPerHour();
shop5.calcCookiesPerHour();
shop5.render();
