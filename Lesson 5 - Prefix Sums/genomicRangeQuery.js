const P = [];
const Q = [];

P[0] = 2
P[1] = 5
P[2] = 0
P[3] = 2
P[4] = 5
P[5] = 5

Q[0] = 4
Q[1] = 5
Q[2] = 7
Q[3] = 4
Q[4] = 5
Q[5] = 5

const S = "ACGTTGCA";

const ensureValid = (S, P, Q) => {
    if (!S || !P || !Q || P.length != Q.length) {
        throw error("Data is invalid");
    }
}

const getImpactFactor = (s) => {
    if (s === 'A') {
        return 1;
    } else if (s === 'C') {
        return 2;
    } else if (s === 'G') {
        return 3;
    } else if (s === "T") {
        return 4
    } else {
        return null;
    }
}

const updateAlreadyCalculated = (alreadyCalculated, startIdx, endIdx, foundFactor) => {
    if (alreadyCalculated.minIdx > startIdx) {
        alreadyCalculated.minIdx = startIdx;
        alreadyCalculated.impactFactor = foundFactor;
    }

    if (alreadyCalculated.maxIdx < endIdx) {
        alreadyCalculated.maxIdx = endIdx;
        alreadyCalculated.impactFactor = foundFactor;
    }

    console.log("minCalculatedIdx: " + alreadyCalculated.minIdx + " minCalculatedIdx: " + alreadyCalculated.maxIdx);
}

var solution = function solution(S, P, Q) {

    ensureValid(S, P, Q);

    const result = [];
    const minImpactFactor = 1;
    const maxImpactFactor = 4;
    const alreadyCalculated = {minIdx: S.length, maxIdx: 0, impactFactor: maxImpactFactor};
    
    for (var i = 0; i < P.length; i++) {
        
        const startIdx = P[i];
        const endIdx = Q[i];
        
        if (alreadyCalculated.minIdx <= startIdx && alreadyCalculated.maxIdx >= endIdx) {
            console.log("alreadyCalculated");
            result.push(alreadyCalculated.impactFactor);
            continue;
        }

        var substr = S.substring(startIdx, endIdx + 1);

        let foundFactor = null;

        for (let j = 0; j < substr.length; j++) {
            const element = substr.substring(j, j+1);
            
            const currentFactor = getImpactFactor(element);
            if (currentFactor === null) {
                throw error("Data is invalid");
            }
            
            if (foundFactor == null || foundFactor > currentFactor) {
                foundFactor = currentFactor;
            }

            if (foundFactor === minImpactFactor) { 
                break;
            }
        }

        result.push(foundFactor);

        updateAlreadyCalculated(alreadyCalculated, startIdx, endIdx, foundFactor);
    }


    return result;
}

console.log(solution(S, P, Q))