const app = document.getElementById("app");
console.log(app);
let currentScreen = "landing";

function showScreen(screenName) {
    currentScreen = screenName;
    console.log("Current screen:", currentScreen);
}

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
    showScreen("question");
});
