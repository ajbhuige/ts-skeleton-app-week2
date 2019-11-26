class Game {
    // Global attributes for canvas
    // Readonly attributes are read-only. They can only be initialized in the constructor
    private readonly canvas: HTMLCanvasElement; // 
    private readonly ctx: CanvasRenderingContext2D; // 

    // Some global player attributes
    private readonly player: string;
    private readonly score: number;
    private readonly lives: number;
    private readonly highscores: Array<any>; // TODO: do not use 'any': write an interface!

    public constructor(canvasId: HTMLCanvasElement) {
        // Construct all of the canvas
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        // Set the context of the canvas
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
        ]

        // All screens: uncomment to activate
        // this.startScreen();
        // this.levelScreen();
        this.titleScreen();

    }

    //-------- Splash screen methods ------------------------------------
    /**
     * Method to initialize the splash screen
     */
    public startScreen() {
        // 1. Add "Asteroids" text
        this.writeTextToCanvas("Asteroids", 120, this.canvas.width/2, 150)
        
        this.writeIntroText();

        const buttonImage = "./assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png";      // image for start button
        this.loadImage(buttonImage, this.writeStartButton);                                 // loading image for start button

        const asteroidImage = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png"  // image for asteroids
        this.loadImage(asteroidImage, this.drawAsteroid);                                           // loading image for asteroid
    }

    // public startScreen() {
    //     // 1. add 'Asteroids' text
    //     this.writeTextToCanvas("Asteroids", 140, this.canvas.width / 2, 150);

    //     // 2. add 'Press to play' text
    //     this.writeTextToCanvas("PRESS PLAY TO START", 40, this.canvas.width / 2, this.canvas.height / 2 - 20);

    //     // 3. add button with 'start' text
    //     const asteroidFileName = "./assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png";
    //     this.loadImage(asteroidFileName, this.writeStartButtonToStartScreen);
    //     // 4. add Asteroid image
    //     const startButtonFileName = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png";
    //     this.loadImage(startButtonFileName, this.writeAsteroidImageToStartScreen);
    // }

    //2. Method to add 'Press to play' text
    public writeIntroText() {
        this.ctx.font = "40px Minecraft";                           // size and font
        this.ctx.fillStyle = "white";                               // colour of text, otherwise it won't show up
        let text = this.ctx.measureText("PRESS PLAY TO START");     // to center the tex
        this.ctx.fillText(
            "PRESS PLAY TO START",
            this.canvas.width/2 -
            text.width/2, 400);
    }

    // 3. Method to add start button
    public writeStartButton(img: HTMLImageElement) {
        let x: number = this.canvas.width/2 - img.width/2;          // define position to center image and text
        let y: number = 700;

        this.ctx.drawImage(img, x, y);                              // place the image

        this.ctx.font = '20px Minecraft';                           // size and font
        this.ctx.fillStyle = 'black';                               // colour of text, otherwise it won't show up
        const text = this.ctx.measureText('PLAY');

        x += img.width/2 - text.width/2;
        y += img.height/3 * 2;

        this.ctx.fillText("PLAY", x, y);  
    }

    //4. add Asteroid image
    private drawAsteroid(img: HTMLImageElement) {
        let image = this.ctx.measureText("img");
        this.ctx.drawImage(img, this.canvas.width/2 - img.width/2, 500);  // to center the image
    }

    
    //-------- level screen methods -------------------------------------
    /**
     * Method to initialize the level screen
     */
    public levelScreen() {
    this.drawPlayerLives();
    this.drawCurrentScore();
    this.drawRandomAsteroids();
    this.drawPlayerSpaceship();
    }
    
    //1. Method to add lives
    private drawPlayerLives() {
        const livesImage = "./assets/images/SpaceShooterRedux/PNG/UI/playerLife3_blue.png"      // image for lives
        this.loadImage(livesImage, this.writeLifeImage1ToLevelScreen);                          
        this.loadImage(livesImage, this.writeLifeImage2ToLevelScreen);
        this.loadImage(livesImage, this.writeLifeImage3ToLevelScreen);
    }

    // Methods to actually write life images to level screen
    private writeLifeImage1ToLevelScreen(img: HTMLImageElement){
        const x = 50;
        const y = 50;
        this.ctx.drawImage(img, x, y);
        
    }

    private writeLifeImage2ToLevelScreen(img: HTMLImageElement){
        const x = 90;
        const y = 50;
        this.ctx.drawImage(img, x, y);
        
    }

    private writeLifeImage3ToLevelScreen(img: HTMLImageElement){
        const x = 130;
        const y = 50;
        this.ctx.drawImage(img, x, y);
        
    }

    //2. Method to draw current score
    private drawCurrentScore() {
        // placing of the text
        const x = this.canvas.width - 200;
        const y = 50;
        
        this.ctx.font = '20px Minecraft';                           // size and font
        this.ctx.fillStyle = 'white';                               // colour of text, otherwise it won't show up
        this.ctx.fillText(`SCORE = ${this.score}`, x, y);           // determines the actual text
    }

    //3. Method to draw random asteroids
    private drawRandomAsteroids() {
        // All asteroid images
        const asteroids = 
        [
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
        ]

        const maxAsteroidsOnScreen: number = 10;    // sets the maximum of asteroids on screen

        // loop to randomly show asteroids
        for (let i = 0; i < maxAsteroidsOnScreen; i++) {
            const index: string = asteroids[this.randomNumber(0, asteroids.length)];
            this.loadImage(index, this.actuallyDrawRandomAsteroids); 
        }
    }

    // method to actually show the image of the asteroids
    private actuallyDrawRandomAsteroids(img: HTMLImageElement){
        const x = this.randomNumber(0, this.canvas.width - img.width);
        const y = this.randomNumber(0, this.canvas.height - img.height);
        this.ctx.drawImage(img, x, y);
    }

    //4. draw player spaceship
    private drawPlayerSpaceship() {
        const spaceshipImage = "./assets/images/SpaceShooterRedux/PNG/playerShip1_blue.png"
        this.loadImage(spaceshipImage, this.actuallyDrawPlayerSpaceship);
    }
    
    private actuallyDrawPlayerSpaceship(img: HTMLImageElement){
        const x = this.canvas.width/2 - img.width/2;          // define position to center image and text
        const y = this.canvas.height/2 - img.height/2;
        this.ctx.drawImage(img, x, y);
    }

    //-------- Title screen methods -------------------------------------

    /**
    * Method to initialize the title screen
    */
    public titleScreen() {
        this.drawEndScore();
        this.drawHighscoresTitle();
        this.drawHighScores();
        }

    //1. draw your score
    private drawEndScore() {
        const x = this.canvas.width/2 - 270;
        const y = 300;

        this.ctx.font = "60px Minecraft";
        this.ctx.fillStyle = "white";
 
        this.ctx.fillText(`FINAL SCORE = ${this.score}`, x, y);           
    }

    private drawHighscoresTitle() {
        const text = this.ctx.measureText("HIGHSCORES");
        const x = this.canvas.width/2 - 90;
        const y = 400;

        this.ctx.font = "30px Minecraft";
        this.ctx.fillStyle = "white";
 
        this.ctx.fillText("HIGHSCORES", x, y);           
    }

    private drawHighScores() {
        this.ctx.font = "20px Minecraft";
        this.ctx.fillStyle = "white";

        this.ctx.fillText("1: Loek - 40000 ", 700, 500);
        this.ctx.fillText("2: Daan - 34000 ", 700, 550);           
        this.ctx.fillText("3: Rimmert - 200 ", 700, 600);                      

    }
    
    //-------Generic canvas methods ----------------------------------
    /**
     * Writes text to the canvas
     * @param {string} text - Text to write
     * @param {number} fontSize - Font size in pixels
     * @param {number} xCoordinate - Horizontal coordinate in pixels
     * @param {number} yCoordinate - Vertical coordinate in pixels
     * @param {string} alignment - Where to align the text
     * @param {string} colour - The color of the text
     */
    public writeTextToCanvas(
        text: string,
        fontSize: number = 20,
        xCoordinate: number,
        yCoordinate: number,
        alignment: CanvasTextAlign = "center",
        colour: string = "white",
    ) {
        this.ctx.font = `${fontSize}px Minecraft`;
        this.ctx.fillStyle = colour;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    /**
     * Loads an image file into the DOM and writes it to the canvas. After the
     * image is loaded and ready to be drawn to the canvas, the specified
     * callback method will be invoked. the method will be called with the
     * loaded imageElement as a parameter.
     *
     * The callback method MUST be a method of this class with a header like:
     *
     *   private yourMethodNameHere(img: HTMLImageElement)
     *
     * In the body of that callback you can draw the image to the canvas
     * context like:
     *
     *   this.ctx.drawImage(img, someX, someY);
     *
     * This is the simplest way to draw images, because the browser must and
     * shall wait until the image is completely loaded into memory.
     *
     * @param {string} source - the name of the image file
     * @param {Function} callback - method that is invoked after the image is loaded
     */
    private loadImage(source: string, callback: Function) {
        let imageElement = new Image();

        // We must wait until the image file is loaded into the element
        // We add an event listener
        // We'll be using an arrow function for this, just because we must.
        imageElement.addEventListener("load", () => {
            callback.apply(this, [imageElement]);
        });

        // Now, set the src to start loading the image
        imageElement.src = source;
    }

    /**
    * Renders a random number between min and max
    * @param {number} min - minimal time
    * @param {number} max - maximal time
    */
    public randomNumber(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }
}

//this will get an HTML element. I cast this element in de appropriate type using <>
let init = function () {
    const Asteroids = new Game(<HTMLCanvasElement>document.getElementById('canvas'));
};

// Add EventListener to load the game whenever the browser is ready
window.addEventListener('load', init);
