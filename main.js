function generateDataset() {
  let visitors = [
    { name: "JohnSmith", coins: 50, photo: "./photos/people/JohnSmith.webp" },
    {
      name: "Emily Johnson",
      coins: 50,
      photo: "./photos/people/EmilyJohnson.webp",
    },
    {
      name: "Michael Williams",
      coins: 50,
      photo: "./photos/people/MichaelWilliams.webp",
    },
    {
      name: "Jessica Brown",
      coins: 50,
      photo: "./photos/people/JessicaBrown.webp",
    },
    {
      name: "Christopher Jones",
      coins: 50,
      photo: "./photos/people/Christopher Jones.webp",
    },
    {
      name: "Ashley Davis",
      coins: 50,
      photo: "./photos/people/AshleyDavis.webp",
    },
    {
      name: "Matthew Miller",
      coins: 50,
      photo: "./photos/people/MatthewMiller.webp",
    },
    {
      name: "AmandaWilson",
      coins: 50,
      photo: "./photos/people/AmandaWilson.png",
    },
    {
      name: "DavidMoore",
      coins: 50,
      photo: "./photos/people/DavidMoore.webp",
    },
    {
      name: "SarahTaylor",
      coins: 50,
      photo: "./photos/people/SarahTaylor.webp",
    },
    {
      name: "JamesAnderson",
      coins: 50,
      photo: "./photos/people/JamesAnderson.webp",
    },
    {
      name: "JenniferThomas",
      coins: 50,
      photo: "./photos/people/JenniferThomas.webp",
    },
    {
      name: "Robert Jackson",
      coins: 50,
      photo: "./photos/people/RobertJackson.webp",
    },
    {
      name: "Elizabeth White",
      coins: 50,
      photo: "./photos/people/ElizabethWhite.webp",
    },
    {
      name: "DanielHarris",
      coins: 50,
      photo: "./photos/people/DanielHarris.webp",
    },
    {
      name: "MelissaMartin",
      coins: 50,
      photo: "./photos/people/MelissaMartin.webp",
    },
    {
      name: "WilliamThompson",
      coins: 50,
      photo: "./photos/people/WilliamThompson.webp",
    },
    {
      name: "LindaGarcia",
      coins: 50,
      photo: "./photos/people/LindaGarcia.webp",
    },
    {
      name: "JosephMartinez",
      coins: 50,
      photo: "./photos/people/JosephMartinez.webp",
    },
    {
      name: "KarenRobinson",
      coins: 50,
      photo: "./photos/people/KarenRobinson.webp",
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
    },
    {
      name: "Elephant",
      isPredator: false,
      weight: 1200,
      height: 200,
      color: "grey",
      habitat: "land",
    },
    {
      name: "Giraffe",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
    },
    {
      name: "Tiger",
      isPredator: true,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
    },
    {
      name: "Monkey",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
    },
    {
      name: "Kangaroo",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
    },
    {
      name: "Penguin",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "sea",
    },
    {
      name: "Zebra",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
    },
    {
      name: "Cheetah",
      isPredator: true,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
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
localStorage.setItem("visitors");

generateDataset();

function logout() {
  //ממשו את הלוגיקה שמתנתקת מאורח מחובר
  // שימו לב לנקות את השדה המתאים בלוקל סטורג'
}
