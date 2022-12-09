/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length, n = grid[0].length
    let countIsland = 0, visitedArray = []
    
    for (let i = 0; i < m; i++) 
        visitedArray.push(new Array(n).fill(false))
    
    const directions = [[1, 0],[0, 1],[-1, 0],[0, -1]]
    
    let [firstRow, firstCol] = findNextStartPoint(visitedArray)
    
    const traverse = (startRow, startCol) => {
        visitedArray[startRow][startCol] = true
        if (grid[startRow][startCol] == 0)
            return

        for (d of directions) {
            const row = startRow + d[0]
            const col = startCol + d[1]

            if (row < 0 || col < 0 || row >= m || col >= n)
                continue
            
            if (!visitedArray[row][col])
                if (grid[row][col] == 1)
                    traverse(row, col)
                else
                    visitedArray[row][col] = true
        }
    }
    do {
        traverse(firstRow, firstCol)
        if (grid[firstRow][firstCol] == 1) {
            countIsland++
        }
        ([firstRow, firstCol] = findNextStartPoint(visitedArray))
    }   
    while (firstRow != -1)
    
    return countIsland
};


const findNextStartPoint = (visitedArray) => {
    const m = visitedArray.length
    const n = visitedArray[0].length
    const result = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visitedArray[i][j]) {
                return [i, j]
            }
                
        }
    }
    return [-1, -1]
}