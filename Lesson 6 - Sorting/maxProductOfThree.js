const A = [];
A[0] = -1000;
A[1] = -999;
A[2] = 2;
A[3] = -20000;
A[4] = 1000;
A[5] = 999;
A[6] = 1000;


const solution = (A) => {

    const length = A.length;
    const ordered = A.sort( (x, y) => x - y);
    return ordered[length - 1] * ordered[length - 2] * ordered[length - 3];
}

console.log(solution(A));
