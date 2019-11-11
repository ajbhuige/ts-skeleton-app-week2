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
        this.writeAsteroidHeading();
        this.writeIntroText();
        const asteroid_image = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png";
        this.loadImage(asteroid_image, this.drawAsteroid);
        const buttonImage = './assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png';
        this.loadImage(buttonImage, this.writeStartButton);
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
        let text = this.ctx.measureText("Press play to start");
        this.ctx.fillText("Press play to start", this.canvas.width / 2 -
            text.width / 2, 400);
    }
    writeStartButton(img) {
        let x = this.canvas.width / 2 - img.width / 2;
        let y = 700;
        this.ctx.drawImage(img, x, y);
        this.ctx.fillStyle = 'black';
        this.ctx.font = '20px Minecraft';
        const text = this.ctx.measureText('play');
        x += img.width / 2 - text.width / 2;
        y += img.height / 3 * 2;
        this.ctx.fillText('play', x, y);
    }
    drawAsteroid(img) {
        let image = this.ctx.measureText("img");
        this.ctx.drawImage(img, this.canvas.width / 2 - image.width / 2, 500);
    }
    levelScreen() {
    }
    titleScreen() {
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