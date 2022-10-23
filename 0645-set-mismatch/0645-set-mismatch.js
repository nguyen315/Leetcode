/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const mem = {}, result = []
    for (let i = 0; i < nums.length; i++) {
        if (mem[nums[i]]) {
            result.push(nums[i])
        }
        mem[nums[i]] = true
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!mem[i]) {
            result.push(i)
            break
        }
    }
    return result
};