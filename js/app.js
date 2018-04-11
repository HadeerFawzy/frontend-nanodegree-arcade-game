
// Enemies our player must avoid
var Enemy = function(enemy_x, enemy_y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.enemy_x = enemy_x;
    this.enemy_y = enemy_y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.enemy_x > 480){
        this.enemy_x = -100;
        this.speed =  Math.random() * 100 * 8;
    }else{
        // enemies movement
        this.enemy_x += this.speed * dt;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.enemy_x, this.enemy_y);
};




// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Player
var Player = function(player_x, player_y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.player_x = player_x;
    this.player_y = player_y;

    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.player_x > 480){
        this.player_x = 0;
    }else if(this.player_x < 0){
        this.player_x = 405;
    }
    if(this.player_y > 410){
        this.player_y = 410;
    }else if(this.player_y < -65){
        this.player_y = 410;
    }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.player_x, this.player_y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var player = new Player(200, 410);

var enemy_y = 65;

var move_x = 100;
var move_y = 80;

for (var i = 0; i < 3 ; i++) {
    var speed = Math.random() * 100 * (i+1) ;
    var enemy = new Enemy( 5, enemy_y, speed);
    allEnemies.push(enemy);
    enemy_y = enemy_y + move_y;
}

Player.prototype.handleInput = function(keyCode){
    switch (keyCode) {
        // left
        case 'left':
        this.player_x -= move_x;
        break;

        // right
        case 'right':
        this.player_x += move_x;
        break;

        // up
        case 'up':
        this.player_y -= 90;
        break;

        // down
        case 'down':
        this.player_y += 90;
        break;
    }

}



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
