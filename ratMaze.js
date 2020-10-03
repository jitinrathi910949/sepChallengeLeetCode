let N = 4;

let ratMaze = () => {

    let sol = [...Array(N)].map(x => Array(N));

    for (let i = 0;i < N;i++) {
        for (let j = 0;j < N;j++) {
            sol[i][j] = -1
        }
    }

    let pathAllowed = [[1, 0, 0, 0], [1, 1, 0, 1], [0, 1, 0, 0], [1, 1, 1, 1]];

    let movX = [0, 1, -1, 0]
    let movY = [1, 0, 0, -1]

    

}