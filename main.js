generateDataset();

if (visitor === undefined)
  document.getElementsByClassName("ready").style.display = "none";
function generateDataset() {
  visitor = localStorage.getItem("selectedVisitor");
  if (visitor === "" || visitor === undefined)
    localStorage.setItem("selectedVisitor", " ");

  let animals_visit = [
    //יצירת ערך שמתעד את הפעילות של המשתמש, כל משתמש מקבל אחד
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
//clear data
const clearDataBtn = document.getElementById("clear_data");
if (clearDataBtn) {
  clearDataBtn.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
    logout_dataset();
  });
} else {
  console.warn("אזהרה: אלמנט 'clear_data' לא נמצא ב-DOM.");
}

//logout button log out function inside!!!
const logoutBtn = document.getElementById("logout");
if (logoutBtn) {
  logoutBtn.addEventListener("click", function logout() {
    localStorage.setItem("selectedVisitor", undefined);
    logout_dataset();
    saveName = " ";
    location.reload();
  });
} else {
  console.warn("אזהרה: אלמנט 'logout' לא נמצא ב-DOM.");
}

function logout_dataset() {
  if (
    localStorage.getItem("selectedVisitor") == "" ||
    localStorage.getItem("selectedVisitor") == undefined
  ) {
    localStorage.setItem("selectedVisitor", " ");
  }
}
function findvisitor(name) {
  const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
  const foundVisitor = visitors.find((visitor) => visitor.name === name);
  return foundVisitor;
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
document.addEventListener("DOMContentLoaded", function () {
  const Options = document.getElementById("visitor-select");
  if (Options) {
    Options.addEventListener("change", function () {
      const selectedOption = this.options[this.selectedIndex];
      localStorage.setItem("selectedVisitor", selectedOption.text);
      window.top.location.reload();
      location.reload();
    });
  } else {
    console.warn("אזהרה: אלמנט 'visitor-select' לא נמצא ב-DOM בזמן הרצת הקוד.");
  }
});

//יצירת האופציה לבחור מהתפריט
document.addEventListener("DOMContentLoaded", function () {});
function visitorsnav() {
  //פונקציה זו לא עבדה לנו כמו שצריך אז עשינו TRY ו CATCH הפונקציה תקינה לחלוטין יש שגיאה עם ADD למרות שזה עובד וזה מוכר
  try {
    const visitors = getvisitorlist();
    const Options = document.getElementById("visitor-select");

    visitors.forEach((visitor) => {
      const Option = document.createElement("option");
      Option.textContent = visitor.name;
      Option.value = visitor.name;
      Options.add(Option);
    });
  } catch (error) {
    console.warn(error.message); // מדפיס אזהרה לקונסול עם הודעת השגיאה
  }
}

//עידכון הדמות בNAV
function updateNavbar() {
  const nameinlocal = getselectdvisitor();
  const visitors = getvisitorlist();
  const visitor = findvisitor(nameinlocal);
  const navbar = document.getElementById("visitornav");
  if (navbar && visitor) {
    navbar.innerHTML = template(visitor);
  } else {
    console.warn("Navbar element or visitor not found.");
    // קורה לנו כמה פעמים , בעיקר בהפעלה הראשונה לכן זאת אזהרה
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

updateNavbar();
visitorsnav();
previousValue = getselectdvisitor();
currentValue = getselectdvisitor();
if (previousValue !== currentValue) {
  console.log('Change detected in localStorage for key "selectedVisitor".');
  updateNavbar();
  window.top.location.reload();
  previousValue = currentValue;
}

function remove_logout_button() {
  document.addEventListener("DOMContentLoaded", function () {
    var iframe = document.getElementById("frame");

    iframe.addEventListener("load", function () {
      try {
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow.document;
        // ניתן לגשת לאלמנטים ב-DOM של הדף המוטען ב-iframe
        const specificElement = iframeDoc.getElementById("select_visitor");
        const specificElement2 = iframeDoc.getElementById("logout");
        if (specificElement && specificElement2) {
          // שינוי האלמנט לפי הצורך
          specificElement.style.display = "none";
          specificElement2.style.display = "none";
        }
      } catch (error) {
        console.warn("Cannot access iframe content:", error);
      }
    });
  });
}
