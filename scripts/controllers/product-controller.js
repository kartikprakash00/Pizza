// Product Controller - It is a Glue B/w View and Model
// Controller - I/O View Layer

import productOperations from "../services/product-operations.js";
// Data Exchange B/w View and Model.
async function loadPizzas() {
    const Pizzas = await productOperations.loadProducts();
    console.log('Pizzas are ', Pizzas);
    for (let pizza of Pizzas) {
        pizzaCard(pizza);
    }
}
loadPizzas();

{/* <div class="col-4">
    <div class="card" style="width: 18rem;">
        <img src="https://images.dominos.co.in/new_veggie_paradise.jpg" class="card-img-top"
            alt="...">
        <div class="card-body">
                <h5 class="card-title">Veggie Paradise</h5>
                <p class="card-text">The awesome foursome! Golden corn, black olives, capsicum, red
                    paprika
                </p>
                <a href="#" class="btn btn-primary">Add to Cart</a>
         </div>
    </div>
</div> */}

function addtoCart() {
    console.log('Add to cart called....', this);
    const currentButton = this;
    const pizzaId = currentButton.getAttribute('product-id');
    console.log('Pizza ID is ', pizzaId);
    productOperations.search(pizzaId);
    printBasket();
}

function printBasket() {
    const cartProducts = productOperations.getProductsInCart();
    const basket = document.getElementById('basket');
    basket.innerHTML = '';
    for (let product of cartProducts) {
        const li = document.createElement('li');
        li.innerText = `${product.name}- $${product.price}`;
        basket.appendChild(li);
    }
}

function pizzaCard(pizza) {
    const output = document.getElementById('pizzacontainer');
    const divCol = document.createElement('div');
    divCol.className = 'col-4';
    const divCard = document.createElement('div');
    divCard.className = 'card';
    divCol.appendChild(divCard);
    const image = document.createElement('img');
    image.src = pizza.url;
    image.className = 'card-img-top';
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    divCard.append(image, cardBody);
    const title = document.createElement('h5');
    title.className = 'card-title';
    title.innerText = pizza.name;
    const ptag = document.createElement('p');
    ptag.className = 'card-text';
    ptag.innerText = pizza.desc;
    const Price = document.createElement('p');
    Price.style.fontWeight = "bold"
    Price.className = 'card-text';
    Price.innerText = `$${pizza.price}`;
    const button = document.createElement('button');
    button.setAttribute('product-id', pizza.id);
    button.addEventListener('click', addtoCart);
    button.className = 'btn btn-primary';
    button.innerText = 'Add to Cart';
    cardBody.append(title, ptag, Price, button);
    output.appendChild(divCol);
    output.style.rowGap = '10px';

}