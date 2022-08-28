function hammingWeight(n: number): number {
    let count = 0;
    while (n) {
        count++
        n = n&(n-1)
    }
    return count;
};