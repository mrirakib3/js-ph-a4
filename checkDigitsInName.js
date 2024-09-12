function checkDigitsInName(name) {
    if (typeof name === 'string'){
        return 2;
    } else {
        return "Invalid Input";
    }
}

console.log(checkDigitsInName('3423'));