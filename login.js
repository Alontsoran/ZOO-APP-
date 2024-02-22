localStorage.setItem("selectedVisitor", saveName);

function getAliveVisitors(visitors) {
  return visitors.filter((visitor) => visitor.alive === 1);
}
document.getElementById("click");

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
    <div id="cardss" <div id="cardss" class="card"  class="card" name="${visitor.name}+name" style="width:300px; margin: 10px;">
      <img class="card-img-top" src="${visitor.photo}" 
      alt="Picture of ${visitor.name}">
      <div class="card-body">
        <h5 class="card-title">${visitor.name}</h5>
        <p class="card-text">Coins: ${visitor.coins}</p>
        <button onclick="saveName('${visitor.name}')" >Login</button>
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
//functions for the dialog
function saveName(name) {
  if (savedName !== name) {
    dialog(name);
    if (savedName === null) {
      dialog(name);
    }
  }
}
//ערך גלובלי
var savedName = localStorage.getItem("selectedVisitor");
function dialog(saveName) {
  logout = document.getElementById("Logout_from_user"); //כפתור ניתוק
  close_ = document.getElementById("close_dialog"); //כפתור ביטול פעולה
  close_.addEventListener("click", function () {
    //סגירת הדיאלוג
    dialogopner.open = false;
  });
  logout.addEventListener("click", function () {
    //דרישה ושמירה של הערך החדש
    localStorage.setItem("selectedVisitor", saveName);
    savedName = saveName; //דריסת ערך גלובלי
    dialogopner.open = false; // סיום פעולה וסגירה
  });
  let dialogopner = document.getElementById("myDialog");
  if (dialogopner.open == true) {
    const visitorsContainer = (dialogopner.open = false);
  } else {
    dialogopner.open = true;
    searchforelement(savedName); //חיפוש הדיאלוג כדי להחזיר אותו בתוך הדיאלוג
  }
}
function findvisitor(name) {
  const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
  const foundVisitor = visitors.find((visitor) => visitor.name === name);
  return foundVisitor;
}
function searchforelement(name) {
  foundVisitor = findvisitor(name);
  if (foundVisitor) {
    const displayElement = document.getElementById("displayElementId");
    displayElement.innerHTML = template(foundVisitor);
  } else {
    const displayElement = document.getElementById("displayElementId");
    displayElement.innerHTML = "<p>Visitor not found.</p>";
  }
}
function template(foundVisitor) {
  const template = `
      <div name="${foundVisitor.name}+name" style="width:300px; margin: 10px;">
        <img class="card-img-top" src="${foundVisitor.photo}" 
        alt="Picture of ${foundVisitor.name}">
        <div class="card-body">
          <h5 class="card-title">${foundVisitor.name}</h5>
          <p class="card-text">Coins: ${foundVisitor.coins}</p>
        </div>
      </div>
    `;
  return template;
}
