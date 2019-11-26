class Game {
    constructor(canvasId) {
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.player = "Player one";
        this.score = 400;
        this.lives = 3;
        this.highscores = [
            {
                playerName: 'Loek',
                score: 40000
            },
            {
                playerName: 'Daan',
                score: 34000
            },
            {
                playerName: 'Rimmert',
                score: 200
            }
        ];
        this.titleScreen();
    }
    startScreen() {
        this.writeAsteroidHeading();
        this.writeIntroText();
        const buttonImage = "./assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png";
        this.loadImage(buttonImage, this.writeStartButton);
        const asteroidImage = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png";
        this.loadImage(asteroidImage, this.drawAsteroid);
    }
    writeAsteroidHeading() {
        this.ctx.font = "120px Minecraft";
        this.ctx.fillStyle = "white";
        let text = this.ctx.measureText("Asteroids");
        this.ctx.fillText("Asteroids", this.canvas.width / 2 -
            text.width / 2, 150);
    }
    writeIntroText() {
        this.ctx.font = "40px Minecraft";
        this.ctx.fillStyle = "white";
        let text = this.ctx.measureText("PRESS PLAY TO START");
        this.ctx.fillText("PRESS PLAY TO START", this.canvas.width / 2 -
            text.width / 2, 400);
    }
    writeStartButton(img) {
        let x = this.canvas.width / 2 - img.width / 2;
        let y = 700;
        this.ctx.drawImage(img, x, y);
        this.ctx.font = '20px Minecraft';
        this.ctx.fillStyle = 'black';
        const text = this.ctx.measureText('PLAY');
        x += img.width / 2 - text.width / 2;
        y += img.height / 3 * 2;
        this.ctx.fillText("PLAY", x, y);
    }
    drawAsteroid(img) {
        let image = this.ctx.measureText("img");
        this.ctx.drawImage(img, this.canvas.width / 2 - img.width / 2, 500);
    }
    levelScreen() {
        this.drawPlayerLives();
        this.drawCurrentScore();
        this.drawRandomAsteroids();
        this.drawPlayerSpaceship();
    }
    drawPlayerLives() {
        const livesImage = "./assets/images/SpaceShooterRedux/PNG/UI/playerLife3_blue.png";
        this.loadImage(livesImage, this.writeLifeImage1ToLevelScreen);
        this.loadImage(livesImage, this.writeLifeImage2ToLevelScreen);
        this.loadImage(livesImage, this.writeLifeImage3ToLevelScreen);
    }
    writeLifeImage1ToLevelScreen(img) {
        const x = 50;
        const y = 50;
        this.ctx.drawImage(img, x, y);
    }
    writeLifeImage2ToLevelScreen(img) {
        const x = 90;
        const y = 50;
        this.ctx.drawImage(img, x, y);
    }
    writeLifeImage3ToLevelScreen(img) {
        const x = 130;
        const y = 50;
        this.ctx.drawImage(img, x, y);
    }
    drawCurrentScore() {
        const x = this.canvas.width - 200;
        const y = 50;
        this.ctx.font = '20px Minecraft';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`SCORE = ${this.score}`, x, y);
    }
    drawRandomAsteroids() {
        const asteroids = [
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big2.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big3.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big4.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_med1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_med3.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_small1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_small2.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_tiny1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_tiny2.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorGrey_big1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorGrey_big2.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorGrey_big3.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorGrey_big4.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorGrey_med1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorGrey_med2.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorGrey_small1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorGrey_small2.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorGrey_tiny1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorGrey_tiny2.png",
        ];
        const maxAsteroidsOnScreen = 10;
        for (let i = 0; i < maxAsteroidsOnScreen; i++) {
            const index = asteroids[this.randomNumber(0, asteroids.length)];
            this.loadImage(index, this.actuallyDrawRandomAsteroids);
        }
    }
    actuallyDrawRandomAsteroids(img) {
        const x = this.randomNumber(0, this.canvas.width - img.width);
        const y = this.randomNumber(0, this.canvas.height - img.height);
        this.ctx.drawImage(img, x, y);
    }
    drawPlayerSpaceship() {
        const spaceshipImage = "./assets/images/SpaceShooterRedux/PNG/playerShip1_blue.png";
        this.loadImage(spaceshipImage, this.actuallyDrawPlayerSpaceship);
    }
    actuallyDrawPlayerSpaceship(img) {
        const x = this.canvas.width / 2 - img.width / 2;
        const y = this.canvas.height / 2 - img.height / 2;
        this.ctx.drawImage(img, x, y);
    }
    titleScreen() {
        this.drawEndScore();
        this.drawHighscoresTitle();
        this.drawHighScores();
    }
    drawEndScore() {
        const x = this.canvas.width / 2 - 270;
        const y = 300;
        this.ctx.font = "60px Minecraft";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(`FINAL SCORE = ${this.score}`, x, y);
    }
    drawHighscoresTitle() {
        const text = this.ctx.measureText("HIGHSCORES");
        const x = this.canvas.width / 2 - 90;
        const y = 400;
        this.ctx.font = "30px Minecraft";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("HIGHSCORES", x, y);
    }
    drawHighScores() {
        this.ctx.font = "20px Minecraft";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("1: Loek - 40000 ", 700, 500);
        this.ctx.fillText("2: Daan - 34000 ", 700, 550);
        this.ctx.fillText("3: Rimmert - 200 ", 700, 600);
    }
    loadImage(source, callback) {
        let imageElement = new Image();
        imageElement.addEventListener("load", () => {
            callback.apply(this, [imageElement]);
        });
        imageElement.src = source;
    }
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
let init = function () {
    const Asteroids = new Game(document.getElementById('canvas'));
};
window.addEventListener('load', init);
//# sourceMappingURL=app.js.map