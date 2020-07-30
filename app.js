document.addEventListener('DOMContentLoaded', () => {
    const turtle = document.querySelector('.turtle');

    const gameDisplay = document.querySelector('.game-container');
    const deep = document.querySelector('.deep');

    let turtleLeft = 220
    let turtleBottom = 100
    let gravity = 2

    function startGame() {
       turtleBottom -= gravity;
        turtle.style.bottom = turtleBottom + "px";
        turtle.style.left = turtleLeft + "px";


    }
    let timeId = setInterval(startGame, 20);

    function jump() {
        turtleBottom += 50
        turtle.style.bottom = turtleBottom + 'px'
    }

    document.addEventListener('keyup', jump)
 
})
