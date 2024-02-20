function renderAvailableAnimals(animalInZOO) {
  // ממשו את הלוגיקה שמרנדרת את החיות לתוך הדיב עם האיידי animal-cards
  // וודאו שאתם מציגים אך ורק את החיות שעומדות בפילטורים הנוכחיים
  // במידה ואין פילטרים מסומנים, הציגו את כל החיות
  const animals = AdvancedFilter(animalInZOO);
  const animalsContainer =
    document.getElementById("animal-cards");
    animalsContainer.innerHTML = "";
  const animalsHTML = animals.map(getvisitorHTMLCard).join("");
  animalsContainer.innerHTML = animalsHTML;
}

function visitAnimal(animalName) {
  // ממשו את הלוגיקה של מעבר לעמוד חיה עבור החיה הספציפית שנבחרה
  // שמרו בלוקל סטורג' את החיה שנבחרה, כך שבעמוד החיה נוכל לשלוף אותה מהסטורג' ולהציגה בהתאם
}

function setFilter(filterKey, filterValue) {
  /**
   * ממשו את הלוגיקה של השמת פילטר
   * הפילטרים הקיימים הם
   * isPredator: true | false
   * habitat: "land" | "sea"
   * weight: value > user selected weight
   * height: value > user selected height
   * color: dropdown of all available colors
   */
  // ודאו כי אתם שומרים את הפילטרים שהיוזר בחר בלוקל סטורג׳ וטוענים אותם בהתאם
  // רנדרו רק את החיות שעומדות בתנאים של הפילטרים
}



document.addEventListener("DOMContentLoaded", (event) => {
  // סינון ראשוני
  animalInZOO = BasicFilter();

  // שליחה לסינוןוהצגה
  renderAvailableAnimals(animalInZOO);

  // קבלת אלמנט הטופס
  const filterForm = document.getElementById('filrerForm'); 

  // טעינת הגדרות הסינון אם קיימות
  const savedFilterSettings = localStorage.getItem('filterSettings');
  if (savedFilterSettings) {
    const filterValues = JSON.parse(savedFilterSettings);

    // שחזור הערכים לממשק המשתמש
    document.getElementById('isPredator').value = filterValues.isPredator;
    document.getElementById('habitat').value = filterValues.habitat;
    document.getElementById('weight').value = filterValues.weight;
    document.getElementById('height').value = filterValues.height;
    document.getElementById('color').value = filterValues.color;
  }


  // הוספת אירוע לטופס עבור השמירה
  filterForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // קבלת ערכי הסינון מהממשק
    const filterValues = {
      isPredator: document.getElementById('isPredator').value,
      habitat: document.getElementById('habitat').value,
      weight: document.getElementById('weight').value,
      height: document.getElementById('height').value,
      color: document.getElementById('color').value
    };

    // שמירת הגדרות הסינון ל-local storage
    localStorage.setItem('filterSettings', JSON.stringify(filterValues));


  });
});


function BasicFilter(){
  const animals = JSON.parse(localStorage.getItem("animals")) || []; 
  let animalInZOO = animals.filter((animal) => animal.in_cage ===1)
  return animalInZOO
}

//קוד כפול!!! צריך לבדוק האם ניתן להעביר את הפונקציה הזו לmain מפה ומlogin
function getvisitorHTMLCard(animal) {
  const template = `
    <div id="cardss" class="card" style="width:300px; margin: 10px;">
      <img class="card-img-top" src=${animal.photo} alt="תמונת ${animal.name}">
      <div class="card-body">
        <h5 class="card-title">${animal.name}</h5>
        <p class="card-text">diet: ${animal.isPredator ? 'Predator' : 'vegetarian'}</p>
        <p class="card-text">Habitat: ${animal.habitat}</p>
      </div>
    </div>
  `;
  return template;
}


//פונקציה לפילטור
function AdvancedFilter(animals){
  const savedFilterSettings = JSON.parse(localStorage.getItem('filterSettings'));
  if (!savedFilterSettings) {
    return animals; 
  }
  
  const filteredAnimals = animals.filter(animal => {
    return (savedFilterSettings.isPredator === 'all' || animal.isPredator.toString() === savedFilterSettings.isPredator) &&
           (savedFilterSettings.habitat === 'all' || animal.habitat === savedFilterSettings.habitat) &&
           (!savedFilterSettings.weight || animal.weight >= parseFloat(savedFilterSettings.weight)) &&
           (!savedFilterSettings.height || animal.height >= parseFloat(savedFilterSettings.height)) &&
           (savedFilterSettings.color === 'all' || animal.color === savedFilterSettings.color);
  });
  
  return filteredAnimals;
}
