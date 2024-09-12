function checkDigitsInName(name) {
    if (typeof name === 'string'){
        let nameArray = name.split('');
        for (let i = 0; i < nameArray.length; i++) { 
            for (let j = 0; j < 10; j++) {
                if ( j == nameArray[i]) {
                    return true;
                } 
            }   
        }
        return false;
    } else {
        return "Invalid Input";
    }
}

console.log(checkDigitsInName('1Rds12'));