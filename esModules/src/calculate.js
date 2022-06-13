
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

export const calculator = {
    sum:c_sum,
    difference:c_difference,
    product:c_product,
    quotient:c_quotient
}

