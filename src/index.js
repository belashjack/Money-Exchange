// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const coins = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };
    let changeArray = {};
    if (currency === 0) return changeArray;
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    for (const key in coins) {
        while (currency / coins[key] >= 1) {
            changeArray[key] = changeArray[key] === undefined ? 1: changeArray[key] + 1;
            currency -= coins[key];
        }
    }
    return changeArray;
}