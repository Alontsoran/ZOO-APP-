function showVisitedAnimals() {
  //ממשו את הלוגיקה שמציגה את החיות שהאורח הנוכחי ביקר בהן
}
function showFeededAnimals() {
  //ממשו את הלוגיקה שמציגה את החיות שהאורח הנוכחי האכיל אותן
}
function showFavoriteAnimal() {
  //ממשו את הלוגיקה שמציגה את החיה שהאורח ביקר הכי הרבה פעמים אצלה
}
window.addEventListener("DOMContentLoaded", (event) => {
  coins_in_grph();
  showVisitedAnimals();
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
  const visitor = visitors.find(visitor => visitor.name === visitorName);
  const visited_Animals = visitor.Documentation.filer(animal => animal.visits > 0);
  return visited_Animals;
}
