// Update Grinder numbers text
function updateGrinderText(){
    updateText = bbsGrinder.toString()
    demonsInGrinder.text = "Babies: " + updateText;
}

// See if we need to spawn a new demon
function checkGrinderValues(){
    if (bbsGrinder == 2){
        bbsGrinder = 0;
        spawnDemon();
        demon2Count += 1;
    }
}
