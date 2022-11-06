/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = {}
    let start = 0, end = 0, length = s.length, count = 0, maxLength = Number.MIN_SAFE_INTEGER

    while (end < length) {
        if (map[s[end]] === undefined || map[s[end]] < start) {
            count = end - start + 1
            if (count > maxLength) {
                maxLength = count
            }
        }
        else {
            start = map[s[end]] + 1
        }
        map[s[end]] = end
        end++
    }

    return maxLength >= 0 ? maxLength : 0
};