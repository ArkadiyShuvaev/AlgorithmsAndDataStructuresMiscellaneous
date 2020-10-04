const number = 1041;



const solution = (numberAsDec) => {
    const numAsBinary = numberAsDec.toString(2);
    
    let resultCount = 0;
    let results = [];
    results[resultCount] = 0;    

    for (var i = 1; i < numAsBinary.length - 1; i++) {
        const val = numAsBinary.substr(i, 1);
        
        if (val === "0") {
            results[resultCount] = results[resultCount] + 1;
        } else {
            resultCount++;
            results[resultCount] = 0;
        }
    }

    const val = numAsBinary.substr(i, 1);    

    if (val !== "1") {
        results[resultCount] = 0;
    }
    

    return Math.max.apply(null, results);
}



console.log(solution(number));