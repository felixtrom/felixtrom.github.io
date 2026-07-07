const tree = {

    question:"What sounds best tonight?",

    answers:[

        {

            text:"Something Light",

            next:{

                question:"What kind of light?",

                answers:[

                    {
                        text:"Comedy",
                        result:"Game Night"
                    },

                    {
                        text:"Adventure",
                        result:"The Secret Life of Walter Mitty"
                    }

                ]

            }

        },

        {

            text:"Something Romantic",

            next:{

                question:"Happy or emotional?",

                answers:[

                    {

                        text:"Happy",

                        result:"About Time"

                    },

                    {

                        text:"Emotional",

                        result:"Past Lives"

                    }

                ]

            }

        },

        {

            text:"Something Curious",

            result:"Arrival"

        },

        {

            text:"Something Thought Provoking",

            result:"The Prestige"

        }

    ]

};
