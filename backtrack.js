// /The Knight’s tour problem | Backtracking-1

let N = 8

let isSafe = (x, y, sol) => {

    if(x >=0 && x < N && y >=0 && y < N && sol[x][y] ===-1){
        return true;
    } else 
    return false;

}

let printSolution = (sol) => {
    sol.forEach(x => {
        x.forEach(y => {
            console.log(y+ ":\t")
        })
    })
}

let solveKt = () => {
    let sol = [...Array(N)].map(x => Array(N));

for(let i=0;i< N;i++) {
    for(let j=0;j<N;j++){
        sol[i][j] = -1
    }
}

    let movX = [2, 1, -1, -2, -2, -1, 1, 2]
    let movY = [1, 2, 2, 1, -1, -2, -2, -1]

    sol[0][0] = 0;

    if(!solveKtUtil(0,0, 1, sol, movX, movY)){
        console.log("solution does not exist")
        return false;
    } else{
        printSolution(sol)
    }


}



let solveKtUtil = (x, y, movI, sol, movX, movY) => {
    let nextX, nextY = null;
    if (movI === N * N) {
        return true;
    }

    for (let k = 0;k < 8;k++) {
        nextX = x + movX[k];
        nextY = y + movY[k];

        if(isSafe(nextX, nextY, sol)) {

            sol[nextX][nextY] = movI;
        
            if(solveKtUtil(nextX, nextY, movI+1, sol, movX, movY)) {
                return true
            }
            else {
                sol[nextX][nextY] = -1;
            }
        } 
    }

}

solveKt()