generateDataset();
if (visitor === undefined)
  document.getElementsByClassName("ready").style.display = "none";
function generateDataset() {
  visitor = localStorage.getItem("selectedVisitor");
  if (visitor === "" || visitor === undefined)
    localStorage.setItem("selectedVisitor", savedName);
  let visitors = [
    {
      name: "JohnSmith",
      coins: 50,
      photo: "https://i.ibb.co/7SpTTF5/johnsmith.webp",
      alive: 1,
    },
    {
      name: "Emily Johnson",
      coins: 50,
      photo: "https://i.ibb.co/cDxD96W/Amanda-Wilson.webp",
      alive: 1,
    },
    {
      name: "Michael Williams",
      coins: 50,
      photo: "https://i.ibb.co/Y8ZXKRy/Michael-Williams.webp",
      alive: 1,
    },
    {
      name: "Jessica Brown",
      coins: 50,
      photo:
        "https://i.ibb.co/sVzYhDq/DALL-E-2024-02-18-20-52-56-Create-a-LEGO-figure-profile-picture-of-a-character-named-Jessica-Brown-T.webp", //
      alive: 1,
    },
    {
      name: "Christopher Jones",
      coins: 50,
      photo: "https://i.ibb.co/z8f2f04/Christopher-Jones.webp",
      alive: 1,
    },
    {
      name: "Ashley Davis",
      coins: 50,
      photo: "https://i.ibb.co/z818Lc1/Ashley-Davis.webp",
      alive: 1,
    },
    {
      name: "Matthew Miller",
      coins: 50,
      photo:
        "https://i.ibb.co/BZVcVYK/DALL-E-2024-02-18-20-52-52-Create-a-LEGO-figure-profile-picture-of-a-character-named-Jessica-Brown-T.webp",
      alive: 1,
    },
    {
      name: "AmandaWilson",
      coins: 50,
      photo: "https://i.ibb.co/cDxD96W/Amanda-Wilson.webp",
      alive: 1,
    },
    {
      name: "DavidMoore",
      coins: 50,
      photo: "https://i.ibb.co/HFnzCPn/David-Moore.webp",
      alive: 1,
    },
    {
      name: "SarahTaylor",
      coins: 50,
      photo: "https://i.ibb.co/3S191GB/Sarah-Taylor.webp",
      alive: 1,
    },
    {
      name: "JamesAnderson",
      coins: 50,
      photo: "https://i.ibb.co/BtTBbJF/James-Anderson.webp",
      alive: 1,
    },
    {
      name: "JenniferThomas",
      coins: 50,
      photo: "https://i.ibb.co/dJkLK0T/Jennifer-Thomas.webp",
      alive: 1,
    },
    {
      name: "Robert Jackson",
      coins: 50,
      photo: "https://i.ibb.co/njHxBrg/Robert-Jackson.webp",
      alive: 1,
    },
    {
      name: "Elizabeth White",
      coins: 50,
      photo: "https://i.ibb.co/n1m5rJq/Elizabeth-White.webp",
      alive: 1,
    },
    {
      name: "DanielHarris",
      coins: 50,
      photo: "https://i.ibb.co/XSyGjP4/Daniel-Harris.webp",
      alive: 1,
    },
    {
      name: "MelissaMartin",
      coins: 50,
      photo: "https://i.ibb.co/Z6XRqbm/Melissa-Martin.webp",
      alive: 1,
    },
    {
      name: "WilliamThompson",
      coins: 50,
      photo: "https://i.ibb.co/4Rv99VW/William-Thompson.webp",
      alive: 1,
    },
    {
      name: "LindaGarcia",
      coins: 50,
      photo: "https://i.ibb.co/WfPjM86/Linda-Garcia.webp",
      alive: 1,
    },
    {
      name: "JosephMartinez",
      coins: 50,
      photo:
        "https://i.ibb.co/CbNXJxY/DALL-E-2024-02-18-20-53-02-Create-a-LEGO-figure-profile-picture-of-a-character-named-Michael-William.webp",
      alive: 1,
    },
    {
      name: "KarenRobinson",
      coins: 50,
      photo:
        "https://i.ibb.co/ZYB8Vbg/DALL-E-2024-02-18-20-53-05-Create-a-LEGO-figure-profile-picture-of-a-character-named-Emily-Johnson-T.webp",
      alive: 1,
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

// Assuming this populates your visitors somehow
document.addEventListener("DOMContentLoaded", function () {
  function updateNavbar() {
    const nameinlocal = localStorage.getItem("selectedVisitor");
    const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
    const visitor = findvisitor(nameinlocal);
    const navbar = document.getElementById("visitornav");
    if (navbar && visitor) {
      navbar.innerHTML = template(visitor);
    } else {
      document.getElementById("ready").style.display = "none";
      console.error("Navbar element or visitor not found.");
    }
  }

  function findvisitor(name) {
    const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
    return visitors.find((visitor) => visitor.name === name);
  }

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

  // Function to check for changes in localStorage every second
  let previousValue = localStorage.getItem("selectedVisitor"); // Initial value
  setInterval(function () {
    const currentValue = localStorage.getItem("selectedVisitor");
    if (previousValue !== currentValue) {
      console.log('Change detected in localStorage for key "selectedVisitor".');
      updateNavbar(); // Update the navbar with the new visitor info
      previousValue = currentValue;
    }
  }, 1);
});
