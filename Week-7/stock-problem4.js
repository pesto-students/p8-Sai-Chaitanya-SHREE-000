function findMaxProfit(prices) {
    let max = +Infinity;
    for(let i = 0; i < prices.length - 1; i ++) {
        for(let k = i + 1; k < prices.length; k ++) {
            let profit = prices[i] - prices[k];
            if(max > profit) max = profit;
        }
    }
    if(max >= 0) return 0;
    else return -max;
}

const result = findMaxProfit([7,6,4,3,1]);
console.log(result);