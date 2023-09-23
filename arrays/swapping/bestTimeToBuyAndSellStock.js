
function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  const size = prices.length;
  if (size === 0) {
    return undefined;
  }

  for (let i = 0; i < size; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}

const givenArray = [7, 6, 4, 3, 1];

const result = maxProfit(givenArray);
console.log(result);
