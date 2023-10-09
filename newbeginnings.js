// import {cart} from '/new beginnings/cart.js';

let productsHTML = '';

products.forEach((product) =>{
    productsHTML += `
        <div class="row">
        <a class="display-product" data-product-id="${product.id}"><img src="${product.image}" alt=""></a> 
            <div class="p-details">
                <span>Clothing</span>
                <div class="product-name"> <h3>${product.name}</h3> </div>
                <div class="stars">
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                </div>
                <h6>₱${product.pricePeso}</h6>
            </div>        
            <button class="add-to-cart js-add-to-cart" data-product-id="${product.id}"><i class='bx bx-cart-alt'></i></button>
            <div class="showToast" data-product-id="${product.id}"><i class='bx bxs-check-circle'></i><span>Added</span></div>
        </div>
    `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;


function addToCart(productId) {
    let matchingItem;

        cart.forEach((item) => {
            if (productId === item.productId){
                matchingItem = item; 
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                productId: productId,
                quantity: 1
            });
        }   

        saveToStorage();
}

function updateCartQuantity() {
    let cartQuantity = 0;

        cart.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}


    document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId; 

        addToCart(productId);
        updateCartQuantity(); 
        // console.log(productId);

        const parentContainer = button.closest('.row');
        const showToastDiv = parentContainer.querySelector('.showToast');

        // Toggle the visibility of the showToast div
        showToastDiv.style.display = 'block';

        // Set a timer to hide the showToast div after a few seconds (e.g., 3 seconds)
        setTimeout(() => {
            showToastDiv.style.display = 'none';
        }, 3000); // 3000 milliseconds (3 seconds)
         
    });
});

document.querySelectorAll('.display-product').forEach((a) => {
    a.addEventListener('click', () => {

        const productId = a.dataset.productId;

        let matchingId;

        products.forEach((product) => {
            if (productId === product.id){
                matchingId = product;
                console.log(matchingId);

            }
        
        });
       
        localStorage.setItem('productId', JSON.stringify(matchingId));
    
        window.open('sproduct.html');
    });
});

updateCartQuantity(); 

































//     let CartSummaryHTML = '';

//     cart.forEach((cartItem) => {
//         const productId = cartItem.productId;

//         let matchingProduct;
 
//         products.forEach((product) => {
//             if (product.id === productId){
//                 matchingProduct = product;
//             } 
//         });
 
//     CartSummaryHTML += `
//     <div class="pro-image">
//          <img src="${matchingProduct.image}" alt="">
//     </div>

//     <div class="single-prod-details">
//         <h6>Home / T-Shirt</h6>
//         <h3>${matchingProduct.name}</h3>
//         <h2>${matchingProduct.pricePeso}</h2>
//         <label>Size</label>
//         <select>
//             <option>XL</option>
//             <option>XXL</option>
//             <option>Small</option>
//             <option>Large</option>
//         </select>
//         <label>Quantity</label>
//         <input type="number" value="1">
//         <button class="add-to-cart">Add to Cart</button>
//         <h4>Product Details</h4>
//         <span>Conquer the great outdoors in our Adventure-Ready Outdoor Performance Tee. Crafted from moisture-wicking fabric, this t-shirt is designed to keep you cool and dry during your outdoor escapades. Its ergonomic fit and durability make it an ideal choice for hikers, campers, and outdoor enthusiasts.</span>
//     </div>
//     `;
    

// });
// console.log(CartSummaryHTML);
// document.querySelector('.js-order-summary').innerHTML = CartSummaryHTML;

