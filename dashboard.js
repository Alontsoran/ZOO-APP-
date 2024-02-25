function getanimals_forvisitor() {
  visitorr = findvisitor(getselectdvisitor());
  visiitedanimals = visitorr.Documentation;
  console.log(visiitedanimals);
  return JSON.stringify(visiitedanimals);
}

function showVisitedAnimals() {
  VisitedAnimals_ = getanimals_forvisitor();
  animalarray = [];
  visited_Animals = [];
  visiitedanimals.forEach((element) => {
    animalarray.push(element.name);
    visited_Animals.push(element.visits);
    console.log(element.feeding);
  });
  const ctx = document.getElementById("visited animals").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: animalarray,
      datasets: [
        {
          label: "",
          data: visited_Animals,
          backgroundColor: ["blue"],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  //ממשו את הלוגיקה שמציגה את החיות שהאורח הנוכחי ביקר בהן
}
function showFeededAnimals() {
  //ממשו את הלוגיקה שמציגה את החיות שהאורח הנוכחי האכיל אותן
  VisitedAnimals_ = getanimals_forvisitor();

  animalarray = [];
  visited_Animals = [];
  visiitedanimals.forEach((element) => {
    animalarray.push(element.name);
    visited_Animals.push(element.feeding);
  });
  const ctx = document.getElementById("chDonut2").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: animalarray,
      datasets: [
        {
          label: " ",
          data: visited_Animals,
          backgroundColor: ["blue"],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
function showFavoriteAnimal() {
  //ממשו את הלוגיקה שמציגה את החיה שהאורח ביקר הכי הרבה פעמים אצלה
}
window.addEventListener("DOMContentLoaded", (event) => {
  coins_in_grph();
  showVisitedAnimals();
  showFavoriteAnimal();
  showFeededAnimals();
  UpdetTheMostVisitedAnimal();
  // Call other functions as needed
});
function coins_in_grph() {
  var labels = [];
  var coins = [];
  visitors = getvisitorlist();
  visitors.forEach((visitor) => {
    labels.push(visitor.name);
    coins.push(visitor.coins);
  });
  const ctx = document.getElementById("USercoins").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "",
          data: coins,
          backgroundColor: ["blue"],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

//צבי
//פונקציה ששולפת את שמות החיות שבוקרו

let visitors = JSON.parse(localStorage.getItem("visitors"));
let visitorName = localStorage.getItem("selectedVisitor");
function VisitedAnimals() {
  const visitor = visitors.find((visitor) => visitor.name === visitorName);
  const visited_Animals = visitor.Documentation.filer(
    (animal) => animal.visits > 0
  );
  localStorage.setItem("visited_animals", visited_Animals);
  return visited_Animals;
}

//מוצא את החיה שביקרו הכי הרבה
function TheMostVisitedAnimal() {
  const visitor = visitors.find((visitor) => visitor.name === visitorName);
  const MostVisited = visitor.Documentation.reduce((MostVisited , current) => {
    return (MostVisited.visits > current.visits) ? MostVisited : current
  })
  return MostVisited.name;
}

function UpdetTheMostVisitedAnimal() {
  const animolName = TheMostVisitedAnimal();
  const animals = JSON.parse(localStorage.getItem("animals"));
  const animal_ = animals.find(animal => animal.name = animolName);
  document.getElementById('favoriteAnimalImg').innerHTML = `<img src="${animal_.image}" alt="${animal_.name}" style="width:280px; margin: 10px;   max-width: 90%;" />`;
  document.getElementById('favoriteAnimalName').textContent = animal_.name;
}

