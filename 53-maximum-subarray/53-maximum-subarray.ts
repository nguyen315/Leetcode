function maxSubArray(nums: number[]): number {
    // [-2,1,-3,4,-1,2,1,-5,4]
    let max = Number.MIN_SAFE_INTEGER, curSum = 0
    for (let x of nums) {
        curSum += x
        max = Math.max(max, curSum)
        if (curSum < 0)
            curSum = 0
    }
    return max
};