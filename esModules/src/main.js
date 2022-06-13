import { calculator } from "./calculate";
import './style.css';

export function getResult(form, event) {
    event.preventDefault();
    let resultDiv = document.getElementById('result-div');
    resultDiv.classList.toggle('hidden');
    let formData = new FormData(form);
    let obj = {};

    for (var [key, value] of formData.entries()) {
        obj[key] = value;
    }

    console.log(obj);

    switch (obj['op']) {
        case '+':
            document.getElementById('result-value').innerHTML = calculator.sum(obj['a'], obj['b']);
            break;
        case '-':
            document.getElementById('result-value').innerHTML = calculator.difference(obj['a'], obj['b']);
            break;
        case '*':
            document.getElementById('result-value').innerHTML = calculator.product(obj['a'], obj['b']);
            break;
        case '/':
            document.getElementById('result-value').innerHTML = calculator.quotient(obj['a'], obj['b']);
            break;
        default:
            console.log('Invalid operation');
            break;
    }
    setTimeout(() => {
        resultDiv.classList.toggle('hidden');
    }, 3000)
}

document.addEventListener("DOMContentReady", function(ev) {
    document.getElementById('submit-button').addEventListener('click', (ev)=>{
        getResult(document.getElementById('small-calc'),ev);
    });
});

window.getResult = getResult;


