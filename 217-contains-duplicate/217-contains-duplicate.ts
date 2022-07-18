function containsDuplicate(nums: number[]): boolean {
    const checking = {}
    for (let x of nums) {
        if (checking[x]) {
            return true
        }
        checking[x] = true
    }
    return false
};