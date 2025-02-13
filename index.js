const inputNode = document.querySelector('.expenses__input');
const limitNode = document.querySelector('.expenses__limit');
const totalNode = document.querySelector('.js-total');
const statusNode = document.querySelector('.js-status');
const buttonNode = document.querySelector('.expenses__button');
const historyNode = document.querySelector('.expenses__history-list');
const errorNode = document.querySelector('.error-js');
const LIMIT = 10000;
const userValue = [];

buttonNode.addEventListener('click', () => {
    const money = convertToNumber(inputNode);
    if(!money){
        errorNode.style.display = 'block';
        return;
    }
    saveNumberToArr(money); // Сохраняет в массив число.
    let total = calcNumberArr(); // Сумму массива сохр.
    renderTotal(total); // Выводит полную сумму всех введеных значений.
    renderHistory(money); // Выводит историю трат.
    statusCode(total);
    errorNode.style.display = 'none';
    inputNode.value = '';
});

function convertToNumber(inputNode){
    return parseInt(inputNode.value);
}

function saveNumberToArr(money){
    userValue.push(money);
}
function calcNumberArr(){
    let result = 0;
    userValue.forEach(function(any){
        result += any;
    })
    return result;
}

function renderTotal(total){
    totalNode.textContent = total + 'руб.';
};

function renderHistory(value){
    let newItemHistory = document.createElement('li');
    newItemHistory.className = 'expenses__history-item';
    newItemHistory.textContent =  value;
    historyNode.append(newItemHistory);
};

function statusCode(total){
    if(total <= LIMIT){
        statusNode.textContent = 'Все хорошо!';
        statusNode.style.color = 'green';
    }else{
        statusNode.textContent = 'Плохо!';
        statusNode.style.color = 'red';
    };
};