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
  document.getElementById('image').innerHTML = `<img src="${animal.image}" alt="${animal.name}" style="width:280px; margin: 10px;   max-width: 90%;" />`;
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

    const animal_ = visitor.Documentation.find(animal_ => animal_.name === animal.name); //הולך לחיה המתאימה
    animal_.feeding +=1; // מוסיף האכלה

    alert("Thanks for feeding me!");

    localStorage.setItem('visitors', JSON.stringify(visitors));
    window.location.reload();
  }
  else {
    if (animal.isPredator) {
      visitorGotEaten(animal ,visitor);
    }
    else {
      animalEscaped(animal);
    }
  }
}

function visitorGotEaten(animal, visitor) {
  // ממשו את הלוגיקה של חיה שטורפת אורח

  //visitor.alive =0; //זה כתיבת קוד בצורה ההגיונית יותר אבל שלא עומדת בדרישות המטלה
  const updatedVisitors = visitors.filter(visitor_ => visitor_.name !== visitor.name);
  localStorage.setItem('visitors', JSON.stringify(updatedVisitors));
  localStorage.setItem("selectedVisitor", "");

  const text =  `
  <div name="${visitor.name}+name" style="width:300px; margin: 10px;">
  <h5 class="card-title">${visitor.name} was devoured by the ${animal.name}</h5>
  <img class="card-img-top" src="./photos/backgrounds/lego_lion_eating_meat.jpeg" alt="Picture of a lego lion eating a visitor" style="width: 290px;">`; 
  // להכניס דילוג
  openDialog(text);
}

function animalEscaped(animal) {
  //ממשו את הלוגיקה של חיה שבורחת מגן החיות

  const text =  `
  <div name="${animal.name}+name" style="width:300px; margin: 10px;">
  <h5 class="card-title">The ${animal.name} escaped from the zoo!!</h5>
  <img class="card-img-top" id="dialogImg" src="./photos/backgrounds/lego_vegetarian_animals_escape.jpeg" alt="Picture of " style="width: 290px;">`; 
  // להכניס דילוג
  openDialog(text);

  //animal.in_cage = 0; //זה כתיבת קוד בצורה ההגיונית יותר אבל שלא עומדת בדרישות המטלה
  const updatedAnimals = animals.filter(animal_ => animal_.name !== animal.name);
  localStorage.setItem('animals', JSON.stringify(updatedAnimals));
  localStorage.setItem("TheChosenAnimal", "");
}

//הרצת דיילוג
function openDialog(text) {
  var dialog = document.getElementById("myDialog");
  dialog.showModal();
  document.getElementById("displayElementId").innerHTML = text;
  document.getElementById("Logout_from_user").addEventListener("click", function() {
    dialog.close();
    window.location.href = '/';
  });
}


document.addEventListener("DOMContentLoaded", (event) => {
  // מביא נתונים ומרנדר את הדף
  const animal = renderRelatedAnimals();
  renderAnimal(animal);
  
  //יוצר את הכרטיסיות למטה
  renderAvailableAnimals(animals)

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
  const visitor = visitors.find((visitor) => visitor.name === visitorName);
  return visitor;
}


let visitors = JSON.parse(localStorage.getItem("visitors")) || [];
let animals = JSON.parse(localStorage.getItem("animals")) || []; 

//יוצר את הבר למטה

/**
 * רלוונטי רק בגירסה השניה של הקוד שבה לא מוחקים את החיות אלה משנים להן את הנתונים
 function BasicFilter(){ //סינון ראשוני
  let animalInZOO = animals.filter((animal) => animal.in_cage == 1)
  return animalInZOO
}
 */

//פה יוצרים את הכרטיבים
function renderAvailableAnimals(animalsInzoo) {
  animals = FilterByLivingEnvironment(animalsInzoo); //מסננן
  const animalsContainer = document.getElementById("animal-cards-animal");
  animalsContainer.innerHTML = "";
  const animalsHTML = animals.map(getvisitorHTMLCard).join("");
  animalsContainer.innerHTML = animalsHTML;

  animals.forEach(animal => {
    const card = document.getElementById(`card-${animal.name}`);
    if (card) {
      card.addEventListener('click', () => {
        visitAnimal(animal.name);
      });
    }
  });
}

//יוצר כרטיסית חיה
function getvisitorHTMLCard(animal) { //יש פה הבדלים בסטייל בין זה לבין הדף של החיות
  const template = `
    <div id="card-${animal.name}" class="cardss" style="width:200px; margin: 10px;">
      <img class="card-img-top" src=${animal.image} alt="תמונת ${animal.name}" style="width:180px; margin: 10px;">
      <div class="card-body">
        <h3 class="card-title">${animal.name}</h3>
        <p class="card-text">diet: ${animal.isPredator ? 'Predator' : 'vegetarian'}</p>
        <p class="card-text">Habitat: ${animal.habitat}</p>
      </div>
    </div>
  `;
  return template;
}

//&&&&&&
//מעביר דף בלחיצה
function visitAnimal(animalName) {
  localStorage.setItem('TheChosenAnimal', JSON.stringify(animalName));
  window.location.href = './animal.html';
}

//סינון לפי סביבת מחיה
function FilterByLivingEnvironment(animalsInzoo) {
  const AnimoalName = JSON.parse(localStorage.getItem("TheChosenAnimal"));
  const animal = animalsInzoo.find((animal) => animal.name === AnimoalName);
  const animals = animalsInzoo.filter((animal_) => animal_.habitat === animal.habitat);
  return animals;
}