// This function now serves as the single source of truth for filtering alive visitors
function getAliveVisitors(visitors) {
  return visitors.filter((visitor) => visitor.alive === 1);
}

function displayVisitors(visitors) {
  const visitorsContainer =
    document.getElementById("visitorsList") ||
    document.getElementById("searchResults");
  visitorsContainer.innerHTML = ""; //ניקוי מה שהיה
  // פה ממפים את המבקרים
  const visitorsHTML = visitors.map(getvisitorHTMLCard).join("");
  visitorsContainer.innerHTML = visitorsHTML;
}

function getvisitorHTMLCard(visitor) {
  var template = `
    <div id="cardss" class="card" style="width:300px; margin: 10px;">
      <img class="card-img-top" src="${visitor.photo}" 
      alt="Picture of ${visitor.name}">
      <div class="card-body">
        <h5 class="card-title">${visitor.name}</h5>
        <p class="card-text">Coins: ${visitor.coins}</p>
        </div>
    </div>
  `;

  var wrapper = template;
  return template;
}
function search(input) {
  const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
  let filteredUsers = getAliveVisitors(visitors).filter((visitor) =>
    visitor.name.includes(input)
  );
  console.log(filteredUsers);
  displayVisitors(filteredUsers);
}
function displayaliveVisitors() {
  const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
  displayVisitors(getAliveVisitors(visitors));
}

document.addEventListener("DOMContentLoaded", function () {
  displayaliveVisitors(); // Display all alive visitors on load
  document.getElementById("searchBox").addEventListener("input", function () {
    search(this.value);
  });
});
