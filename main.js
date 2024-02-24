generateDataset();

if (visitor === undefined)
  document.getElementsByClassName("ready").style.display = "none";
function generateDataset() {
  visitor = localStorage.getItem("selectedVisitor");
  if (visitor === "" || visitor === undefined)
    localStorage.setItem("selectedVisitor", " ");


    let animals_visit = [ //יצירת ערך שמתעד את הפעילות של המשתמש, כל משתמש מקבל אחד
    {
      name: "Lion",
      visits: 0,
      feeding: 0,
    },
    {
      name: "Elephant",
      visits: 0,
      feeding: 0,
    },
    {
      name: "Giraffe",
      visits: 0,
      feeding: 0,
    },
    {
      name: "Tiger",
      visits: 0,
      feeding: 0,
    },
    {
      name: "Monkey",
      visits: 0,
      feeding: 0,
    },
    {
      name: "Kangaroo",
      visits: 0,
      feeding: 0,
    },
    {
      name: "Penguin",
      visits: 0,
      feeding: 0,
    },
    {
      name: "Zebra",
      visits: 0,
      feeding: 0,
    },
    {
      name: "Cheetah",
      visits: 0,
      feeding: 0,
    },
  ];
  
  
  let visitors = [
    {
      name: "JohnSmith",
      coins: 50,
      photo: "https://i.ibb.co/7SpTTF5/johnsmith.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "Emily Johnson",
      coins: 50,
      photo: "https://i.ibb.co/cDxD96W/Amanda-Wilson.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "Michael Williams",
      coins: 50,
      photo: "https://i.ibb.co/Y8ZXKRy/Michael-Williams.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "Jessica Brown",
      coins: 50,
      photo:
        "https://i.ibb.co/sVzYhDq/DALL-E-2024-02-18-20-52-56-Create-a-LEGO-figure-profile-picture-of-a-character-named-Jessica-Brown-T.webp", //
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "Christopher Jones",
      coins: 50,
      photo: "https://i.ibb.co/z8f2f04/Christopher-Jones.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "Ashley Davis",
      coins: 50,
      photo: "https://i.ibb.co/z818Lc1/Ashley-Davis.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "Matthew Miller",
      coins: 50,
      photo:
        "https://i.ibb.co/BZVcVYK/DALL-E-2024-02-18-20-52-52-Create-a-LEGO-figure-profile-picture-of-a-character-named-Jessica-Brown-T.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "AmandaWilson",
      coins: 50,
      photo: "https://i.ibb.co/cDxD96W/Amanda-Wilson.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "DavidMoore",
      coins: 50,
      photo: "https://i.ibb.co/HFnzCPn/David-Moore.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "SarahTaylor",
      coins: 50,
      photo: "https://i.ibb.co/3S191GB/Sarah-Taylor.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "JamesAnderson",
      coins: 50,
      photo: "https://i.ibb.co/BtTBbJF/James-Anderson.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "JenniferThomas",
      coins: 50,
      photo: "https://i.ibb.co/dJkLK0T/Jennifer-Thomas.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "Robert Jackson",
      coins: 50,
      photo: "https://i.ibb.co/njHxBrg/Robert-Jackson.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "Elizabeth White",
      coins: 50,
      photo: "https://i.ibb.co/n1m5rJq/Elizabeth-White.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "DanielHarris",
      coins: 50,
      photo: "https://i.ibb.co/XSyGjP4/Daniel-Harris.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "MelissaMartin",
      coins: 50,
      photo: "https://i.ibb.co/Z6XRqbm/Melissa-Martin.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "WilliamThompson",
      coins: 50,
      photo: "https://i.ibb.co/4Rv99VW/William-Thompson.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "LindaGarcia",
      coins: 50,
      photo: "https://i.ibb.co/WfPjM86/Linda-Garcia.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "JosephMartinez",
      coins: 50,
      photo:
        "https://i.ibb.co/CbNXJxY/DALL-E-2024-02-18-20-53-02-Create-a-LEGO-figure-profile-picture-of-a-character-named-Michael-William.webp",
      alive: 1,
      Documentation: animals_visit,
    },
    {
      name: "KarenRobinson",
      coins: 50,
      photo:
        "https://i.ibb.co/ZYB8Vbg/DALL-E-2024-02-18-20-53-05-Create-a-LEGO-figure-profile-picture-of-a-character-named-Emily-Johnson-T.webp",
      alive: 1,
      Documentation: animals_visit,
    },
  ];
  let animals = [ 
    {
      name: "Lion",
      isPredator: true,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
      in_cage: 1,
      image: "https://i.ibb.co/2PV3L7h/Lion.webp",
    },
    {
      name: "Elephant",
      isPredator: false,
      weight: 1200,
      height: 200,
      color: "grey",
      habitat: "land",
      in_cage: 1,
      image: "https://i.ibb.co/MGwqJ1p/Elephant.webp",
    },
    {
      name: "Giraffe",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
      in_cage: 1,
      image: "https://i.ibb.co/GHcvYwT/Giraffe.webp",
    },
    {
      name: "Tiger",
      isPredator: true,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
      in_cage: 1,
      image: "https://i.ibb.co/TvWrNTG/Tiger.webp",
    },
    {
      name: "Monkey",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
      in_cage: 1,
      image: "https://i.ibb.co/L6KWCGV/Monkey.webp",
    },
    {
      name: "Kangaroo",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
      in_cage: 1,
      image: "https://i.ibb.co/tH1Gvzs/Kangaroo.webp",
    },
    {
      name: "Penguin",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "sea",
      in_cage: 1,
      image: "https://i.ibb.co/FhpDFgv/Penguin.webp",
    },
    {
      name: "Zebra",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
      in_cage: 1,
      image: "https://i.ibb.co/TrL7Pn9/Zebra.webp",
    },
    {
      name: "Cheetah",
      isPredator: true,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
      in_cage: 1,
      image: "https://i.ibb.co/DKZYs55/Cheetah.webp",
    },
  ];


  if (localStorage.getItem("visitors")) {
    visitors = JSON.parse(localStorage.getItem("visitors"));
  } else {
    localStorage.setItem("visitors", JSON.stringify(visitors));
  }
  if (localStorage.getItem("animals")) {
    animals = JSON.parse(localStorage.getItem("animals"));
  } else {
    localStorage.setItem("animals", JSON.stringify(animals));
  }

  console.log(visitors);
}

