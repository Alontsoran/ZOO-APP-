//"First set up of selected user"

document.getElementsByClassName("ready");
//סינון כל החיים

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
//card template in the html
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
//search for a player i nthe search box
function search(input) {
  const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
  let filteredUsers = getAliveVisitors(visitors).filter((visitor) =>
    visitor.name.includes(input)
  );
  console.log(filteredUsers);
  displayVisitors(filteredUsers);
}
//display players
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
var savedName = getselectdvisitor();
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
    updateNavbar();
    document.getElementById("ready").style.display = "block";
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
//template dialog
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
document.addEventListener("DOMContentLoaded", function () {
  var iframe = document.getElementById("frame");

  iframe.addEventListener("load", function () {
    try {
      var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      // ניתן לגשת לאלמנטים ב-DOM של הדף המוטען ב-iframe
      var specificElement = iframeDoc.getElementById("select_visitor");
      if (specificElement) {
        // שינוי האלמנט לפי הצורך
        specificElement.style.display = "none";
      }
    } catch (error) {
      console.error("Cannot access iframe content:", error);
    }
  });
});
