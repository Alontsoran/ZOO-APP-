//"First set up of selected user"// בוצע תיקון באג
logout_dataset();
document.getElementsByClassName("ready");
//סינון כל החיים
//הצגת כל האנשים בתוך LOGIN
function displayVisitors(visitors) {
  const visitorsContainer =
    document.getElementById("visitorsList") ||
    document.getElementById("searchResults");
  visitorsContainer.innerHTML = ""; //ניקוי מה שהיה
  // הוספת טמפלייטים לתוך הLOGIN
  const visitorsHTML = visitors.map(getvisitorHTMLCard).join("");
  visitorsContainer.innerHTML = visitorsHTML;
}
//הצגת שחקן בתוך כל אדם קיים כפתור LOGIN כonclick
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
  //בתוך ONCLICK יש קריאה לפונקציה של SAVE NAME
  return template;
}
//חיפוש של שדה בתוך התיבת חחיפוש
function search(input) {
  const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
  let filteredUsers = getAliveVisitors(visitors).filter((visitor) =>
    visitor.name.includes(input)
  );
  console.log(filteredUsers);
  if (filteredUsers.length === 0) {
    showclearsearch();
  }
  displayVisitors(filteredUsers);
}
function showclearsearch() {
  display = document.getElementById("search");
  button = '<button id="button_clean" >No result try again</button>';
  display.innerHTML += button;
  document.getElementById("button_clean").addEventListener("click", () => {
    document.getElementById("button_clean").style.display = "none";
    search("");
    location.reload();
  });
}

//תת פונקציה של משיכה מ LOCAL STORAGE
function displayaliveVisitors() {
  const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
  displayVisitors(getAliveVisitors(visitors));
}
// ביצוע החיפוש בפועל
document.addEventListener("DOMContentLoaded", function () {
  displayaliveVisitors(); // Display all alive visitors on load
  document.getElementById("searchBox").addEventListener("input", function () {
    search(this.value);
  });
});
//קריאה לדיאלוג דרך SAVENAME שמוטמע בתוך הTEMPLATE
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
    location.reload();
    updateNavbar();
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
//חיפוש אלמנט לטובת הNAV BAR
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
document.getElementById("Yes_ready").addEventListener("click", function () {
  window.location.href = "./zoo.html";
});
//vהצגת תמונה של שחקן בNAV
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
// פונקציה זו מסירה את הכפתור של LOGOUT
remove_logout_button();
