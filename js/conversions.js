const conversions = {
<<<<<<< HEAD
	inchToCM : 2.5,
	feetToCM : 30,
	inchToM : 1 / 250
};

const inchToCM = 1;

const leftInput = document.getElementById("leftInput");
const rightInput = document.getElementById("rightInput");
const imperial = document.getElementById("imperial");
const metric = document.getElementById("metric");

function determineCoverter(left, right) {
	const leftPH = left.placeHolder;
	const rightPH = right.placeHolder;
=======
    meter: 1,
    inchToCM: 1.15,
    feetToMeter: 2
};

function convert(inVal, outVal) {
    var rate = inVal / outVal;
    console.log(rate);
>>>>>>> 77c2604a571eec371801f7f70d627bf50bbc541e
}