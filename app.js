document.addEventListener('DOMContentLoaded', () => {
    const turtle = document.querySelector('.turtleContainer');

    const gameDisplay = document.querySelector('.game-container');
    const deep = document.querySelector('.deep');

    let turtleLeft = 220
    let turtleBottom = 100
    let gravity = 2
    let isGameOver = false
    let gap = 480

    function startGame() {
       turtleBottom -= gravity;
        turtle.style.bottom = turtleBottom + "px";
        turtle.style.left = turtleLeft + "px";


    }
    let gameTimerId = setInterval(startGame, 20);

    function control(e) {
        if(e.keyCode === 32) {
            jump()
        }
    }
    function jump() {
        if (turtleBottom < 500 ){
            turtleBottom += 50
        }
        
        turtle.style.bottom = turtleBottom + 'px'
        console.log(turtleBottom)
    }
    document.addEventListener('keyup', control)

    function generateObstacle() {
        let obstacleLeft = 500
        let randomHeight = Math.random() * 60
        let obstacleBottom = randomHeight
        const obstacle = document.createElement('div')
        const topObstacle = document.createElement('div')
        if (!isGameOver) {
            obstacle.classList.add('obstacle')
            topObstacle.classList.add('topObstacle')
        }
        gameDisplay.appendChild(obstacle)
        gameDisplay.appendChild(topObstacle)
        obstacle.style.left = obstacleLeft + 'px'
        topObstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
        topObstacle.style.bottom = obstacleBottom + gap + 'px'

        function moveObstacle() {
            obstacleLeft -= 2
            obstacle.style.left = obstacleLeft + 'px'
            topObstacle.style.left = obstacleLeft + 'px'

            if ( obstacleLeft === -60 ){
                clearInterval(timerId)
                gameDisplay.removeChild(obstacle)
                gameDisplay.removeChild(topObstacle)
            }
            if ( 
                obstacleLeft > 200 && obstacleLeft < 280 && turtleLeft === 220 &&           
                (turtleBottom < obstacleBottom + 153 || turtleBottom > obstacleBottom + gap -200 )|| 
                turtleBottom === 0 
                ){
                gameOver()
                clearInterval(timerId)
            }
        }
        let timerId = setInterval(moveObstacle, 20)
        if(!isGameOver) setTimeout(generateObstacle, 3000)
    }
    generateObstacle()

    function gameOver() {
        clearInterval(gameTimerId)
        console.log('game over')
        isGameOver = true;
        document.removeEventListener('keyup',control)
        

    }
    document.addEventListener('keyup', control)
 
})
