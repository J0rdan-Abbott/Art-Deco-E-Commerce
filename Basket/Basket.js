let counter = document.querySelector('.counter');
let counterNumber = 0;

counterNumber = JSON.parse(localStorage.getItem('basket')).length;
counter.textContent = counterNumber;

let basket = JSON.parse(localStorage.getItem('basket'));

for (let i = 0; i < basket.length; i++) {
    document.getElementsByClassName('basket-grid-container')[0].innerHTML += `
    <div class="item">
        <p>${basket[i].name}</p>
        <img src="${basket[i].image}" alt="">
        <p id="price">£${basket[i].price}</p>
        <input type="number" value="1" id="quantity">
        <i class="fa-regular fa-square-minus"></i>
    </div>
`;
}

let remove = document.getElementsByClassName('fa-square-minus');

for (let i = 0; i < remove.length; i++) {
    let removeButton = remove[i];
    removeButton.addEventListener('click', removeFunction);
}

function removeFunction(event) {
    let currentRemoveButton = event.target;
    let currentItem = currentRemoveButton.parentElement;

    document.getElementsByClassName('basket-grid-container')[0].removeChild(currentItem);

    removeData()
}

function removeData() {
    // parse local storage string to object array
    let data = JSON.parse(localStorage.getItem('basket'));
    
    // find the product you clicked remove on using its name
    let found = data.find(product => product.name);

    // find iteration of product
    let iteration = data.indexOf(found);
    
    // remove 1 of whatever iteration the product is in the array
    data.splice(iteration, 1);

    
    // re-set updated basket array as string
    localStorage.setItem('basket', JSON.stringify(data));

    counterNumber = JSON.parse(localStorage.getItem('basket')).length;
    counter.textContent = counterNumber;
}

// total price
let priceList = document.querySelectorAll('#price');

for (let i = 0; i < priceList.length; i++) {
    let price = parseInt(priceList);
    
    console.log(price)
}



let quantity = document.querySelectorAll('#quantity');
console.log(quantity)