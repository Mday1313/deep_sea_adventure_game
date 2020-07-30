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
    let timerId = setInterval(startGame, 20);

    function control(e) {
        if(e.keyCode === 32) {
            jump()
        }
    }
    function jump() {
        if (turtleBottom < 530 ){
            turtleBottom += 50
        }
        
        turtle.style.bottom = turtleBottom + 'px'
        console.log(turtleBottom)
    }

    function generateObstracle() {
        let obstacleLeft = 500
        let randomHeight = Math.random() * 60
        let obstacleBottom = randomHeight
        const obstacle = document.createElement('div')
        obstacle.classList.add('obstacle')
        gameDisplay.appendChild(obstacle)
        obstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'

        function moveObstacle() {
            obstacleLeft -= 2
            obstacle.style.left = obstacleLeft + 'px'

            if ( obstacleLeft === -60 ){
                clearInterval(timerId)
                gameDisplay.removeChild(obstacle)
            }
        }
        let timerId = setInterval(moveObstacle, 20)
        setTimeout(generateObstracle, 3000)
    }
    generateObstracle()

    document.addEventListener('keyup', control)
 
})
