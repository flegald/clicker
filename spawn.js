// Spawn a Baby Demon
function spawnBBDemon(){
	var spriteSheet = new createjs.SpriteSheet({
		framerate: 30,
		// "scale": 2,
		"images": [loader.getResult('bbDemon')],
		"frames": {"height": 102.77, "width": 97.57 },
        "animations": {
            'idle': [0, 61]
        }
	});

	demon = new createjs.Sprite(spriteSheet, 'idle');

    // Enable Dragging
    demon.cursor = "pointer";
    demon.on("mousedown", function (evt) {
        this.parent.addChild(this);
        this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
    });

    demon.on("pressmove", function (evt) {
        this.x = evt.stageX + this.offset.x;
        this.y = evt.stageY + this.offset.y;
        // indicate that the stage should be updated on the next tick:
        update = true;
    });
    demon.on('click', function(){
        score += 1;
        scoreStr = score.toString();
        scoreDisplay.text = scoreStr;
    });

    demon.x = Math.random()* 900 + 1;
    demon.y = Math.random()* 500 + 1;   

    demon.on('tick', function(){
        var intersection = ndgmr.checkRectCollision(this, grinder);
        if (intersection){
            stage.removeChild(this);
            bbCount -= 1;
            bbsGrinder += 1;
            updateGrinderText();
        }
    });
    stage.addChild(demon);
}

function spawnDemon(){
    var spriteSheet = new createjs.SpriteSheet({
        framerate: 30,
        // "scale": 2,
        "images": [loader.getResult('nextDemon')],
        "frames": {"height": 160, "width": 160 },
    });

    demon = new createjs.Sprite(spriteSheet);

    // Enable Dragging
    demon.cursor = "pointer";
    demon.on("mousedown", function (evt) {
        this.parent.addChild(this);
        this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
    });

    demon.on("pressmove", function (evt) {
        this.x = evt.stageX + this.offset.x;
        this.y = evt.stageY + this.offset.y;
        // indicate that the stage should be updated on the next tick:
        update = true;
    });

    demon.on('click', function(){
        score += 2;
        scoreStr = score.toString();
        scoreDisplay.text = scoreStr;
    });

    demon.x = Math.random()* 900 + 1;
    demon.y = Math.random()* 500 + 1;  

    stage.addChild(demon);
}