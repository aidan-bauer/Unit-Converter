const conversions = {
    meter: 1,
    inchToCM: 1.15,
    feetToMeter: 2
};

function convert(inVal, outVal) {
    var rate = inVal / outVal;
    console.log(rate);
}