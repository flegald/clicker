function purchase(){
	if (score >= 50){
		score -= 50;
		spawnBBDemon();
		bbCount += 1;
	} else {
		console.log('too poor');
	}
};