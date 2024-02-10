function countSubstrings(s: string): number {
    // abccbacc
    let result = 0
    let hashTable: (boolean | undefined)[][] = new Array(s.length).fill(undefined).map(() => new Array(s.length).fill(undefined));
    
    for (let i = 0; i < s.length; i++) {
        hashTable[i][i] = true;
    }
    
    function isPalindromic(i: number, j: number) {
        // base case if i === j
        if (hashTable[i][j] !== undefined) {
            return hashTable[i][j];
        }
        
        // base case
        if (i === j - 1) {
            hashTable[i][j] = s[i] === s[j];
            return hashTable[i][j];
        }
        
        hashTable[i][j] = s[i] === s[j] && isPalindromic(i + 1, j - 1)
        return hashTable[i][j]
    }
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (isPalindromic(i , j)) {
                result++;
            }
        }
    }
    
    return result;
};