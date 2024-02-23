visitor = localStorage.getItem("selectedVisitor");
const zoo = document.getElementById(`zooDiv`);
zoo.addEventListener("click", () => {
  if (
    visitor === "undefined" ||
    visitor === null ||
    visitor === "" ||
    visitor === undefined
  ) {
    alert("You need to be logged in first!!");
  } else {
    window.location.href = "./zoo.html";
  }
});

const login_ = document.getElementById(`loginDiv`);
login_.addEventListener("click", () => {
  window.location.href = "./login.html";
});

const dashboard = document.getElementById(`dashboardDiv`);
dashboard.addEventListener("click", () => {
  window.location.href = "./dashboard.html";
});

///הסרת השמות של האנשים מהNAV
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
