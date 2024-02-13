function firstPalindrome(words: string[]): string {
    function isPalindrome(s: string): boolean {
        let i = 0, j = s.length - 1;
        while (i < j) {
            if (s[i] !== s[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    
    for (let s of words) {
        if (isPalindrome(s)) {
            return s;
        }
    }
    
    return "";
};