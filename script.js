const data = [
    {
      "title": "Work",
      bgColor: 'hsl(195, 74%, 62%)',
      img: "./images/icon-work.svg",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 107,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      img: "./images/icon-play.svg",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      img: "./images/icon-study.svg",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      img: "./images/icon-exercise.svg",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      img: "./images/icon-social.svg",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      img: "./images/icon-self-care.svg",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]


  var currentHour = document.getElementById('hour');
  var lastHour = document.getElementById('last-hour');
  var dashBoard = document.getElementById('dash-details');
  var tabLinks = document.querySelectorAll('.tab-links');





  window.addEventListener("DOMContentLoaded", function (){
    showData();
  })

  tabLinks.forEach(function(tab){
    tab.addEventListener("click", function(e){
      if (e.target.id === "weekly"){
        showData()
        tab.classList.add("active");
      //  tab.style.color = 'red';
      }
      else if(e.target.id === "daily"){
        showDailyData()
      }
      else {
        showMonthlyData()
      }
    })
  })


  function toggleColor(){
    tabLinks.forEach(function(tab){
      tab.addEventListener("click", function(e){
        console.log(e.target.id)
        if (e.target.id === "weekly"){
          document.getElementById('weekly').classList.add("active")
          document.getElementById('daily').classList.remove("active")
          document.getElementById('monthly').classList.remove("active")
        //  tab.style.color = 'red';
        }
        else if(e.target.id === "daily"){
          document.getElementById('daily').classList.add("active")
          document.getElementById('weekly').classList.remove("active")
          document.getElementById('monthly').classList.remove("active")
        }
        else {
          document.getElementById('daily').classList.remove("active")
          document.getElementById('weekly').classList.remove("active")
          document.getElementById('monthly').classList.add("active")
        }
      })
    })
  }  
  toggleColor()






  
  function showData(){
    let displayWeekly = data.map(function (item) {
      return `<div id="data-items" class="work">
      <div class="header" 
        style="background-color: 
        ${(item["title"] === "Work")? 'hsl(15, 100%, 70%)' : 
        (item["title"] === "Play")? 'hsl(195, 74%, 62%)' : 
        (item["title"] === "Study")? 'hsl(348, 100%, 68%)' : 
        (item["title"] === "Exercise")? 'hsl(145, 58%, 55%)':
        (item["title"] === "Social")? 'hsl(264, 64%, 52%)':
        (item["title"] === "Self Care")? 'hsl(43, 84%, 65%)': 
         ''}; font-size: 40px;" >
        <img src=${item.img} alt="">
      </div>
      <div class="small-header">
        <p>${item["title"]}</p>
        <div class="menu-icon">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
     <div class="hour-box">
      <h1 class="hour" id="hour">${item["timeframes"]["weekly"]["current"]}hrs</h1>
      <div class="bottom">
        <p>last week</p>
        <p class="last-hour" id="last-hour">${item["timeframes"]["weekly"]["previous"]}hrs</p>
      </div>
     </div> 
    </div>`
    
    
    });
    displayWeekly = displayWeekly.join("");
    dashBoard.innerHTML = displayWeekly;

    data.map(function(item) {
      console.log(item["title"]);
      if(item["title" === "Work"]){
          document.getElementsByClassName('.header').style.display = 'none';
      }
    })
  }

  function showDailyData(){
    let displayDaily = data.map(function (item) {
      return `<div id="data-items" class="work">
      <div class="header" style="background-color: 
      ${(item["title"] === "Work")? 'hsl(15, 100%, 70%)' : 
      (item["title"] === "Play")? 'hsl(195, 74%, 62%)' : 
      (item["title"] === "Study")? 'hsl(348, 100%, 68%)' : 
      (item["title"] === "Exercise")? 'hsl(145, 58%, 55%)':
      (item["title"] === "Social")? 'hsl(264, 64%, 52%)':
      (item["title"] === "Self Care")? 'hsl(43, 84%, 65%)': 
       ''}; font-size: 40px;">
        <img src=${item.img} alt="">
      </div>
      <div class="small-header">
        <p>${item["title"]}</p>
        <div class="menu-icon">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
     <div class="hour-box">
      <h1 class="hour" id="hour">${item["timeframes"]["daily"]["current"]}hrs</h1>
      <div class="bottom">
        <p>last week</p>
        <p class="last-hour" id="last-hour">${item["timeframes"]["daily"]["previous"]}hrs</p>
      </div>
     </div> 
    </div>`
    });
    displayDaily = displayDaily.join("");
    dashBoard.innerHTML = displayDaily;
  }
  function showMonthlyData(){
    let displayMonthly = data.map(function (item) {
      return `<div id="data-items" class="work">
      <div class="header" style="background-color: 
      ${(item["title"] === "Work")? 'hsl(15, 100%, 70%)' : 
      (item["title"] === "Play")? 'hsl(195, 74%, 62%)' : 
      (item["title"] === "Study")? 'hsl(348, 100%, 68%)' : 
      (item["title"] === "Exercise")? 'hsl(145, 58%, 55%)':
      (item["title"] === "Social")? 'hsl(264, 64%, 52%)':
      (item["title"] === "Self Care")? 'hsl(43, 84%, 65%)': 
       ''}; font-size: 40px;">
        <img src=${item.img} alt="">
      </div>
      <div class="small-header">
        <p>${item["title"]}</p>
        <div class="menu-icon">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
     <div class="hour-box">
      <h1 class="hour" id="hour">${item["timeframes"]["monthly"]["current"]}hrs</h1>
      <div class="bottom">
        <p>last week</p>
        <p class="last-hour" id="last-hour">${item["timeframes"]["monthly"]["previous"]}hrs</p>
      </div>
     </div> 
    </div>`
    });
    displayMonthly = displayMonthly.join("");
    dashBoard.innerHTML = displayMonthly;
  }
