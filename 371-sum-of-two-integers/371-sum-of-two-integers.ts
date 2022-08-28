function getSum(a: number, b: number): number {
    let sum = a ^ b, carry = (a & b) << 1
    while (carry) {
        let temp = sum ^ carry
        carry = (sum & carry) << 1
        sum = temp
    }
    return sum
};