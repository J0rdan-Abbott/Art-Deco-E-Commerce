let addBasketButtons = document.getElementsByClassName('add-to-basket');
let counter = document.querySelector('.counter');
let counterNumber = 0;
let basketArray = [];

if (localStorage.getItem('basket') == null) {
    localStorage.setItem('basket', JSON.stringify(basketArray));
}

counterNumber = JSON.parse(localStorage.getItem('basket')).length;
counter.textContent = counterNumber;

// buttons
for (let i = 0; i < addBasketButtons.length; i++) {
    let currentButton = addBasketButtons[i];
    currentButton.addEventListener('click', buttonClicked);
}

function buttonClicked(event) {

    let button = event.target.parentElement.parentElement;

    let name = button.getElementsByClassName('card-title')[0].innerText;
    let image = button.getElementsByClassName('product-image')[0].src;
    let price = button.getElementsByClassName('card-price')[0].innerText;

    let newProduct = {image, name, price};

    let oldProduct = JSON.parse(localStorage.getItem("basket"));
    if (! oldProduct.some(product => product.name == newProduct.name)) {
        oldProduct.push(newProduct);
    } else {
        alert('This item is already in your basket!');
    }

    localStorage.setItem("basket", JSON.stringify(oldProduct));

    counterNumber = JSON.parse(localStorage.getItem('basket')).length;
    counter.textContent = counterNumber;
}