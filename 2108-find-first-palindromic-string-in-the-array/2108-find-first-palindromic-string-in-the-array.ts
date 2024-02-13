function firstPalindrome(words: string[]): string {
    function isPalindrome(s: string): boolean {
        let i = 0;
        while (i < s.length - 1 - i) {
            if (s[i] !== s[s.length - 1 - i]) {
                return false;
            }
            i++;
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