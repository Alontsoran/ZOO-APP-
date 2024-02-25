const visitorExists = (name) => {
  const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
  return visitors.some((visitor) => visitor.name === name);
}; //החזרת FALSE נותן לי כאן שהוא קיים

function createNewVisitor(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  console.log(document.getElementById("name").value);
  if (visitorExists(name) === true) {
    console.log(visitorExists(name));
    alert("This user is already exsits");
    document.getElementById("name").value = "";
  } else {
    makeVisitor(name);
  }
}
const makeVisitor = (name) => {
  const newvisitor = {
    name: name,
    alive: 1,
    coins: 50,
    photo:
      "https://i.ibb.co/SPt0G0N/DALL-E-2024-02-25-08-56-03-Create-an-image-of-a-LEGO-character-with-a-question-mark-over-it-similar.webp",
    Documentation: (animals_visit = [
      //יצירת ערך שמתעד את הפעילות של המשתמש, כל משתמש מקבל אחד
      {
        name: "Lion",
        visits: 0,
        feeding: 0,
      },
      {
        name: "Elephant",
        visits: 0,
        feeding: 0,
      },
      {
        name: "Giraffe",
        visits: 0,
        feeding: 0,
      },
      {
        name: "Tiger",
        visits: 0,
        feeding: 0,
      },
      {
        name: "Monkey",
        visits: 0,
        feeding: 0,
      },
      {
        name: "Kangaroo",
        visits: 0,
        feeding: 0,
      },
      {
        name: "Penguin",
        visits: 0,
        feeding: 0,
      },
      {
        name: "Zebra",
        visits: 0,
        feeding: 0,
      },
      {
        name: "Cheetah",
        visits: 0,
        feeding: 0,
      },
    ]),
  };
  let visitors = JSON.parse(localStorage.getItem("visitors")) || [];
  visitors.push(newvisitor);
  console.log(visitors);
  localStorage.setItem("visitors", JSON.stringify(visitors));
  document.getElementById("name").value = "";
};

/**************************************
  מימשתי עבורכם את ההאזנה לאירוע שליחת טופס
  שימו לב כי האיידי של createForm
  זהה לאיידי של הטופס בעמוד signup.html
  אין לשנות אותו */
const createForm = document.getElementById("create-visitor-form");
if (createForm) {
  createForm.addEventListener("submit", createNewVisitor);
}

//הסרת שמות אנשים מNAV
remove_logout_button();
/**
  צרו אורח חדש כאן 👇
  ניתן לפצל את הלוגיקה למספר בלתי מוגבל של פונקציות.
  כמו שיותר מפוצל וטהור - פונקציות עם מטרה יחידה ושם משמעותי שמסביר מה הפונקציה עושה ומחזירה
  דוגמא:

  const validateFormInputs = () => {
    בודק האם האינפוטים קיימים ויש בהם ערך
    מחזיר האם תקין או לא (בוליאני)
  }

  const visitorExists = (name) => {
    מקבל שם ומחזיר תשובה האם השם האורח קיים
  }

  const makeVisitor = (name) => {
    מקבל שם, בודק שאין אותו כבר במערך האורחים ומחזיר אובייקט אורח
  }
  **/
