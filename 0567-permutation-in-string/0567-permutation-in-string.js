/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


function isContain(s1 , s2) {
    for (let k of Object.keys(s1)) {
        if (s2[k] !== s1[k])
            return false
    }
    return true
}

var checkInclusion = function(s1, s2) {
    if (s2.length < s1.length) {
        return false
    }
    
    const s1Store = {}
    for (let c of s1) {
        if (s1Store[c]) {
            s1Store[c]++
        }
        else {
            s1Store[c] = 1
        }
    }
    
    const s2Store = {}
    
    for (let i = 0; i < s1.length; i++) {
        const letter = s2[i]
        if (s2Store[letter]) {
            s2Store[letter]++
        }
        else {
            s2Store[letter] = 1
        }
    }
    if (isContain(s1Store, s2Store)) {
        return true
    }
    
    let i = 1
    while (i + s1.length <= s2.length) {
        const letter = s2[i + s1.length - 1]
        if (s2Store[letter]) {
            s2Store[letter]++
        }
        else {
            s2Store[letter] = 1
        }
        s2Store[s2[i - 1]]--
        if (isContain(s1Store, s2Store)) {
            return true
        }
        i++
    }
    
    return false
};

