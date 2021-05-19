google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

//country code 
let US = 'US';
let IN = 'IN';
let BR = 'BR';
let RU = 'RU';
let FR = 'FR';
let IT = 'IT';

// targeting that area
let pNC = document.getElementById('NC');
let pTC = document.getElementById('TC');
let pND = document.getElementById('ND');
let pTD = document.getElementById('TD');
let pNR = document.getElementById('NR');
let pTR = document.getElementById('TR');

let pNC1 = document.getElementById('NC1');
let pTC1 = document.getElementById('TC1');
let pND1 = document.getElementById('ND1');
let pTD1 = document.getElementById('TD1');
let pNR1 = document.getElementById('NR1');
let pTR1 = document.getElementById('TR1');

let pNC2 = document.getElementById('NC2');
let pTC2 = document.getElementById('TC2');
let pND2 = document.getElementById('ND2');
let pTD2 = document.getElementById('TD2');
let pNR2 = document.getElementById('NR2');
let pTR2 = document.getElementById('TR2');

let pNC3 = document.getElementById('NC3');
let pTC3 = document.getElementById('TC3');
let pND3 = document.getElementById('ND3');
let pTD3 = document.getElementById('TD3');
let pNR3 = document.getElementById('NR3');
let pTR3 = document.getElementById('TR3');

let pNC4 = document.getElementById('NC4');
let pTC4 = document.getElementById('TC4');
let pND4 = document.getElementById('ND4');
let pTD4 = document.getElementById('TD4');
let pNR4 = document.getElementById('NR4');
let pTR4 = document.getElementById('TR4');

let pNC5 = document.getElementById('NC5');
let pTC5 = document.getElementById('TC5');
let pND5 = document.getElementById('ND5');
let pTD5 = document.getElementById('TD5');
let pNR5 = document.getElementById('NR5');
let pTR5 = document.getElementById('TR5');

let pNC6 = document.getElementById('NC6');
let pTC6 = document.getElementById('TC6');
let pND6 = document.getElementById('ND6');
let pTD6 = document.getElementById('TD6');
let pNR6 = document.getElementById('NR6');
let pTR6 = document.getElementById('TR6');


async function drawChart() {

  let response = await fetch(`https://api.covid19api.com/summary`);
  let data1 = await response.json();
  let Countries = data1['Countries'];

  var data = google.visualization.arrayToDataTable([
    ['status', 'Weight'],
    ['NewConfirmed', data1['Global'].NewConfirmed],
    ['TotalConfirmed', data1['Global'].TotalConfirmed],
    ['NewDeaths', data1['Global'].NewDeaths],
    ['TotalDeaths', data1['Global'].TotalDeaths],
    ['NewRecovered', data1['Global'].NewRecovered],
    ['TotalRecovered', data1['Global'].TotalRecovered]

  ]);

  var options = {
    title: 'Corona summary',
    is3D: true,

  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);

  for (let i = 0; i <= Countries.length; i++) {

    if (US == Countries[i].CountryCode) {
      pNC.innerHTML = Countries[i].NewConfirmed;
      pTC.innerHTML = Countries[i].TotalConfirmed;
      pND.innerHTML = Countries[i].NewDeaths;
      pTD.innerHTML = Countries[i].TotalDeaths;
      pNR.innerHTML = Countries[i].NewRecovered;
      pTR.innerHTML = Countries[i].TotalRecovered;
      break;
    }
  }

  for (let i = 0; i <= Countries.length; i++) {

    if (IN == Countries[i].CountryCode) {
      pNC1.innerHTML = Countries[i].NewConfirmed;
      pTC1.innerHTML = Countries[i].TotalConfirmed;
      pND1.innerHTML = Countries[i].NewDeaths;
      pTD1.innerHTML = Countries[i].TotalDeaths;
      pNR1.innerHTML = Countries[i].NewRecovered;
      pTR1.innerHTML = Countries[i].TotalRecovered;
      break;
    }
  }

  for (let i = 0; i <= Countries.length; i++) {

    if (BR == Countries[i].CountryCode) {
      pNC2.innerHTML = Countries[i].NewConfirmed;
      pTC2.innerHTML = Countries[i].TotalConfirmed;
      pND2.innerHTML = Countries[i].NewDeaths;
      pTD2.innerHTML = Countries[i].TotalDeaths;
      pNR2.innerHTML = Countries[i].NewRecovered;
      pTR2.innerHTML = Countries[i].TotalRecovered;
      break;
    }
  }

  for (let i = 0; i <= Countries.length; i++) {

    if (RU == Countries[i].CountryCode) {
      pNC3.innerHTML = Countries[i].NewConfirmed;
      pTC3.innerHTML = Countries[i].TotalConfirmed;
      pND3.innerHTML = Countries[i].NewDeaths;
      pTD3.innerHTML = Countries[i].TotalDeaths;
      pNR3.innerHTML = Countries[i].NewRecovered;
      pTR3.innerHTML = Countries[i].TotalRecovered;
      break;
    }
  }

  for (let i = 0; i <= Countries.length; i++) {

    if (FR == Countries[i].CountryCode) {
      pNC4.innerHTML = Countries[i].NewConfirmed;
      pTC4.innerHTML = Countries[i].TotalConfirmed;
      pND4.innerHTML = Countries[i].NewDeaths;
      pTD4.innerHTML = Countries[i].TotalDeaths;
      pNR4.innerHTML = Countries[i].NewRecovered;
      pTR4.innerHTML = Countries[i].TotalRecovered;
      break;
    }
  }

  for (let i = 0; i <= Countries.length; i++) {

    if (IT == Countries[i].CountryCode) {
      pNC5.innerHTML = Countries[i].NewConfirmed;
      pTC5.innerHTML = Countries[i].TotalConfirmed;
      pND5.innerHTML = Countries[i].NewDeaths;
      pTD5.innerHTML = Countries[i].TotalDeaths;
      pNR5.innerHTML = Countries[i].NewRecovered;
      pTR5.innerHTML = Countries[i].TotalRecovered;
      break;
    }
  }
}

