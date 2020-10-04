const arr = [];
arr[0] = 23171;
arr[1] = 21011;
arr[2] = 21123;
arr[3] = 21366;
arr[4] = 21013;
arr[5] = 21367;

const solution = (arr) => {

    let result = 0;

    for (i = 0; i < arr.length - 1; i++) {
        const firstElem = arr[i];
        const rightPart = arr.slice(i+1);

        maxValue = Math.max.apply(null, rightPart);
        const subtractionResult = maxValue - firstElem;

        if (subtractionResult > 0 && subtractionResult > result) {
            result = subtractionResult;
        }
    }

    return result;
}




console.log(solution(arr));