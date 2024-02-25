function createNewVisitor(event) {
  // ביטול התנהגות דיפולטיבית של שליחת טופס
  // קראו עוד כאן: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  event.preventDefault();
  var name = document.getElementById("name").value;
  console.log(document.getElementById("name").value);
  document.getElementById("name").value = "";
  
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
  visitors.forEach((visitor) => {
    if (visitor.name === name) {
      return alert("This user is already login please change the Name");
    }
  });
  visitors.push(newvisitor);
  console.log(visitors);
  localStorage.setItem("visitors", JSON.stringify(visitors));

  const validateFormInputs = () => {
    const visitorExists = (name) => {};
  };

  

  
//בדיקה האם האורח כבר קיים 
  const visitorExists = (name) => {
   
  }

  const makeVisitor = (name) => {
    מקבל שם, בודק שאין אותו כבר במערך האורחים ומחזיר אובייקט אורח
  }
  **/
}

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
