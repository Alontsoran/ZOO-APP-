function renderAnimal(animal) {
  //הציגו את החיה שאליה עברתם מעמוד גן החיות ששמורה בלוקל סטורג'
  // רנדרו את פרטי החיה לתוך האלמנטים המתאימים בהתאם לשדה הספציפי
  
      // עדכון כל האלמנטים ב-HTML עם המידע המתאים
  document.getElementById('name').textContent = animal.name;
  document.getElementById('weight').textContent = animal.weight + ' kg';
  document.getElementById('height').textContent = animal.height + ' cm';
  document.getElementById('color').textContent = animal.color;
  document.getElementById('habitat').textContent = animal.habitat;
  document.getElementById('isPredator').textContent = animal.isPredator ? 'Predator' : 'Herbivore';
  document.getElementById('image').innerHTML = `<img src="${animal.photo}" alt="${animal.name}" />`;
}

function renderRelatedAnimals() {
  // ממשו את הלוגיקה שמרנדרת כרטיסיות של החיות ששדה ההאביטט שלהם זהה לחיה שמוצגת
  // רנדרו אותן לתוך הדיב שמיועד להן עם האיידי related-animals
  // ממשו את אותה לוגיקה של כרטיסיית חיה כמו בכרטיסיות בעמוד zoo.html
  const AnimoalName = JSON.parse(localStorage.getItem("TheChosenAnimal"));
  const animal = animals.find((anumal) => anumal.name === AnimoalName);
  return animal;
}

function feedAnimal(animal , visitor) {
  // ממשו את הלוגיקה של האכלת חיה
  // במידה ואין מספיק מטבעות, טפלו בהתאם להנחיות במטלה
  if (parseInt(visitor.coins) >= 2){
    visitor.coins-=2;
    console.log(visitor.coins);

    localStorage.setItem('visitors', JSON.stringify(visitors));
    window.location.reload();
  }
  else {
    if (animal.isPredator) {
      visitorGotEaten(visitor);
    }
    else {
      animalEscaped(animal);
    }
  }
}

function visitorGotEaten(visitor) {
  // ממשו את הלוגיקה של חיה שטורפת אורח
  visitor.alive =0;
  localStorage.setItem('visitors', JSON.stringify(visitors));

  // כאן צריך להכניס דילוג
  // כאן צריך לחזור לדף ההתחברות

}

function animalEscaped(animal) {
  //ממשו את הלוגיקה של חיה שבורחת מגן החיות
  animal.in_cage = 0;
  localStorage.setItem('animals', JSON.stringify(animals));

}


document.addEventListener("DOMContentLoaded", (event) => {
  // מביא נתונים ומרנדר את הדף
  const animal = renderRelatedAnimals();
  renderAnimal(animal);
  
  // מביא את הנתונים של המשתמש המחובר
  const visitor = getVisitor();

  // מוסיף האזנה לאירוע לחיצה על הכפתור
  const feedButton = document.getElementById('feed-animal');
  feedButton.addEventListener('click', function() {
    feedAnimal(animal, visitor);
  });
});

// מביא את המשתמש
function getVisitor() {
  const visitorName = localStorage.getItem("selectedVisitor");
  const visitor = visitors.find((visitor) => visitor.name === visitorName)// אם רוצים לחפור אפשר להוציא את זה לפונציה נפרדת ולמנוע שכפול קוד
  return visitor;
}

let visitors = JSON.parse(localStorage.getItem("visitors")) || [];
let animals = JSON.parse(localStorage.getItem("animals")) || []; 
