function getResult(form, event) {
    event.preventDefault();
    let resultDiv = document.getElementById('result-div');
    resultDiv.classList.toggle('hidden');
    let formData = new FormData(form);
    let obj = {};
    for (var [key, value] of formData.entries()) {
        obj[key] = value;
    }
    console.log(obj);
    debugger;
    switch (obj['op']) {
        case '+':
            document.getElementById('result-value').innerHTML = c_sum(obj['a'], obj['b']);
            break;
        case '-':
            document.getElementById('result-value').innerHTML = c_difference(obj['a'], obj['b']);
            break;
        case '*':
            document.getElementById('result-value').innerHTML = c_product(obj['a'], obj['b']);
            break;
        case '/':
            document.getElementById('result-value').innerHTML = c_quotient(obj['a'], obj['b']);
            break;
        default:
            console.log('Invalid operation');
            break;
    }
    setTimeout(() => {
        resultDiv.classList.toggle('hidden');
    }, 3000)
}