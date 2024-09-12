function calculateTax(income, expenses) {
    if (income >= 0){
        income = income;
    } else{
        return "Invalid Input";
    }

    if ( expenses >= 0){
        expenses = expenses;
    } else{
        return "Invalid Input";
    }

    if (income >= expenses){
        vat = (income - expenses) * 0.2;
        return vat;
    } else {
        return "Invalid Input";
    }

}

console.log(calculateTax(6000, 1500));