//Search box code
const error = document.getElementById('error');
error.style.display = 'none';
let cross = document.getElementById('cross');
cross.addEventListener('click', () => {
  error.style.display = 'none';
})

let fullname = document.getElementById('fullname');
let countryname = document.getElementById('countryname');
let h2 = document.getElementById('h2');

async function Search() {
  let response = await fetch(`https://api.covid19api.com/summary`);
  let data1 = await response.json();
  let Countries = data1['Countries'];
  let uservalue = fullname.value;

  let index = 0;

  for (let i = 0; i <= data1['Countries'].length; i++) {
    try {

      if (uservalue == Countries[i].Country) {
        index = i;
        fullname.value = "";

        h2.innerHTML = uservalue;
        pNC6.innerHTML = Countries[index].NewConfirmed;
        pTC6.innerHTML = Countries[index].TotalConfirmed;
        pND6.innerHTML = Countries[index].NewDeaths;
        pTD6.innerHTML = Countries[index].TotalDeaths;
        pNR6.innerHTML = Countries[index].NewRecovered;
        pTR6.innerHTML = Countries[index].TotalRecovered;
        break;
      }
    }
    catch (e) {
      error.style.display = 'block';
      h2.innerHTML = uservalue;
        pNC6.innerHTML = "";
        pTC6.innerHTML = ""
        pND6.innerHTML = "";
        pTD6.innerHTML = "";
        pNR6.innerHTML = "";
        pTR6.innerHTML = "";
    }
  }
}

//changing color of header
let head = document.getElementById('head');

let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');

window.onscroll = () => {
  //console.log(window.scrollY);

  if (window.scrollY >= 300)
    head.classList.add('active');
  else
    head.classList.remove('active');

  if (window.scrollY >= 225) {
    box1.classList.add('active');
    box2.classList.add('active');
    box3.classList.add('active');

  }

  

  if (window.scrollY >= 741) {
    box4.classList.add('active');
    box5.classList.add('active');
    box6.classList.add('active');
  }
  
}

// feedback js
var slideIndex = 0;
  showSlides();
  showData();
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
      slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds


  }

  function toggle_visibility() {
    var e = document.getElementById('feedback-main');
    
    if (e.style.display == 'block') 
        e.style.display = 'none'; 
    else 
        e.style.display = 'block';

  }


      //To save data in local storage

  // function saveData() {

  //   let person = {
  //     Name: document.getElementById('InputName').value,
  //     Profile: document.getElementById('InputProfile').value,
  //     Review: document.getElementById('InputReview').value
  //   }
  //   let Comments;
  //   if (localStorage.getItem("Comments") === null) {
  //     Comments = [];
  //   }
  //   else {
  //     Comments = JSON.parse(localStorage.getItem('Comments'));
  //   }
  //   Comments.push(person);
  //   localStorage.setItem("Comments", JSON.stringify('Comments'));

  //   // let retrieveData = JSON.parse(localStorage.getItem('Comments'));

  //   // document.createElement('div')
  //   // document.getElementById('ShowName').value = retrieveData[0].Review;

  //   document.getElementById('InputName').value = "";
  //   document.getElementById('InputProfile').value = "";
  //   document.getElementById('InputReview').value = "";
    
  //   toggle_visibility();
  //   showData();

  // }

  // function showData() {
  //   let retrieveData = JSON.parse(localStorage.getItem('Comments'));
  //   let i = retrieveData.length -1;

  //   document.getElementById('ShowName').innerHTML = retrieveData[i].Name;
  //   document.getElementById('ShowProfile').innerHTML = retrieveData[i].Profile;
  //   document.getElementById('ShowReview').innerHTML = retrieveData[i].Review;

  //   document.getElementById('ShowName1').innerHTML = retrieveData[--i].Name;
  //   document.getElementById('ShowProfile1').innerHTML = retrieveData[i].Profile;
  //   document.getElementById('ShowReview1').innerHTML = retrieveData[i].Review;

  //   document.getElementById('ShowName2').innerHTML = retrieveData[--i].Name;
  //   document.getElementById('ShowProfile2').innerHTML = retrieveData[i].Profile;
  //   document.getElementById('ShowReview2').innerHTML = retrieveData[i].Review;


  // }




