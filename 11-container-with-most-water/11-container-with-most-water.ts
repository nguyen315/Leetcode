function maxArea(height: number[]): number {
    let i = 0, j = height.length - 1
    let maxArea = 0, temp
    while (i < j) {
        temp = Math.min(height[i], height[j]) * (j - i)
        if (temp > maxArea)
            maxArea = temp
        
        if (height[i] < height[j]) {
            i++
            continue
        }
        j--
    }
    return maxArea
};