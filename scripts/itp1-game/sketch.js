/*
    Final game project - Kyle Tyrone Jussab.
    
    Hi! I hope you have fun playing my game project! I have created a full playable level, which I hope feels like a published video game. I encourage you to find all cells in the game!
    
    I didn't find anything really challenging. I do hope there's a better way of organising code though. After a lot of the features I've added, code gets harder and harder to find the more you add to it. If anything was challenging it would be keeping up with where certain code blocks are in the code.
    
    I think some very good skills I've learnt involve level design. Once you can place enemies and platforms you can then bulid a level. Just placing enemies and platforms in random places isn't level design. It's learning how to use those mechanics to make it feel more like a game and less like a demonstration. It's also the little things that can elevate your project, it doesn't require loads of different mechanics or elements to make a game fun. Just adding a flying enemy allowed me to make more complex and challenging sections.
    
    New features added:
    
    - Sprites! The game character and enemies were designed by myself in Adobe Illustrator, all in an attempt to make it look and feel more in line with 2d platformers. 
    The flying enemies change where they look depending on which side the game character is relative to the enemy. Try it, leave a flying enemy alive and walk past it!
    
    - Gravity! I didn't like how the character felt like she would glide downwards. Using a gravity and velocity variable makes it feel like the character is actually falling.
    
    - Tutorials! All games have to tell you the controls, especially if you're allowing the character to do more than just move. 
    Once you've learnt about an ability, the tutorial will not show up again. This is to avoid it becoming a nuisance when you die and restart.
    
    - Ability cells! Although they look like energy cells, these cells grant the user special perks if collected! There are currently 2 ability cells in the game (one of which is hidden! If you still can't find it, scroll to the bottom of the code on how to obtain it).
    
    - Sound! I've decided not to add a background sound that loops. Not only did I think the game sounds better without one, I also ran into some performance issues. I think the overall experience of the game is still great regardless.
    
*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;
var startScreen;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var facingRight;
var showControls;
var showCollectableTut;
var showShootTut;
var showJumpTut;

var trees_x;
var collectables;
var clouds;
var mountains;
var canyons;
var platforms;

var velocity;
var acceleration;
var mass;
var jumped;
var doubleJump;

var game_score;
var abilityCellsCollected;
var flagpole;
var lives;

var enemies;
var fly_enemies;
var projectileObj;
var projectileFired;
var shootPowerUp;
var sPowerUpArray;
var dJumpArray;

var jumpSound;
var dJumpSound;
var collectableSound;
var shootSound;
var openTutSound;
var closeTutSound;
var enemyImpactSound;
var fallSound;

var playCTutSound;
var playSTutSound;
var playJTutSound;
var playLevelSound;

function preload()
{
    //Load all game sprites
    s_Left = loadImage("scripts/itp1-game/Sprites/S_Left.png");
    s_Right = loadImage("scripts/itp1-game/Sprites/S_Right.png");
    w_Left = loadImage("scripts/itp1-game/Sprites/W_Left.png");
    w_Right = loadImage("scripts/itp1-game/Sprites/W_Right.png");
    j_Left = loadImage("scripts/itp1-game/Sprites/J_Left.png");
    j_Right = loadImage("scripts/itp1-game/Sprites/J_Right.png");
    enemy_right = loadImage("scripts/itp1-game/Sprites/Enemy_Right.png");
    enemy_left = loadImage("scripts/itp1-game/Sprites/Enemy_Left.png");
    fly_enemy_right = loadImage("scripts/itp1-game/Sprites/Fly_Enemy_Right.png");
    fly_enemy_left = loadImage("scripts/itp1-game/Sprites/Fly_Enemy_Left.png");
    
    controls_Arrow = loadImage("scripts/itp1-game/Sprites/Arrow_Controls.png");
    controls_Wasd = loadImage("scripts/itp1-game/Sprites/Wasd_Controls.png");
    
    life_Icon = loadImage("scripts/itp1-game/Sprites/Life.png");
    no_Life_Icon = loadImage("scripts/itp1-game/Sprites/No_Life.png");
    
    start_Screen = loadImage("scripts/itp1-game/Sprites/Start_Screen.png");
    game_Over_Screen = loadImage("scripts/itp1-game/Sprites/Game_Over_Screen.png");
    level_Complete_Screen = loadImage("scripts/itp1-game/Sprites/Level_Complete_Screen.png");
    collect_tut = loadImage("scripts/itp1-game/Sprites/Collectable_Screen.png");
    shoot_tut = loadImage("scripts/itp1-game/Sprites/Shoot_Tutorial_Screen.png");
    jump_tut = loadImage("scripts/itp1-game/Sprites/DD_Tutorial_Screen.png");
    
    soundFormats('mp3','wav');
    
    //load all game sounds
    jumpSound = loadSound('scripts/itp1-game/Sounds/jump.wav');
    dJumpSound = loadSound('scripts/itp1-game/Sounds/double_jump.wav');
    collectableSound = loadSound('scripts/itp1-game/Sounds/collectable.wav');
    shootSound = loadSound('scripts/itp1-game/Sounds/shoot_sound.wav');
    openTutSound = loadSound('scripts/itp1-game/Sounds/open_tut.wav');
    closeTutSound = loadSound('scripts/itp1-game/Sounds/close_tut.wav');
    enemyImpactSound = loadSound('scripts/itp1-game/Sounds/enemy_impact.wav');
    fallSound = loadSound('scripts/itp1-game/Sounds/fall_sound.wav');
    
    jumpSound.setVolume(0.1);
    dJumpSound.setVolume(0.1);
    collectableSound.setVolume(0.1);
    shootSound.setVolume(0.1);
    openTutSound.setVolume(0.1);
    closeTutSound.setVolume(0.1);
    enemyImpactSound.setVolume(0.1);
    fallSound.setVolume(0.05);
}


function setup()
{
    let gameCanvas = createCanvas(1024, 576);
    gameCanvas.parent('game-window');

    floorPos_y = height * 3/4;
    
    noStroke();
    
    startScreen = true;
    lives = 3;
    
    projectileFired = false;
    showCollectableTut = 0;
    showShootTut = 0;
    showJumpTut = 0;
    
    playCTutSound = 0;
    playSTutSound = 0;
    playJTutSound = 0;
    playLevelSound = 0;
    
    startGame();
}

function draw()
{
	///// SKY /////
	drawBackground();

	///// GROUND /////
    drawGround();
    
    ///// UI /////
    drawUI();
    
    push();
    translate(scrollPos, 0);
    
    ///// SIGN POST /////
    drawSignPost();

	///// CLOUDS /////
    drawClouds();

	///// MOUNTAINS /////
    drawMountains();

	///// TREES /////
    drawTrees();
    
    /////PLATFORMS/////
    for(var i = 0; i < platforms.length; i++)
        {
            platforms[i].draw();
        }

	///// CANYONS /////
    for(var i = 0; i < canyons.length; i++)
        {
            drawCanyon(canyons[i]);
            checkCanyon(canyons[i]);
        }

	///// COLLECTABLES /////
    for(var i = 0; i < collectables.length; i++)
        {
            if(!collectables[i].isFound)
                {
                    drawCollectable(collectables[i]);
                    checkCollectable(collectables[i]);
                }
        }
    
    for(var i = 0; i < sPowerUpArray.length; i++)
        {
            if(!sPowerUpArray[i].isFound)
                {
                    drawShootCollectable(sPowerUpArray[i]);
                    checkShootCollectable(sPowerUpArray[i]);
                }
        }
    
    for(var i = 0; i < dJumpArray.length; i++)
        {
            if(!dJumpArray[i].isFound)
                {
                    drawJumpCollectable(dJumpArray[i]);
                    checkJumpCollectable(dJumpArray[i]);
                }
        }
    
    ///// FLAGPOLE /////
    renderFlagpole();
    
    checkPlayerDie();
    
    /////ENEMIES/////
    for(var i = 0; i < enemies.length; i++)
        {
            enemies[i].draw();
            
            var isContact = enemies[i].checkContact(gameChar_world_x, gameChar_y);
            
            if(isContact)
                {
                    if(lives > 0)
                        {
                            startGame();
                            break;
                        }
                }
        }
    
    for(var i = 0; i < fly_enemies.length; i++)
        {
            fly_enemies[i].draw();
            
            var isContact = fly_enemies[i].checkContact(gameChar_world_x, gameChar_y);
            
            if(isContact)
                {
                    if(lives > 0)
                        {
                            startGame();
                            break;
                        }
                }
        }
    
    pop();

	///// GAME CHARACTER /////
	drawGameChar();

    //Start Screen
    if(startScreen)
        {
            image(start_Screen, 0, 0, 1024, 576);
            textSize(24);
            text("Game Project (2d Side Scroller)", width/2 - 160, height/2 - 90);
            textSize(18);
            text("Introduction to Programming I", width/2 - 120, height/2 - 25);
            text("University of London / Goldsmiths", width/2 - 135, height/2 + 5);
            text("Kyle Tyrone Jussab", width/2 - 80, height/2 + 35);
            text("Press space to continue.", width/2 - 100, height/2 + 110);
        }
    
    // Game over and game completion
    if(lives < 1)
        {
            image(game_Over_Screen, 0, 0, 1024, 576);
            textSize(61);
            textStyle(BOLD);
            text("GAME OVER", width/2 - 185, 165);
            textStyle(NORMAL);
            textSize(25);
            text("Press space to continue.", width/2 - 135, 475);
            if(keyCode == 32)
                {
                    lives = 3;
                    projectileFired = false
                    showCollectableTut = 0;
                    showShootTut = 0;
                    showJumpTut = 0;
                    playCTutSound = 0;
                    playSTutSound = 0;
                    playJTutSound = 0;
                    playLevelSound = 0;
                    startGame();
                }
        }
    
    if(flagpole.isReached)
        {
            image(level_Complete_Screen, 0, 0, 1024, 576);
            textSize(30);
            text("Level Complete!", width/2 - 107, height/2 - 55);
            textSize(18);
            text("Energy cells collected:  " + game_score + " / " + collectables.length, width/2 - 115, height/2 - 10);
            text("Ability cells collected:  " + abilityCellsCollected + " / 2", width/2 - 105, height/2 + 40);
            text("Press space to continue.", width/2 - 98, height/2 + 85);
            playLevelSound ++;
            if(keyCode == 32)
                {
                    lives = 3;
                    projectileFired = false
                    showCollectableTut = 0;
                    showShootTut = 0;
                    showJumpTut = 0;
                    playCTutSound = 0;
                    playSTutSound = 0;
                    playJTutSound = 0;
                    playLevelSound = 0;
                    startGame();
                }
        }
    
    if(playLevelSound == 1)
        {
            openTutSound.play();
            playLevelSound ++;
        }
    
    //Tutorial screens
    if(game_score == 1 && showCollectableTut == 0 || showCollectableTut ==1)
        {
            image(collect_tut, 0, 0, 1024, 576);
            textSize(24);
            text("You picked up an energy cell!", width/2 - 155, height/2 - 85);
            textSize(18);
            text("Collect as many as you can!", width/2 - 115, height/2 - 35);
            text("Press space to continue.", width/2 - 95, height/2 + 110);
            //collectable icon
            fill(77, 210, 255, 100);
            ellipse(width/2 + 35, height/2 + 50, 20);
            fill(107, 218, 255, 150);
            ellipse(width/2 + 35, height/2 + 50, 20 * 0.75)
            fill(136, 225, 255, 200);
            ellipse(width/2 + 35, height/2 + 50, 20 * 0.5);
            fill(166, 232, 255);
            ellipse(width/2 + 35, height/2 + 50, 20 * 0.25);
            fill(255, 255, 255, 70);
            ellipse(width/2 + 35, height/2 + 50, 20);
            fill(255);
            showCollectableTut = 1;
            playCTutSound ++;
        }
    
    if(playCTutSound == 1)
        {
            openTutSound.play();
            playCTutSound ++;
        }
    
    if(shootPowerUp && showShootTut == 0 || showShootTut == 1)
        {
            image(shoot_tut, 0, 0, 1024, 576);
            textSize(24);
            text("You picked up an ability cell!", width/2 - 155, height/2 - 85);
            textSize(18);
            text("Fire a projectile at your foes with the space bar!", width/2 - 190, height/2 - 35);
            text("Press space to continue.", width/2 - 95, height/2 + 110);
            showShootTut = 1;
            playSTutSound ++;
        }
    
    if(playSTutSound == 1)
        {
            openTutSound.play();
            playSTutSound ++;
        }
    
    if(doubleJump && showJumpTut == 0 || showJumpTut == 1)
        {
            image(jump_tut, 0, 0, 1024, 576);
            textSize(24);
            text("You picked up an ability cell!", width/2 - 150, height/2 - 95);
            textSize(18);
            text("Jump for a second time while in the air!", width/2 - 155, height/2 - 55);
            text("Press space to continue.", width/2 - 95, height/2 + 110);
            showJumpTut = 1;
            playJTutSound ++;
        }
    
    if(playJTutSound == 1)
        {
            openTutSound.play();
            playJTutSound ++;
        }
    
    if(showControls && lives > 0 && !startScreen)
        {
            textSize(12);
            text("W", 425, 155);
            text("A", 399, 192);
            text("D", 455, 192);
    
            image(controls_Wasd, 380, 120, controls_Wasd.width / 4.166, controls_Wasd.height / 4.166);
    
            image(controls_Arrow, 530, 120, controls_Arrow.width / 4.166, controls_Arrow.height / 4.166);
        }
    
    if(gameChar_x > width/2 + 50 || gameChar_x < width/2 - 50)
        {
            showControls = false;
        }
    
	//Logic to make the game character move or the background scroll
	if(isLeft)
	{
		//Positive movement "Right"
        if(gameChar_x > width * 0.4)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		//Negative movement "Left"
        if(gameChar_x < width * 0.6)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5;
		}
	}

	//Logic to make the game character rise and fall
    if(gameChar_y < floorPos_y)
    {
        var isContact = false;
        for(var i = 0; i < platforms.length; i++)
            {
                if(platforms[i].checkContact(gameChar_world_x, gameChar_y))
                    {
                        isContact = true;
                        isFalling = false;
                        jumped = false;
                        break;
                    }
            }
        if(isContact == false)
            {
                //Falling code
                isFalling = true;
                velocity += acceleration;
                gameChar_y += velocity;
            }
    }
    else if(isPlummeting == false)
    {
        //Staying on the ground code
        jumped = false;
        isFalling = false;
        gameChar_y = floorPos_y;
        velocity = 0;
    }

    if(flagpole.isReached == false)
        {
            checkFlagpole();
        }
    
	// Update real position of gameChar for collision detection
	gameChar_world_x = gameChar_x - scrollPos;
    
    //Projectile and enemy collison detection
    for(var i = 0; i < projectileObj.length; i++)
        {
            projectileObj[i].draw();
            projectileObj[i].update();
        }
    
    for(var i = projectileObj.length -1; i >=0; i--)
        {
            for(var j = enemies.length -1; j >= 0; j--)
                {
                    var d = enemies[j].currentX - projectileObj[i].x + scrollPos;
                            
                    var y = enemies[j].y - projectileObj[i].y;
                            
                    if(abs(d) < 5 && abs(y) < 20)
                        {
                            enemyImpactSound.play();
                            enemies.splice(j, 1);
                            projectileObj.splice(i, 1);
                            projectileFired = false;
                            break;
                        }
                    else if(projectileObj[i].distTravelled > 300 || projectileObj[i].distTravelled < -300)
                        {
                            projectileObj.splice(i, 1);
                            projectileFired = false;
                            break; 
                        }
                }
        }
    
    for(var i = projectileObj.length - 1; i >= 0; i--)
        {
            for(var j = fly_enemies.length -1; j >= 0; j--)
                        {
                            var d = fly_enemies[j].x - projectileObj[i].x + scrollPos;
                            
                            var y = fly_enemies[j].currentY - projectileObj[i].y;
                            
                            if(abs(d) < 5 && abs(y) < 20)
                                {
                                    enemyImpactSound.play();
                                    fly_enemies.splice(j, 1);
                                    projectileObj.splice(i, 1);
                                    projectileFired = false;
                                    break;
                                }
                            else if(projectileObj[i].distTravelled > 300 || projectileObj[i].distTravelled < -300)
                            {
                                projectileObj.splice(i, 1);
                                projectileFired = false;
                                break; 
                            }
                        }
        }
}

// ---------------------
// Key control function
// ---------------------

function keyPressed()
{
	if(keyCode == 32 && startScreen)
        {            
            closeTutSound.play();
            startScreen = false;
        }
    
    if(!startScreen)
        {
            //Space to continue when not playing
            if(keyCode == 32 && showCollectableTut == 1)
                {            
                    closeTutSound.play();
                    showCollectableTut = 2;
                }
    
            if(keyCode == 32 && showShootTut == 1)
                {            
                    closeTutSound.play();
                    showShootTut = 2;
                }
    
            if(keyCode == 32 && showJumpTut == 1)
                {            
                    closeTutSound.play();
                    showJumpTut = 2;
                }
    
            //Control all the movement and prevents movement when in a tutorial
            if((showCollectableTut == 0 || showCollectableTut == 2) &&
                (showShootTut == 0 || showShootTut == 2) &&
                (showJumpTut == 0 || showJumpTut == 2))
                {
                    if(keyCode == 32 && projectileFired == false && shootPowerUp)
                        {            
                            shootSound.play();
                            projectileObj.push(new Projectile(gameChar_x, gameChar_y - 30));
                            projectileFired = true;
                        }
    
                    if((key == 'A' || keyCode == 37) && flagpole.isReached == false)
                        {
                            if(lives > 0)
                                {
                                    //Left key
                                    isLeft = true;
                                    facingRight = false;
                                }
                        }

	               if((key == 'D' || keyCode == 39) && flagpole.isReached == false)
                        {
                            if(lives > 0)
                                {
                                    //Right key
                                    isRight = true;
                                    facingRight = true;
                                }
                        }
                    else if((keyCode == 87 || keyCode == 38) && isFalling == false)
                        {
                            jumpSound.play();
                            gameChar_y -= 135;
                        }
                }
            
            if(jumped == false && isFalling && doubleJump && (keyCode == 87 || keyCode == 38))
                {
                    dJumpSound.play();
                    jumped = true;
                    gameChar_y -= 150;
                    velocity = 0;
                }
        }
    
}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		//Left key
        isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		//Right key
        isRight = false;
	}
}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.
function drawGameChar()
{
	///// GAME CHARACTER /////
    if(isFalling || isPlummeting)
	{
        if(facingRight == false)
            {
        //jumping left
        image(j_Left, gameChar_x - 25, gameChar_y - 122, 84, 134);
            }
        else if(facingRight)
            {
        //jumping right
        image(j_Right, gameChar_x - 57, gameChar_y - 122, 84, 134);
            }
    }
	else if(isLeft)
	{
		//walking left
        image(w_Left, gameChar_x - 25, gameChar_y - 128, 84, 134);

	}
	else if(isRight)
	{
        //walking right
        image(w_Right, gameChar_x - 57, gameChar_y - 128, 84, 134);

	}
    else if(isFalling == false)
	{
        if(facingRight)
            {
                //standing right
                image(s_Right, gameChar_x - 45, gameChar_y - 128, 84, 134);
            }
        else
            {
                //standing left
                image(s_Left, gameChar_x - 38, gameChar_y - 128, 84, 134);
            }
	}
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw background
function drawBackground()
{
    background(63, 154, 111);
    fill(0, 66, 64);
    rect(0, 0, width, 144);
    fill(9, 78, 71);
    rect(0, 72, width, 72);
    fill(26, 102, 84);
    rect(0, 144, width, 144);
    fill(17, 90, 77);
    rect(0, 144, width, 72);
    fill(44, 128, 97);
    rect(0, 288, width, 72);
}

// Function to draw ground
function drawGround()
{
	fill(5, 51, 48);
	rect(0, floorPos_y, width, height - floorPos_y);
    fill(28, 135, 97);
    rect(0, floorPos_y, width, 5);
    fill(1, 40, 40);
    rect(0, floorPos_y + 5, width, 25);
}

// Function to draw sign post
function drawSignPost()
{
    fill(0, 43, 43);
    rect(52.5, floorPos_y - 70, 15, 70);
    triangle(52.5, floorPos_y - 70,
             60, floorPos_y - 80,
             67.5, floorPos_y -70);
    fill(9, 78, 71);
    rect(30, floorPos_y - 65, 70, 30);
    triangle(100, floorPos_y - 65,
             120, floorPos_y - 50,
             100, floorPos_y - 35);
    triangle(30,floorPos_y - 65,
             20, floorPos_y - 65,
             30, floorPos_y - 50)
    triangle(30,floorPos_y - 50,
             20, floorPos_y - 35,
             30, floorPos_y - 35)
    fill(17, 90, 77);
    rect(35, floorPos_y - 58, 60, 5);
    rect(35, floorPos_y - 48, 60, 5);
}

// Function to draw cloud objects.
function drawClouds()
{
    for(var i = 0; i < clouds.length; i++)
        {
            fill(83, 174, 131);
            ellipse(clouds[i].x_pos, clouds[i].y_pos, 40);
            ellipse(clouds[i].x_pos + 10, clouds[i].y_pos - 20, 15);
            ellipse(clouds[i].x_pos + 30, clouds[i].y_pos - 30, 40);
            ellipse(clouds[i].x_pos + 60, clouds[i].y_pos - 25, 40);
            ellipse(clouds[i].x_pos + 90, clouds[i].y_pos - 15, 40);
            ellipse(clouds[i].x_pos + 110, clouds[i].y_pos + 10, 50);
            ellipse(clouds[i].x_pos + 80, clouds[i].y_pos + 30, 30);
            ellipse(clouds[i].x_pos + 50, clouds[i].y_pos + 30, 40);
            ellipse(clouds[i].x_pos + 20, clouds[i].y_pos + 20, 50);
            ellipse(clouds[i].x_pos + 50, clouds[i].y_pos, 90, 55);
        }
}

// Function to draw mountains objects.
function drawMountains()
{
    for(var i = 0; i < mountains.length; i++)
        {
            //Semi Circles
            push();
            fill(17, 90, 77);
            translate(mountains[i].x_pos, floorPos_y);
            rotate(PI);
            arc(0, 0, 400, 400, 0, PI);
            arc(- 200, 0, 200, 200, 0, PI);
            pop();
        }
}

// Function to draw trees objects.
function drawTrees()
{
    for(var i = 0; i < trees_x.length; i++)
        {
            //Tree Bark
            fill(0, 43, 43);
            triangle(trees_x[i], floorPos_y + 5,
                     trees_x[i] + 22.5, floorPos_y - 75,
                     trees_x[i] + 45, floorPos_y + 5);

            triangle(trees_x[i] + 22.5 , floorPos_y - 30,
                     trees_x[i] + 22.5, floorPos_y - 75,
                     trees_x[i] - 15, floorPos_y - 105);
    
            triangle(trees_x[i] + 22.5 , floorPos_y - 30,
                     trees_x[i] + 22.5, floorPos_y - 75,
                     trees_x[i] + 60, floorPos_y - 105);
    
            //Tree Leaves
            fill(0, 41, 43);
            ellipse(trees_x[i] - 52.5, floorPos_y - 127.5, 37.5);
            ellipse(trees_x[i] - 67.5, floorPos_y - 150, 37.5);
            ellipse(trees_x[i] - 45, floorPos_y - 180, 45);
            ellipse(trees_x[i] - 30, floorPos_y - 195, 37.5);
            ellipse(trees_x[i] - 15, floorPos_y - 210, 37.5);
            ellipse(trees_x[i] + 15, floorPos_y - 217.5, 45);
            ellipse(trees_x[i] + 45, floorPos_y - 195, 45);
            ellipse(trees_x[i] + 75, floorPos_y - 180, 45);
            ellipse(trees_x[i] + 90, floorPos_y - 150, 45);
            ellipse(trees_x[i] + 15, floorPos_y - 157.5, 135, 90);
    
            fill(3, 53, 52);
            ellipse(trees_x[i] + 30, floorPos_y - 142.5, 45);
            ellipse(trees_x[i] + 30, floorPos_y - 120, 45);
            ellipse(trees_x[i] + 60, floorPos_y - 105, 45);
            ellipse(trees_x[i] + 82.5, floorPos_y - 120, 45);
            ellipse(trees_x[i] + 60, floorPos_y - 142.5, 45);
    
            fill(7, 63, 62);
            ellipse(trees_x[i] - 45, floorPos_y - 97.5, 37.5);
            ellipse(trees_x[i] - 22.5, floorPos_y - 105, 37.5);
            ellipse(trees_x[i], floorPos_y - 112.5, 25);
            ellipse(trees_x[i] + 7.5, floorPos_y - 120, 37.5);
            ellipse(trees_x[i] - 15, floorPos_y - 142.5, 45);
            ellipse(trees_x[i] - 37.5, floorPos_y - 120, 45);
        }
}


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.
function drawCanyon(t_canyon)
{
    fill(63, 154, 111);
    rect(t_canyon.x_pos, floorPos_y, t_canyon.width, 144);
    //Canyon borders
    fill(28, 135, 97);
    rect(t_canyon.x_pos -5, floorPos_y, 5, height);
    rect(t_canyon.x_pos + t_canyon.width, floorPos_y, 5, height);
    fill(1, 40, 40);
    rect(t_canyon.x_pos -30, floorPos_y + 5, 25, height);
    rect(t_canyon.x_pos + t_canyon.width + 5, floorPos_y + 5, 25, height);
}

// Function to check character is over a canyon.
function checkCanyon(t_canyon)
{
    if((gameChar_world_x > t_canyon.x_pos) && (gameChar_world_x < (t_canyon.x_pos + t_canyon.width)) && gameChar_y >= floorPos_y)
    {
        isPlummeting = true;
    }    
    
    if(isPlummeting == true)
    {
        fallSound.play();
        gameChar_y += 15;
    }
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.
function drawCollectable(t_collectable)
{
    fill(77, 210, 255, 100);
    ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size);
    fill(107, 218, 255, 150);
    ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size * 0.75)
    fill(136, 225, 255, 200);
    ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size * 0.5);
    fill(166, 232, 255);
    ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size * 0.25);
    fill(255, 255, 255, 70);
    ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size);
}

// Function to check character has collected an item.
function checkCollectable(t_collectable)
{
    if(dist(gameChar_world_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 30)
    {
        collectableSound.play();
        t_collectable.isFound = true;
        game_score ++;
    }
}

function drawShootCollectable(s_collectable)
{
    fill(102, 51, 153, 100);
    ellipse(s_collectable.x_pos, s_collectable.y_pos, s_collectable.size);
    fill(140, 102, 179, 150);
    ellipse(s_collectable.x_pos, s_collectable.y_pos, s_collectable.size * 0.75)
    fill(179, 153, 204, 200);
    ellipse(s_collectable.x_pos, s_collectable.y_pos, s_collectable.size * 0.5);
    fill(204, 187, 221);
    ellipse(s_collectable.x_pos, s_collectable.y_pos, s_collectable.size * 0.25);
    fill(255, 255, 255, 70);
    ellipse(s_collectable.x_pos, s_collectable.y_pos, s_collectable.size);
}

function checkShootCollectable(s_collectable)
{
    if(dist(gameChar_world_x, gameChar_y, s_collectable.x_pos, s_collectable.y_pos) < 30)
    {
        collectableSound.play();
        s_collectable.isFound = true;
        shootPowerUp = true;
        abilityCellsCollected ++;
    }
}

function drawJumpCollectable(j_collectable)
{
    fill(255, 215, 0, 100);
    ellipse(j_collectable.x_pos, j_collectable.y_pos, j_collectable.size);
    fill(255, 225, 64, 150);
    ellipse(j_collectable.x_pos, j_collectable.y_pos, j_collectable.size * 0.75)
    fill(255, 235, 128, 200);
    ellipse(j_collectable.x_pos, j_collectable.y_pos, j_collectable.size * 0.5);
    fill(255, 245, 191);
    ellipse(j_collectable.x_pos, j_collectable.y_pos, j_collectable.size * 0.25);
    fill(255, 255, 255, 70);
    ellipse(j_collectable.x_pos, j_collectable.y_pos, j_collectable.size);
}

function checkJumpCollectable(j_collectable)
{
    if(dist(gameChar_world_x, gameChar_y, j_collectable.x_pos, j_collectable.y_pos) < 30)
    {
        collectableSound.play();
        j_collectable.isFound = true;
        doubleJump = true;
        abilityCellsCollected ++;
    }
}

function renderFlagpole()
{
    push();
    strokeWeight(10);
    stroke(5, 51, 48);
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y -250);
    fill(44, 128, 97);
    noStroke();
    if(flagpole.isReached)
        {
            triangle(flagpole.x_pos, floorPos_y - 250, flagpole.x_pos, floorPos_y - 200, flagpole.x_pos + 60, floorPos_y - 225)
        }
    else
        {
            triangle(flagpole.x_pos, floorPos_y - 50, flagpole.x_pos, floorPos_y, flagpole.x_pos + 60, floorPos_y - 25)
        }
    pop();
}

function checkFlagpole()
{
    var d = abs(gameChar_world_x - flagpole.x_pos);
    
    if(d < 15)
        {
            flagpole.isReached = true;
        }
}

function checkPlayerDie()
{
    if(gameChar_y > height && lives > 0)
        {
            lives -= 1;
            startGame();
        }
    
}

function startGame()
{
    gameChar_x = width/2;
	gameChar_y = floorPos_y;
    game_score = 0;
    abilityCellsCollected = 0;
    
    //Variables to control gravity
    velocity = 0;
    mass = 15;
    acceleration = mass * 0.02;
    
	//Variable to control the background scrolling
	scrollPos = 0;

	//Variable to store the real position of the gameChar in the game world. Needed for collision detection
	gameChar_world_x = gameChar_x - scrollPos;

	//Boolean variables to control the movement of the game character
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
    facingRight = true;
    showControls = true;
    shootPowerUp = false;
    jumped = false;
    doubleJump = false;

	///Scenery objects
    trees_x = [-2000, -300, 1200, 2500, 3600, 4350, 5500, 7680];
    clouds = [
        {x_pos: -800, y_pos: 125},
        {x_pos: -1600, y_pos: 125},
        {x_pos: -2700, y_pos: 125},
        {x_pos: 200, y_pos: 125}, 
        {x_pos: 1400, y_pos: 125}, 
        {x_pos: 2175, y_pos: 125},
        {x_pos: 3800, y_pos: 125},
        {x_pos: 4900, y_pos: 125},
        {x_pos: 5800, y_pos: 125},
        {x_pos: 6400, y_pos: 150},
        {x_pos: 7200, y_pos: 125}
    ];
    mountains = [
        {x_pos: -2400},
        {x_pos: 550},
        {x_pos: 1750},
        {x_pos: 3100},
        {x_pos: 4800},
        {x_pos: 6750}
    ];
    canyons = [
        {x_pos: -1850, width: 1250},
        {x_pos: 140, width: 90},
        {x_pos: 1000, width: 90},
        {x_pos: 2100, width: 270},
        {x_pos: 3750, width: 540},
        {x_pos: 5700, width: 810}
    ];
    collectables = [
        {x_pos: -2510, y_pos: floorPos_y - 215, size: 30, isFound: false},
        {x_pos: -1360, y_pos: floorPos_y - 215, size: 30, isFound: false},
        {x_pos: -510, y_pos: floorPos_y - 115, size: 30, isFound: false},
        {x_pos: 800, y_pos: floorPos_y - 15, size: 30, isFound: false},
        {x_pos: 1595, y_pos: 200, size: 30, isFound: false},
        {x_pos: 2235, y_pos: 200, size: 30, isFound: false},
        {x_pos: 4590, y_pos: 70, size: 30, isFound: false},
        {x_pos: 5425, y_pos: floorPos_y - 215, size: 30, isFound: false},
        {x_pos: 6990, y_pos: floorPos_y - 215, size: 30, isFound: false},
        {x_pos: 7235, y_pos: floorPos_y - 15, size: 30, isFound: false},
        {x_pos: 7480, y_pos: floorPos_y - 215, size: 30, isFound: false}
    ];
    sPowerUpArray = [{x_pos: 2740, y_pos: 70, size: 30, isFound: false}];
    
    dJumpArray = [{x_pos: -200, y_pos: floorPos_y - 15, size: 30, isFound: false}];
    
    platforms = [];
    enemies = [];
    fly_enemies = [];
    projectileObj = [];
    projectileFired = false;
    
    
    platforms.push(createPlatforms(-600, floorPos_y - 100, 180));
    platforms.push(createPlatforms(-1000, floorPos_y - 200, 180));
    platforms.push(createPlatforms(-1450, floorPos_y - 200, 180));
    platforms.push(createPlatforms(-1850, floorPos_y - 100, 180));
    platforms.push(createPlatforms(-2600, floorPos_y - 200, 180)); 
    platforms.push(createPlatforms(1505, floorPos_y - 100, 180));
    platforms.push(createPlatforms(2145, floorPos_y - 100, 180));
    platforms.push(createPlatforms(2650, floorPos_y - 100, 180));
    platforms.push(createPlatforms(2650, floorPos_y - 200, 180));
    platforms.push(createPlatforms(3795, floorPos_y - 100, 180));
    platforms.push(createPlatforms(4065, floorPos_y - 100, 180));
    platforms.push(createPlatforms(4500, floorPos_y - 200, 180));
    platforms.push(createPlatforms(5100, floorPos_y - 100, 180));
    platforms.push(createPlatforms(5335, floorPos_y - 200, 180));
    platforms.push(createPlatforms(5745, floorPos_y - 100, 180));
    platforms.push(createPlatforms(6015, floorPos_y - 100, 180));
    platforms.push(createPlatforms(6285, floorPos_y - 100, 180));
    platforms.push(createPlatforms(6900, floorPos_y - 200, 180));
    platforms.push(createPlatforms(7145, floorPos_y - 100, 180));
    platforms.push(createPlatforms(7390, floorPos_y - 200, 180));
    
    enemies.push(new Enemy(-2625, floorPos_y - 20, 250));
    enemies.push(new Enemy(1500, floorPos_y - 20, 200));
    enemies.push(new Enemy(3300, floorPos_y - 20, 300));
    enemies.push(new Enemy(5100, floorPos_y - 120, 180));
    enemies.push(new Enemy(6015, floorPos_y - 120, 180));
    enemies.push(new Enemy(6875, floorPos_y - 20, 250));
    enemies.push(new Enemy(7365, floorPos_y - 20, 230));
    enemies.push(new Enemy(8700, floorPos_y - 20, 50));
    
    fly_enemies.push(new FlyEnemy(4850, 250, 150));
    fly_enemies.push(new FlyEnemy(5675, 250, 150));
    fly_enemies.push(new FlyEnemy(6535, 250, 150));
    fly_enemies.push(new FlyEnemy(7235, 150, 150));
    
    flagpole = {isReached: false, x_pos: 7900}; 
}

function drawUI()
{
    for(var i = 0; i < lives; i++)
        {
            image(life_Icon, 40 + i * 50, -5, 52, 84);
        }
    
    for(var i = 0; i < 3; i++)
        {
            image(no_Life_Icon, 40 + i * 50, -5, 52, 84);
        }
    var s = 30;
    var x = 930;
    var y = 35;
    
    //Collectable icon
    fill(77, 210, 255, 100);
    ellipse(x, y, s);
    fill(107, 218, 255, 150);
    ellipse(x, y, s * 0.75)
    fill(136, 225, 255, 200);
    ellipse(x, y, s * 0.5);
    fill(166, 232, 255);
    ellipse(x, y, s * 0.25);
    fill(255, 255, 255, 70);
    ellipse(x, y, s);
    
    //Shoot power up
    if(shootPowerUp)
        {
            fill(102, 51, 153, 100);
            ellipse(width/2 + 75, y, s);
            fill(140, 102, 179, 150);
            ellipse(width/2 + 75, y, s * 0.75)
            fill(179, 153, 204, 200);
            ellipse(width/2 + 75, y, s * 0.5);
            fill(204, 187, 221);
            ellipse(width/2 + 75, y, s * 0.25);
            fill(255, 255, 255, 70);
            ellipse(width/2 + 75, y, s);
        }
    //Double jump power up
    if(doubleJump)
        {
            fill(255, 215, 0, 100);
            ellipse(width/2 - 75, y, s);
            fill(255, 225, 64, 150);
            ellipse(width/2 - 75, y, s * 0.75)
            fill(255, 235, 128, 200);
            ellipse(width/2 - 75, y, s * 0.5);
            fill(255, 245, 191);
            ellipse(width/2 - 75, y, s * 0.25);
            fill(255, 255, 255, 70);
            ellipse(width/2 - 75, y, s);
        }
    
    fill(255);
    textSize(18);
    text("x  " + game_score, x + 25, y + 7);
}

function createPlatforms(x, y, length)
{
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function()
        {
            fill(5, 51, 48);
            rect(this.x, this.y, this.length, 40);
            fill(1, 40, 40);
            rect(this.x, this.y, this.length, 15);
            fill(28, 135, 97);
            rect(this.x, this.y, this.length, 3);
        },
        checkContact: function(gc_x, gc_y)
        {
            if(gc_x > this.x && gc_x < this.x + this.length)
                {
                    var d = this.y - gc_y;
                    
                    if(d >= 0 && d < 12)
                        {
                            //Sets velocity back to 0 when on the platform
                            gameChar_y = this.y;
                            velocity = 0;
                            return true;
                        }
                }
            
            return false;
        }

    
    }
    
    return p;
}

function Enemy(x, y, range)
{
    this.x = x;
    this.y = y;
    this.range = range;
    
    this.currentX = x;
    this.inc = 1;
    
    this.update = function()
    {
        this.currentX += this.inc;
        
        if(this.currentX >= this.x + this.range)
            {
                this.inc = -1;
            }
        else if(this.currentX < this.x)
            {
                this.inc = 1;
            }
    }
    
    this.draw = function()
    {
        this.update();
        
        if(this.inc == 1)
            {
                push();
                translate(-22, -32);
                image(enemy_right, this.currentX, this.y, 46, 60);
                pop();
            }
        else
            {
                push();
                translate(-22, -32);
                image(enemy_left, this.currentX, this.y, 46, 60);
                pop();
            }
    }
    
    this.checkContact = function(gc_x, gc_y)
    {
        var d = dist(gc_x, gc_y, this.currentX, this.y);
        
        if(d < 40)
            {
                lives --;
                return true;
            }
        
        return false;
    }
}

function FlyEnemy(x, y, range)
{
    this.x = x;
    this.y = y;
    this.range = range;
    
    this.currentY = y;
    this.inc = 1;
    
    this.update = function()
    {
        this.currentY += this.inc;
        
        if(this.currentY >= this.y + this.range)
            {
                this.inc = -1;
            }
        else if(this.currentY < this.y)
            {
                this.inc = 1;
            }
    }
    
    this.draw = function()
    {
        this.update();

        if(gameChar_world_x > this.x)
            {
                push();
                translate(-22, -32);
                
                image(fly_enemy_right, this.x, this.currentY, 69, 90);
                pop();
            }
        else
            {
                push();
                translate(-22, -32);
                image(fly_enemy_left, this.x, this.currentY, 69, 90);
                pop();
            }
    }
    
    this.checkContact = function(gc_x, gc_y)
    {
        var d = dist(gc_x, gc_y, this.x, this.currentY);
        
        if(d < 40)
            {
                lives --;
                return true;
            }
        
        return false;
    }
}

function Projectile(x, y)
{
    this.x = x;
    this.y = y;
    this.distTravelled = 0;
    
    this.draw = function()
    {
        fill(140, 102, 179);;
        ellipse(this.x, this.y, 20);
    }
    
    var dir;
    
    if(facingRight)
        {
            dir = 10;
        }
    else
        {
            dir = -10;
        }
    
    this.update = function()
    {
        
                this.x += dir;
                this.distTravelled += dir;
        
    }
}

/*
    At the start of the game head left past the signpost. You can keep heading left to find 3 more energy cells! The jumps are challenging! 
    
    Tip: Jump when you're at about a third of the platform, don't wait till the last minute to double jump. The jumps are achievable... they're not impossible.
*/