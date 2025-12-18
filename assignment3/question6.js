const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below
// Convert string values to numbers
const open = parseFloat(disneyData.open);
const close = parseFloat(disneyData.close);
const volume = parseInt(disneyData.volume, 10);

if (close > open) {
    if (volume > 100000) {
        console.log('Strong Bullish');
    } else {
        console.log('Bullish');
    }
} else if (close < open) {
    if (volume > 10000) {
        console.log('Strong Bearish');
    } else {
        console.log('Bearish');
    }
} else {
    console.log('neutral');
}