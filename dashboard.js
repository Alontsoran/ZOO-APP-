function getanimals_forvisitor() {
  visitor = findvisitor(getselectdvisitor());
  visiitedanimals = visitor.Documentation;
  console.log(visiitedanimals);
  return visiitedanimals;
}

function showVisitedAnimals() {
  VisitedAnimals_ = getanimals_forvisitor();
  animalarray = [];
  visited_Animals = [];
  visiitedanimals.forEach((element) => {
    animalarray.push(element.name);
    visited_Animals.push(element.visits);
  });
  grphcreator("visited animals", animalarray, visited_Animals, "blue");
  //ממשו את הלוגיקה שמציגה את החיות שהאורח הנוכחי ביקר בהן
}
function showFeededAnimals() {
  VisitedAnimals_ = getanimals_forvisitor();
  animalarray = [];
  feedAnimal_ = [];
  visiitedanimals.forEach((element) => {
    animalarray.push(element.name);
    feedAnimal_.push(element.visits);
    grphcreator("chDonut2", animalarray, feedAnimal_, "blue");
  });
  //ממשו את הלוגיקה שמציגה את החיות שהאורח הנוכחי האכיל אותן
}
function showFavoriteAnimal() {
  //ממשו את הלוגיקה שמציגה את החיה שהאורח ביקר הכי הרבה פעמים אצלה
}
window.addEventListener("DOMContentLoaded", (event) => {
  coins_in_grph();
  showVisitedAnimals();
  showFeededAnimals();
  showFavoriteAnimal();
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
  grphcreator("USercoins", labels, coins, "blue");
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
function grphcreator(HTmlelement, array1, array2, color) {
  const ctx = document.getElementById(HTmlelement).getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: array1,
      datasets: [
        {
          label: "",
          data: array2,
          backgroundColor: [color],
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
