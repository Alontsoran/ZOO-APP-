function renderAvailableAnimals(animalInZOO) {
  // ממשו את הלוגיקה שמרנדרת את החיות לתוך הדיב עם האיידי animal-cards
  // וודאו שאתם מציגים אך ורק את החיות שעומדות בפילטורים הנוכחיים
  // במידה ואין פילטרים מסומנים, הציגו את כל החיות
  const animals = AdvancedFilter(animalInZOO);
  PresentsAnimals(animals)

  animalInZOO.forEach(animal => {
    const card = document.getElementById(`card-${animal.name}`);
    if (card) {
      card.addEventListener('click', () => {
        visitAnimal(animal.name);
      });
    }
  });
}

//מציגה את החיות
function PresentsAnimals(animals) {
  const animalsContainer =
    document.getElementById("animal-cards");
    animalsContainer.innerHTML = "";
  const animalsHTML = animals.map(getvisitorHTMLCard).join("");
  animalsContainer.innerHTML = animalsHTML;

}

function visitAnimal(animalName) {
  // ממשו את הלוגיקה של מעבר לעמוד חיה עבור החיה הספציפית שנבחרה
  // שמרו בלוקל סטורג' את החיה שנבחרה, כך שבעמוד החיה נוכל לשלוף אותה מהסטורג' ולהציגה בהתאם
  localStorage.setItem('TheChosenAnimal', JSON.stringify(animalName));
  //שומר כניסה
  const visitorName = localStorage.getItem("selectedVisitor");
  const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
  const visitor = visitors.find(visitor => visitor.name === visitorName);
  const animal = visitor.Documentation.find(animal => animal.name === animalName); //הולך לחיה המתאימה
  animal.visits +=1; // מוסיף ביקור
  localStorage.setItem('visitors', JSON.stringify(visitors));
  // עובר דף
  window.location.href = './animal.html';
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
  return (filterKey.isPredator === 'All' || filterValue.isPredator.toString() === filterKey.isPredator) &&
    (filterKey.habitat === 'All' || filterValue.habitat === filterKey.habitat) &&
    (!filterKey.weight || filterValue.weight >= parseInt(filterKey.weight)) &&
    (!filterKey.height || filterValue.height >= parseInt(filterKey.height)) &&
    (filterKey.color === 'All' || filterValue.color === filterKey.color);
}



document.addEventListener("DOMContentLoaded", (event) => {
  // סינון ראשוני
  animalInZOO = BasicFilter();
  // מיון הצבעים
  populateColorOptions(animalInZOO);

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
    //ריענון הדף 
    window.location.reload();
  });
    // שליחה לסינוןוהצגה
    renderAvailableAnimals(animalInZOO);
});

//הורדת החיות שברחו
function BasicFilter(){
  const animals = JSON.parse(localStorage.getItem("animals")) || []; 
  let animalInZOO = animals.filter((animal) => animal.in_cage == 1)
  return animalInZOO
}

//קוד כפול!!! צריך לבדוק האם ניתן להעביר את הפונקציה הזו לmain מפה ומlogin
function getvisitorHTMLCard(animal) {
  const template = `
    <div id="card-${animal.name}" class="cardss" style="width:300px; margin: 10px;">
      <img class="card-img-top" src=${animal.image} alt="תמונת ${animal.name}" style="width:280px; margin: 10px;">
      <div class="card-body">
        <h3 class="card-title">${animal.name}</h3>
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
  
  const filteredAnimals = animals.filter(animal => setFilter(savedFilterSettings, animal));
  
  return filteredAnimals;
}


// פונקציה שמוצאת את כל הצבעים הייחודיים ומוסיפה אותם ל-<select>
function populateColorOptions(animalInZOO) {
  const colorSelect = document.getElementById('color');
  const colors = new Set(); // משתמשים ב-Set כדי להבטיח ייחודיות

  // עוברים על כל החיות ומוסיפים את הצבעים ל-Set
  animalInZOO.forEach(animal => {
    if (animal.color) {
      colors.add(animal.color);
    }
  });

  // יוצרים את האפשרויות ומוסיפים אותם ל-<select>
  colors.forEach(color => {
    const option = document.createElement('option');
    option.value = color;
    option.textContent = color;
    colorSelect.appendChild(option);
  });
}

//מאזין לשדה החיפש
document.getElementById("searchInput").addEventListener("input", (e) => {
  searchAnimals(e.target.value);
});

//מאתר את החיות המתאימות ומציג אותן
function searchAnimals(searchTerm) {
  const filteredAnimals = animalInZOO.filter(animal => 
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  PresentsAnimals(filteredAnimals)
}
