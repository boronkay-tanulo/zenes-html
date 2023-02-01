function Init()
{
	let audios = {
		0: new Audio("Bad to the Bone.mp3"),
		1: new Audio("Ballada-004.mp3.mp3"),
		2: new Audio("Die Antwoord - I Fink U Freeky.mp3"),
		3: new Audio("Drowning Pool - Bodies.mp3"),
		5: new Audio("Elmúltak az ünnepek.mp3"),
		6: new Audio("Európa Kiadó.mp3"),
		7: new Audio("Fatboy Slim - Ya Mama.mp3"),
		8: new Audio("for KING & COUNTRY - Little Drummer Boy.mp3")
	}
	console.log("hello");
	for (let i in audios)
	{
		document.getElementById(`d${i}`).onclick = function() {
			for(let n in audios) {
				if (!audios[n].paused && n != i) { audios[n].pause(); audios[n].currentTime = 0.0; }
			}
			audios[i].play();
		}
	}
	document.onclick = function() {console.log(audios[0].paused);}
}

Init();
