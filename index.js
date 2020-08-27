function makeCurry(array) {
    //In order to have perfect weights of P,Q,R array length must be >= 3
    if (array.length < 3) {
        return "noLuck"
    } else {
        //First 3 elements to be marked as P,Q and R
        let weightObj = {
            'P': array[0],
            'Q': array[1],
            'R': array[2]
        }
        //outputStr
        let outputStr = Object.keys(weightObj).join("");

        //remaining weights which need to be processed
        let remainingWeights = array.slice(3);

        //Go throught all remainingWeights and check if they satisfy perfect curry condition or not
        for (let weight of remainingWeights) {
            let currentItem = weight;

            //check if adding to P will statisfy
            if (((weightObj['P'] + weight) == weightObj['Q']) || ((weightObj['P'] + weight) == weightObj['R'])) {
                weightObj['P'] += weight;
                outputStr += 'P';
            }
            //check if adding to Q will statisfy
            else if (((weightObj['Q'] + weight) == weightObj['P']) || ((weightObj['Q'] + weight) == weightObj['R'])) {
                weightObj['Q'] += weight;
                outputStr += 'Q';
            }
            //check if adding to R will statisfy
            else if (((weightObj['R'] + weight) == weightObj['P']) || ((weightObj['R'] + weight) == weightObj['Q'])) {
                weightObj['R'] += weight;
                outputStr += 'R';
            }

        }

        //check if all weights are equal
        if ((weightObj['P'] == weightObj['Q']) && (weightObj['P'] == weightObj['R'])) {
            return outputStr;
        } else {
            return "noLuck"
        }

    }
}

console.log(makeCurry([3, 7, 2, 5, 4]));