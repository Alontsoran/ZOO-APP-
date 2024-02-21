function renderAnimal(animalArray) {
  //הציגו את החיה שאליה עברתם מעמוד גן החיות ששמורה בלוקל סטורג'
  // רנדרו את פרטי החיה לתוך האלמנטים המתאימים בהתאם לשדה הספציפי
  
  if (animalArray.length === 0) {
    return; // כאן צריך לבנות אתרעה ומנגנון שזורק אותך לדף הבית
  }

  const animal = animalArray[0]; // מניחים ששם הוא מפתח יחודי אז יש רק אוביקט אחד במערך

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
  const animals = JSON.parse(localStorage.getItem("animals")) || []; 
  animal = animals.filter((anumal) => anumal.name === AnimoalName)
  renderAnimal(animal);
}

function feedAnimal() {
  // ממשו את הלוגיקה של האכלת חיה
  // במידה ואין מספיק מטבעות, טפלו בהתאם להנחיות במטלה
}

function visitorGotEaten() {
  // ממשו את הלוגיקה של חיה שטורפת אורח
}

function animalEscaped() {
  //ממשו את הלוגיקה של חיה שבורחת מגן החיות
}


document.addEventListener("DOMContentLoaded", (event) => {
      //מביא נתונים ומרנדר את הדף
  renderRelatedAnimals()

      //מביא את הנתונים של המשתמש המחובר
  const visitorName = JSON.parse(localStorage.getItem("selectedVisitor")) || [];
  const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
     // מוסיף האזנה לאירוע לחיצה על הכפתור
  const feedButton = document.getElementById('feed-animal');
  feedButton.addEventListener('click', function() {
      // פעולות שיתבצעו כאשר הכפתור יילחץ

  });

});