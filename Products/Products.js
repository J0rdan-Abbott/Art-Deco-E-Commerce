let basketArray = [];
let addBasketButton = document.querySelectorAll('.add-to-basket');
let counter = document.querySelector('.counter');
let counterNumber = 0;
let cardInfo = document.querySelector('.product-card-wrapper');
console.log(cardInfo.childNodes)

function addButton() {
    JSON.stringify(localStorage.setItem("cardInfo", cardInfo.childNodes));
    basketArray.push(cardInfo);
    console.log(basketArray)

    counterNumber = basketArray.length;
    counter.textContent = counterNumber;   
}