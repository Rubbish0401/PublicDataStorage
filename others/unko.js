let btn = document.getElementById("startButton");

let goals = [
    "うんち",
    "うんこ",
    "ういち"
];

let interval = setInterval(intervalFunc, 3000);

function getSlots() {
    return [
        rouletteElements[0].innerText,
        rouletteElements[1].innerText,
        rouletteElements[2].innerText,
    ].join("");
}

function intervalFunc(){
	let result = getSlots();
	console.log(result);

	if(isMatch(result)) clearInterval(interval);
	else btn.click();
}

function isMatch(result){
	return goals.includes(result) ||
	/*(result.charAt(0) == result.charAt(1) && result.charAt(0) == result.charAt(2))*/
}
