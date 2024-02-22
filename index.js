//מאזין לDIV של החיות באת לחיצה מבצע מעבר
visitor = localStorage.getItem("selectedVisitor");
if (visitor === "" || visitor === undefined){
    alert("You need to be logged in first!!");
}
else {
    const zoo = document.getElementById(`zooDiv`);
    zoo.addEventListener('click', () => {
        window.location.href = './zoo.html';
    });
}

const login_ = document.getElementById(`loginDiv`);
login_.addEventListener('click', () => {
    window.location.href = './login.html';
});