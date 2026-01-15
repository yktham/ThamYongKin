const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below
const result =
  Number(disneyData.open) -
  Number(disneyData.high) +
  Number(disneyData.low) -
  Number(disneyData.close);

console.log(result.toFixed(2));