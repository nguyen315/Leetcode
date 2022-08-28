function hammingWeight(n: number): number {
    let count = 0;
    while (n > 0) {
        console.log(n)
        if (n % 2 == 1) {
            count++
        }
        n = Math.floor(n / 2);
    }
    return count;
};