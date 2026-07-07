const QUESTIONS = {
    welcome: {
        type: "welcome",
        next: "mood"
    },

    mood: {
        question: "How do you want to feel tonight?",
        options: [
            {
                text: "😊 Something Light",
                next: "light"
            },

            {
                text: "❤️ Something Romantic",
                next: "romantic"
            },

            {
                text: "🧠 Something Thought-Provoking",
                next: "thoughtful"
            },

            {
                text: "🌍 Something Different",
                next: "different"
            }
        ]
    }
}
