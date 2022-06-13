// Define a function.
function calculatorWrapper(){

    function c_sum(a, b) {
        return a + b;
    }
    
    function c_difference(a, b) {
        return a - b;
    }
    
    function c_product(a, b) {
        return a * b;
    }
    
    function c_quotient(a, b) {
        return a / b;
    }

    CALCULATOR.c_sum = c_sum;
    CALCULATOR.c_difference = c_difference;
    CALCULATOR.c_product = c_product;
    CALCULATOR.c_quotient = c_quotient;

}

// Execute it immediately
calculatorWrapper();