generateDataset();

function logout() {
  //ממשו את הלוגיקה שמתנתקת מאורח מחובר
  // שימו לב לנקות את השדה המתאים בלוקל סטורג'
}
//לקיחת המערך של כל המבקרים
function getvisitorlist() {
  return (
    JSON.parse(localStorage.getItem("visitors")) ||
    [].filter((visitor) => visitor.alive === 1)
  );
}
//אורח נבחר selected
function getselectdvisitor() {
  return localStorage.getItem("selectedVisitor");
}
//פילטור
function getAliveVisitors(visitors) {
  return visitors.filter((visitor) => visitor.alive === 1);
}
//תפריט אפשרויות בNAV
Options = document.getElementById("visitor-select");
visitorsnav();
//יצירת האופציה לבחור מהתפריט
function visitorsnav() {
  const visitors = getvisitorlist();
  Options = document.getElementById("visitor-select");
  visitors.forEach((visitor) => {
    const Option = document.createElement("option");
    Option.textContent = visitor.name;
    Options.add(Option);
  });
}
//המתנה לבחירה אחרת של שחקן
Options.addEventListener("change", function () {
  var selectedOption = this.options[this.selectedIndex];
  localStorage.setItem("selectedVisitor", selectedOption.text);
});
//פונקציות מרכזיות

//עידכון הדמות בNAV
function updateNavbar() {
  const nameinlocal = getselectdvisitor();
  const visitors = getvisitorlist();
  const visitor = findvisitor(nameinlocal);
  const navbar = document.getElementById("visitornav");
  if (navbar && visitor) {
    navbar.innerHTML = template(visitor);
  } else {
    console.error("Navbar element or visitor not found.");

    // שליחת תגובה לקנוסול
  }
}
function findvisitor(name) {
  const visitors = getvisitorlist();
  return visitors.find((visitor) => visitor.name === name);
}
// TEMPLATE TO THE NAVBAR
function template(foundVisitor) {
  return `
      <div class="navbar-login">
        <img class="card-img-top" src="${foundVisitor.photo}" 
        alt="Picture of ${foundVisitor.name}">
        <div class="card-nav">
          <h5 >${foundVisitor.name}</h5>
          <p class="card-text "> <br>Coins: ${foundVisitor.coins}</p>
        </div>
      </div>
    `;
}

updateNavbar(); // Initial navbar update

// THIS FUNCTION CHECK EVERY ! MIL SECOND IF THE DATA CHANGED
let previousValue = getselectdvisitor(); // Initial value
setInterval(function () {
  const currentValue = getselectdvisitor();
  if (previousValue !== currentValue) {
    console.log('Change detected in localStorage for key "selectedVisitor".');
    updateNavbar(); // Update the navbar with the new visitor info
    previousValue = currentValue;
  }
}, 1);

//מעדכן את הכניסות
window.addEventListener('storage', function(event) { // מזהה שינוי בלוקל סטוריג
  if (event.key === 'TheChosenAnimal') {
    const visitorName = localStorage.getItem("selectedVisitor");
    if (!visitorName) { //בודק שיש משתנה מחובר
      alert("You need to be logged-in");
      return;
    }
    visitors = JSON.parse(localStorage.getItem("visitors")); // מוצא את המשתמש המחובר
    const visitor = visitors.find(visitor => visitor.name === visitorName);
    const animal = visitor.Documentation.find(animal => animal.name === event.newValue); //הולך לחיה המתאימה
    animal.visits +=1; // מוסיף ביקור
    localStorage.setItem('visitors', JSON.stringify(visitors)); //שומר שינויים
  }
});
