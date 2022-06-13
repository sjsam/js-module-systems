function c_sum(a, b) {
    debugger;
    return (a*1) + (b*1);
}

function c_difference(a, b) {
    return a - b;
}

function c_product(a, b) {
    return (+a) * b;
}

function c_quotient(a, b) {
    return +a / b;
}

module.exports = {
    c_sum,c_difference,c_product,c_quotient
}
