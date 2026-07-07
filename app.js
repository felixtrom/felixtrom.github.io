const app = document.getElementById("app");

function render(node){

    if(node.result){

        app.innerHTML=`

        <h2>${node.result}</h2>

        <button onclick="render(tree)">
            Start Again
        </button>

        `;

        return;

    }

    let html=`

        <div class="question">

            ${node.question}

        </div>

        <div class="answers">

    `;

    node.answers.forEach(answer=>{

        html+=`

        <button>

            ${answer.text}

        </button>

        `;

    });

    html+="</div>";

    app.innerHTML=html;

    document
    .querySelectorAll("button")
    .forEach((button,index)=>{

        button.onclick=()=>{

            render(node.answers[index].next || node.answers[index]);

        };

    });

}

render(tree);
