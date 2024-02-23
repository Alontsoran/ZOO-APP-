function createNewVisitor(event) {
  // ביטול התנהגות דיפולטיבית של שליחת טופס
  // קראו עוד כאן: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  event.preventDefault();
  const validateFormInputs = () => {};

  /**
  צרו אורח חדש כאן 👇
  ניתן לפצל את הלוגיקה למספר בלתי מוגבל של פונקציות.
  כמו שיותר מפוצל וטהור - פונקציות עם מטרה יחידה ושם משמעותי שמסביר מה הפונקציה עושה ומחזירה
  דוגמא:

  

  const visitorExists = (name) => {
    מקבל שם ומחזיר תשובה האם השם האורח קיים
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
document.addEventListener("DOMContentLoaded", function () {
  var iframe = document.getElementById("frame");

  iframe.addEventListener("load", function () {
    try {
      var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      // ניתן לגשת לאלמנטים ב-DOM של הדף המוטען ב-iframe
      var specificElement = iframeDoc.getElementById("select_visitor");
      if (specificElement) {
        // שינוי האלמנט לפי הצורך
        specificElement.style.display = "none";
      }
    } catch (error) {
      console.error("Cannot access iframe content:", error);
    }
  });
});
