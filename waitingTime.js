function  waitingTime(waitingTimes  , serialNumber) {
    if (Array.isArray(waitingTimes)  === true && typeof serialNumber === "number") {
        let sum = 0;
        for (i = 0; i < waitingTimes.length; i++) {
        sum = waitingTimes[i] + sum;  
        }
        let avg = Math.round(sum / waitingTimes.length);
        let restCandidate = serialNumber - waitingTimes.length - 1;
        let timeNeed = avg * restCandidate;
        return timeNeed;
    } else {
        return "Invalid Input";
    }   
}

console.log(waitingTime([6], 4));

