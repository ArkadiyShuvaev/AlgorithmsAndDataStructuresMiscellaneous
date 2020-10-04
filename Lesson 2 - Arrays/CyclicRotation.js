const array = [3, 8, 9, 7, 6];

const k = 3;



const solution = (arr, k) => {

    if (k <= 0) {
        return arr;
    }

    const result = [];
    const arrLenght = arr.length;

    result[0] = arr[arrLenght - 1];

    for (var i = 1; i < arrLenght; i++) {
        result[i] = arr[i-1];
    }

    return solution(result, --k);
}

console.log(solution(array, k));