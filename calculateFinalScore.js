function calculateFinalScore(obj) {
    if (typeof obj === 'object') {
        let x = obj.isFFamily;
        if (x === true) {
            x = 20;
        } else {
            x = 0;
        }

        if ((obj.testScore + obj.schoolGrade + x) >= 80) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Invalid Input";
    }
}

console.log(calculateFinalScore({name: "Rajib", testScore: 50,  schoolGrade: 25, isFFamily : false}));


