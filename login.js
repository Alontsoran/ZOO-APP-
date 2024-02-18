function loginAsVisitor(visitorName) {
  // תממשו את הלוגיקה של בחירת אורח שנכנס לגן החיות
  // שמרו את האורח שבחרתם, בלוקל סטורג' כך שבכל העמודים נדע מי האורח הנוכחי
}

const getProductHTMLCard = (product) => {
  const template = `
      <div class="card" style="min-height: 360px;" >
        <img class="card-img-top" src="${product.thumbImage}" alt="${product.name}"/>
        <div class="card-body">
          <p class="card-text">${product.name}</p>
          <p class="card-text">${product.price}</p>
        </div>
      </div>`;
      
      const wrapper = document.createElement("div");
      wrapper.className = "product-card";
      wrapper.innerHTML = template;
      wrapper.addEventListener("click", () => handleProductClick(product));
      return wrapper;
    };