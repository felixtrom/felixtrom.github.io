// Grab the empty stage
const app = document.getElementById("app");

// Keep track of where we are
let currentScreen = "landing";

// Draw the landing page
function renderLandingScreen() {

    app.innerHTML = `
        <section class="screen active">
            <div class="card">
                <h1>🎬 Roll Credits 🎬</h1>
                <p class="tagline">
                    Finding the perfect movie shouldn't feel like scrolling forever.
                </p>
                <p class="description">
                    Answer a few questions and discover your next favorite movie.
                </p>
                <button id="start-button">

                    Find My Film

                </button>
            </div>
        </section>
    `;
    document
        .getElementById("start-button")
        .addEventListener("click", () => {
            showQuestion("mood");
        });
}
