document.addEventListener("DOMContentLoaded", () => {
    const restartButton = document.getElementById("restart")

    startGame()
    restartButton.addEventListener("click", function(){
        containerResult.innerHTML = "Preparado..."
        startGame()
    })
})

const containerResult = document.getElementById("result")

function startGame(){
    const userInput = document.getElementById("userNumber")

    //temporizador 5segundos
    const resultPromise = new Promise((resolve) => {
        setTimeout(() => {
            let computerNumber = Math.floor(Math.random()*3+1)
            //el input recibe un string
            let userNumber = parseInt(userInput.value)
            //se pasa objeto
            resolve({computerNumber, userNumber})
        },5000)
    })

    //resultado 
    resultPromise.then(({computerNumber, userNumber}) => {
        containerResult.innerHTML = ""
        if(userNumber === ""){
            containerResult.innerHTML = "Introduce un número"
        }else if(userNumber === computerNumber){
            containerResult.innerHTML = `
            <p>User Number: ${userNumber}</p>
            <p>Computer Number: ${computerNumber}</p>
            <div class="green">
            <p>¡Has salvado el mundo!</p>
            </div>`
        }else{
            containerResult.innerHTML = `
            <p>User Number: ${userNumber}</p>
            <p>Computer Number: ${computerNumber}</p>
            <div class="red">
            <p>La bomba ha estallado</p></div>`
        }
    })
}


    
