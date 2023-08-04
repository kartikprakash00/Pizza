// import makeNetworkCall from "./api-client.js";

// function append(Data) {
//     Data.forEach(element => {
//         const container = document.createElement('div');
//         container.setAttribute('class', 'col-4');
//         const card = document.createElement('div');
//         card.setAttribute('class', 'card');
//         card.style.width = '18rem';
//         container.append(card);
//         const image = document.createElement('img');
//         image.setAttribute('class', 'card-img-top');
//         image.setAttribute('src', 'https://images.dominos.co.in/new_veggie_paradise.jpg');
//         image.setAttribute('alt', 'oops, image not available');
//         const body = document.createElement('div');
//         body.setAttribute('class', 'card-body');
//         card.append(image, body);
//         const title = document.createElement('h5');
//         title.innerText = element.name;
//         title.setAttribute('class', 'card-title');
//         const desc = document.createElement('p');
//         desc.innerText = element.menu_description;
//         desc.setAttribute('class', 'card-text');
//         const anchor = document.createElement('a');
//         anchor.innerText = 'Add to Cart';
//         anchor.setAttribute('class', 'btn btn-primary');
//         anchor.setAttribute('href', '#');
//         body.append(title, desc, anchor);

//         const row = document.getElementById('pizzacontainer');
//         console.log(row);
//         row.append(container);

//     });
// }
// async function pizzas() {
//     const Data = await makeNetworkCall();
//     append(Data);

// }
// pizzas();

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