function missingNumber(nums: number[]): number {
    const obj = {}
    for (let i of nums) {
        obj[i] = true
    }
    for (let i = 0; i <= nums.length; i++) {
        if (!obj[i]) {
            return i
        }
    }
};