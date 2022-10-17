/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    const mem = {}, result=[]
    nums.forEach((num, index) => {
        mem[num] = index
    })
    for (let i = 0; i < nums.length - 1; i++) {
        if (i > 0 && nums[i] == nums[i-1]) {
            continue
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] == nums[j-1]) {
                continue
            }
            const temp = -(nums[i] + nums[j])
            if (mem[temp] != i && mem[temp] != j && mem[temp] > j) {
                result.push([nums[i], nums[j] , temp])
            }
        }
    }

    return result
};