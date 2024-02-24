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
///הסרת השמות של האנשים מהNAV
remove_logout_button();
