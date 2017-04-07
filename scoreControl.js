
// Set Rate at which score increases AND update actual score.
function setIncreaseRate(){
	increase = bbCount + (demon2Count * 4);

    score += increase;
    scoreStr = score.toString();
    scoreDisplay.text = scoreStr;
}

// Update score text
function updateIncreaseRate(){
	increase = bbCount + (demon2Count * 4);
    increaseString = increase.toString() + ' every ' + wait.toString() + ' seconds';
    increaseRateDisplay.text = increaseString;
}