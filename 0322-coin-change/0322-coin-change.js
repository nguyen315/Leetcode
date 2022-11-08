/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const result = {}
    for (let i = 0; i < coins.length; i++) {
        result[coins[i]]=1
    }
    result[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        if (result[i] === undefined) {
            let min = Number.MAX_SAFE_INTEGER
            for (let j = 0; j < coins.length; j++) {
                const remain = i - coins[j]
                if (remain >= 0) {
                    if (result[remain] >= 0) {
                        if (result[remain] + 1 < min) {
                            min = result[remain] + 1
                        }
                    }  
                }
            }
            result[i] = min === Number.MAX_SAFE_INTEGER ? -1 : min
        }
    }
    
    return result[amount]
};