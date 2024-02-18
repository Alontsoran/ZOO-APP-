function loginAsVisitor(visitorName) {
  // תממשו את הלוגיקה של בחירת אורח שנכנס לגן החיות
  // שמרו את האורח שבחרתם, בלוקל סטורג' כך שבכל העמודים נדע מי האורח הנוכחי
}

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
  wrapper.className = "product-card";
  wrapper.innerHTML = template;
  wrapper.addEventListener("click", () => handleProductClick(product));
  return wrapper;
};
