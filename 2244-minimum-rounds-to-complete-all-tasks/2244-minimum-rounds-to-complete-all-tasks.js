/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const mem = {}
    let countSteps = 0
    for (const i of tasks) {
        mem[i] = mem[i] === undefined ? 1 : mem[i] + 1
    }
    
    for (const i in mem) {
        const count = mem[i]
        let threeSteps = Math.floor(count / 3)
        let remain = count % 3
        let twoSteps = 0
        if (remain === 1 && threeSteps > 0) {
            threeSteps -= 1
            remain += 3
        }
        twoSteps = Math.floor(remain / 2)
        remain = remain % 2
        if (remain !== 0) {
            countSteps = -1
            break
        }
        
        countSteps += (threeSteps + twoSteps)
    }
    
    return countSteps
};