visitor = localStorage.getItem("selectedVisitor");
const zoo = document.getElementById(`zooDiv`);
zoo.addEventListener('click', () => {
    if (visitor === "undefined" || visitor === null || visitor === "" || visitor === undefined) {
        alert("You need to be logged in first!!");
    } else {
        window.location.href = './zoo.html';
    }
});



const login_ = document.getElementById(`loginDiv`);
login_.addEventListener('click', () => {
    window.location.href = './login.html';
});

const dashboard = document.getElementById(`dashboardDiv`);
dashboard.addEventListener('click', () => {
    window.location.href = './dashboard.html';
});