function loginAsVisitor(visitorName) {
  // תממשו את הלוגיקה של בחירת אורח שנכנס לגן החיות
  // שמרו את האורח שבחרתם, בלוקל סטורג' כך שבכל העמודים נדע מי האורח הנוכחי
}
window.addEventListener("load", () => {
  // Render the product cards inside #placeholder
});
let visitorsForView = [...visitors];
const dialog = document.querySelector("#visitor-dialog");

const getvisitorHTMLCard = (visitor) => {
  const template = `
      <div class="card" style="min-height: 360px;" >
        <img class="card-img-top" src="${visitor.thumbImage}" alt="${visitor.name}"/>
        <div class="card-body">
          <p class="card-text">${visitor.name}</p>
          <p class="card-text">${visitor.price}</p>
        </div>
      </div>`;

  const wrapper = document.createElement("div");
  wrapper.className = "visitor-card";
  wrapper.innerHTML = template;
  wrapper.addEventListener("click", () => handlevisitorClick(visitor));
  return wrapper;
};
//נדרש עיבוד לטובת שמירה בJS + USER
const getCloseModalHTMLButton = () => {
  const closeButton = document.createElement("button");
  closeButton.innerText = " Close modal";
  closeButton.addEventListener("click", () => dialog.close());
  return closeButton;
};
const handlevisitorClick = (visitor) => {
  dialog.innerHTML = "";
  dialog.append(getCloseModalHTMLButton(), getProductHTMLCard(product));
  dialog.showModal();
};
