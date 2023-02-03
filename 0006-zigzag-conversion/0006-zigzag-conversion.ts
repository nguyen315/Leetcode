function convert(s: string, numRows: number): string {
    const a = new Array(numRows)
    let i = 0
    let isPlus = true
    
    if (s.length <= numRows)
        return s
    
    for (let c of s) {
        if (a[i] === undefined) {
            a[i] = [c]
        }
        else {
            a[i].push(c)
        }
        
        i = isPlus ? i + 1 : i - 1
        
        if (i === numRows)
            i = numRows - 1
        
        if (i === -1)
            i = 0
        
        
        if (i === numRows - 1 || i === 0) {
            isPlus = !isPlus
        }
    }
    
    let result = ''
    
    for (let subA of a) {
        for (let c of subA) {
            result = result.concat(c)
        }
    }
    return result
};