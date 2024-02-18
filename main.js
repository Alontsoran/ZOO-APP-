function generateDataset() {
  let visitors = [
    { name: "John Smith", coins: 50, photo: "./photos/people/John_Smith.webp" },
    {
      name: "Emily Johnson",
      coins: 50,
      photo: "./photos/people/Emily_Johnson.webp",
    },
    {
      name: "Michael Williams",
      coins: 50,
      photo: "./photos/people/Michael_Williams.webp",
    },
    {
      name: "Jessica Brown",
      coins: 50,
      photo: "./photos/people/Jessica_Brown.webp",
    },
    {
      name: "Christopher Jones",
      coins: 50,
      photo: "./photos/people/Christopher_Jones.webp",
    },
    {
      name: "Ashley Davis",
      coins: 50,
      photo: "./photos/people/Ashley_Davis.webp",
    },
    {
      name: "Matthew Miller",
      coins: 50,
      photo: "./photos/people/Matthew_Miller.webp",
    },
    {
      name: "Amanda Wilson",
      coins: 50,
      photo: "./photos/people/Amanda_Wilson.webp",
    },
    {
      name: "David Moore",
      coins: 50,
      photo: "./photos/people/David_Moore.webp",
    },
    {
      name: "Sarah Taylor",
      coins: 50,
      photo: "./photos/people/Sarah_Taylor.webp",
    },
    {
      name: "James Anderson",
      coins: 50,
      photo: "./photos/people/James_Anderson.webp",
    },
    {
      name: "Jennifer Thomas",
      coins: 50,
      photo: "./photos/people/Jennifer_Thomas.webp",
    },
    {
      name: "Robert Jackson",
      coins: 50,
      photo: "./photos/people/Robert_Jackson.webp",
    },
    {
      name: "Elizabeth White",
      coins: 50,
      photo: "./photos/people/Elizabeth_White.webp",
    },
    {
      name: "Daniel Harris",
      coins: 50,
      photo: "./photos/people/Daniel_Harris.webp",
    },
    {
      name: "Melissa Martin",
      coins: 50,
      photo: "./photos/people/Melissa_Martin.webp",
    },
    {
      name: "William Thompson",
      coins: 50,
      photo: "./photos/people/William_Thompson.webp",
    },
    {
      name: "Linda Garcia",
      coins: 50,
      photo: "./photos/people/Linda_Garcia.webp",
    },
    {
      name: "Joseph Martinez",
      coins: 50,
      photo: "./photos/people/Joseph_Martinez.webp",
    },
    {
      name: "Karen Robinson",
      coins: 50,
      photo: "./photos/people/Karen_Robinson.webp",
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

generateDataset();

function logout() {
  //ממשו את הלוגיקה שמתנתקת מאורח מחובר
  // שימו לב לנקות את השדה המתאים בלוקל סטורג'
}
