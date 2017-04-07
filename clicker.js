var score = 0;
var scoreDisplay;

var increaseRate = 0;
var increaseRateDisplay;

var demonsInGrinder;

var stage;
var addButt;

//  Demons
var demon;
var bbDemon;
var bbCount = 0;

var demon2;
var demon2Count = 0;

// Demons in Grinder
var bbsGrinder = 0;
var demon2Grinder = 0;

var wait = 5;

d = new Date()
lastIncrease = d.getTime(); 
auto = false;

// Set stage and load assets
function init(){

    stage = new createjs.Stage("Canvas");
    createjs.Touch.enable(stage)

    stage.enableMouseOver(10);
    stage.mouseMoveOutside = true;

    manifest = [
        {src: "idleBB.png", id: 'bbDemon'},
        {src: 'demontest.png', id: 'nextDemon'}
    ]; 
    
    loader = new createjs.LoadQueue(false);
    loader.addEventListener('complete', loaded);
    loader.loadManifest(manifest, true, "./imgs/");

}

// Create game screen
function loaded() {
    scoreDisplay = new createjs.Text("0", "20px Arial", "#5A0000");
    scoreDisplay.align = 'center';
    stage.addChild(scoreDisplay);

    increaseRateDisplay = new createjs.Text('0 every 0 seconds', '20px Arial', "#5A0000")
    increaseRateDisplay.align = 'left'
    increaseRateDisplay.x = 300;
    stage.addChild(increaseRateDisplay);

    demonsInGrinder = new createjs.Text("Babies: 0", "20 px Arial", "#5A0000");
    demonsInGrinder.align = 'center';
    demonsInGrinder.y = 50;
    stage.addChild(demonsInGrinder)

    addButt = new createjs.Shape();
    addButt.graphics.beginFill('Red').drawCircle(0, 0, 50);
    addButt.x = 800;
    addButt.y = 65;
    addButt.addEventListener('click', function(){
        purchase();
    });
    stage.addChild(addButt);

    grinder = new createjs.Shape();
    grinder.graphics.beginFill('Blue').drawRect(20, 100, 100, 100);
    stage.addChild(grinder);

    spawnBBDemon();
    bbCount += 1;

    auto = true;

    stage.update();
}

// GAME LOOP
createjs.Ticker.setFPS(30);

createjs.Ticker.on('tick', function(event){
    d = new Date();
    currentTime = d.getTime();
    // Score and Score Dislay controls
    if (auto == true){
        checkGrinderValues();
	    updateIncreaseRate();
        if ((currentTime - lastIncrease) > (wait * 1000)){
            setIncreaseRate();
	        lastIncrease = d.getTime();         
	    };
	};

    stage.update(event);

});