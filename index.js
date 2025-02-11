const inputNode = document.querySelector('.expenses__input');
const limitNode = document.querySelector('.expenses__limit');
const totalNode = document.querySelector('.js-total');
const statusNode = document.querySelector('.expenses__status');
const buttonNode = document.querySelector('.expenses__button');
const historyNode = document.querySelector('.expenses__history-list');


const userValue = [];

buttonNode.addEventListener('click', () => {
    const money = convertToNumber(inputNode);
    if(!money){
        console.log('error');
        return;
    }
    saveNumberToArr(money);
    let total = calcNumberArr();
    renderTotal(total);
    inputNode.value = '';
})

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

function renderTotal(total){ // Выводит полную сумму всех введеных значений.
    totalNode.textContent = total + 'руб.';
};