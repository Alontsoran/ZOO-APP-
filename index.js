visitor = localStorage.getItem("selectedVisitor");
// מעברי לגן החיות
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

const login = document.getElementById(`loginDiv`);
login.addEventListener("click", () => {
    window.location.href = "./login.html";
});

const deshbord = document.getElementById(`dashboardDiv`);
deshbord.addEventListener("click", () => {
    window.location.href = "./dashboard.html";
});

const signup = document.getElementById(`signupDiv`);
signup.addEventListener("click", () => {
    window.location.href = "./signup.html";
});
///הסרת השמות של האנשים מהNAV
remove_logout_button();
