/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const n = strs.length
    const strLength = strs[0].length
    let count = 0;
    
    for (let i = 0; i < strLength; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (strs[j][i] > strs[j + 1][i]) {
                count++;
                break;
            }
        }
    }
    
    return count
};