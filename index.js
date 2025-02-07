const inputNode = document.querySelector('expenses__input');
const limitNode = document.querySelector('expenses__limit');
const totalNode = document.querySelector('expenses__total');
const statusNode = document.querySelector('expenses__status');
const buttonNode = document.querySelector('expenses__button');
const historyNode = document.querySelector('expenses__history');

const valueUser = [];

buttonNode.addEventListener('click', () => {
    getValueFromUser(inputNode);
});

function getValueFromUser(inputNode){
    valueUser.push(inputNode.value);
    console.log(valueUser)
}