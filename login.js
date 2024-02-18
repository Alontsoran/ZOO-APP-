function loginAsVisitor(visitorName) {
  // תממשו את הלוגיקה של בחירת אורח שנכנס לגן החיות
  // שמרו את האורח שבחרתם, בלוקל סטורג' כך שבכל העמודים נדע מי האורח הנוכחי
}

document.addEventListener("DOMContentLoaded", (event) => {
  displayVisitors();
  generateDataset();
});

function displayVisitors() {
  const visitors = JSON.parse(localStorage.getItem("visitors")) || []; // Read the data from Local Storage, default to empty array if null
  const visitorsContainer = document.getElementById("visitorsList");

  let alive_visitors = visitors.filter((visitor) => visitor.alive === 1);
  if (alive_visitors && visitorsContainer) {
    visitorsContainer.innerHTML = "";
    alive_visitors.forEach((visitor) => {
      visitorsContainer.innerHTML += getvisitorHTMLCard(visitor);
    });
  }
}
function getvisitorHTMLCard(visitor) {
  const template = `
    <div id ="cardss" class="card" style="width:300px; margin: 10px; ">
      <img class="card-img-top" src=${visitor.photo} alt="תמונת ${visitor.name}">
      <div class="card-body">
        <h5 class="card-title">${visitor.name}</h5>
        <p class="card-text">coins: ${visitor.coins}</p>
      </div>
    </div>
  `;
  return template;
}

//נדרש עיבוד לטובת שמירה בJS + USER
const getCloseModalHTMLButton = () => {
  const closeButton = document.createElement("button");
  closeButton.innerText = " Close modal";
  closeButton.addEventListener("click", () => dialog.close());
  return closeButton;
};
const handlevisitorClick = (visitor) => {
  dialog.innerHTML = "";
  dialog.append(getCloseModalHTMLButton(), getProductHTMLCard(visitor));
  dialog.showModal();
};
