/* ---- loader ---- */
const loadComponent = () => {
    const loader = document.getElementById( "loader" )

    setTimeout(() => {
        loader.classList.add( "hide" )
    }, 4000);
}

/* ---- dark mode ---- */
const themeIcon = document.getElementById("theme-btn")

themeIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark")

    if (themeIcon.classList.contains("bx-moon")) {
        themeIcon.classList.replace("bx-moon", "bx-sun")
    } else {
        themeIcon.classList.replace("bx-sun", "bx-moon")
    }
})


/* ---- carrito ---- */
const cart = document.getElementById("cart-container")
const shopIcon = document.getElementById("cart-shop")
const shopCloseIcon = document.getElementById("close-cart")

shopIcon.addEventListener("click", () => {
    cart.classList.remove("hide") 
})

shopCloseIcon.addEventListener( "click", () => {
    cart.classList.add("hide")
})

/* ---- Menu ---- */
const menu = document.getElementById("menu-container")
const menuIcon = document.getElementById("menu-category")
const menuCloseIcon = document.getElementById("close-menu")

menuIcon.addEventListener("click", () => {
    menu.classList.remove("hide")
})

menuCloseIcon.addEventListener("click", () => {
    menu.classList.add("hide")
})




/* ---- productos ---- */
const items = [
    {
        id: 1,
        name: 'Hoodies',
        price: 14.00,
        image: 'assets/img/featured1.png',
        category: 'hoodies',
        quantity: 10
    },
    {
        id: 2,
        name: 'Shirts',
        price: 24.00,
        image: 'assets/img/featured2.png',
        category: 'shirts',
        quantity: 15
    },
    {
        id: 3,
        name: 'Sweatshirts',
        price: 24.00,
        image: 'assets/img/featured3.png',
        category: 'shirts',
        quantity: 20
    }
]

const showProducts = () => {
    const productContainer = document.getElementById("products")

    let fragment = ``

    items.forEach( producto => {
        fragment += `
        <div class="item">
            <div class="product-card" id="${producto.id}">
                <img src="${producto.image}" alt="" class="product-img">
                
                <p class="product-price">$${producto.price.toFixed(2)}</p>
                <p class="product-stock"> Stock: <span class="product-stock-value">${producto.quantity}</span></p>
                <p class="product-name">${producto.name}</p>
                
                <i class='bx bx-plus circle'></i>
            </div>
        </div>
        `
    })

    productContainer.innerHTML = fragment
    


    /* Carrito */

    const addToCartButtons = document.querySelectorAll('.bx-plus');
    addToCartButtons.forEach((addToCartButton) => {
        addToCartButton.addEventListener("click", addToCartClicked );
    })
    
    function addToCartClicked(e) {
        const button = e.target;
        const item = button.closest(".item"); 
        

        const productName = item.querySelector(".product-name").textContent
        const price = item.querySelector(".product-price").textContent
        const productStock = item.querySelector(".product-stock-value").textContent
        const productImg = item.querySelector(".product-img").src; 


        addItemToShoppingCart(productName, productStock, price, productImg) 
    }


    const shoppingCartContainer = document.querySelector(".products-selected")
    
    function addItemToShoppingCart(productName, productStock, price, productImg){
        const shoppingCart = document.createElement('div')

        let cartContent = ``
        
        cartContent += `
        <div class="product-seleccion">
            <img src="${productImg}" alt="" class="img-prod">
            <div class="info-prod">
                <h3>${productName}</h3>
                <p class="stock-product">Stock: <span class="stock-product-value">${productStock}</span> <span class="product-price-value"> ${price}</span></p>
                <p class="subtotal-product">Subtotal: <span class="subtotal-product-value">${price}</span></p>
                <div class="amount-product">
                    <i class='bx bx-minus bx-border'></i>
                    <input class="amount" type="number" value="1">
                    <i class='bx bx-plus bx-border'></i>
                    <i class='bx bx-trash-alt'></i>
                </div>
            </div>
        </div>
        `;
        shoppingCart.innerHTML = cartContent
        shoppingCartContainer.append(shoppingCart)

        const deleteItem = document.querySelector('.bx-trash-alt')
        deleteItem.addEventListener('click', removeShoppingCartItem)

        updateShoppingCartTotal()
    } 

    function updateShoppingCartTotal(){
        let total = 0

        const shoppingCartTotal = document.querySelector('.total')
        
        const shoppingCartItems = document.querySelectorAll('.products-selected')
        
        shoppingCartItems.forEach(shoppingCartItem => {
            const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.product-price-value')
            const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', ''))
            
            const shoppingCartItemStockElement = shoppingCartItem.querySelector('.amount')
            const shoppingCartItemStock = Number(shoppingCartItemStockElement.value)

            total = total + (shoppingCartItemPrice*shoppingCartItemStock)
            /* console.log(total) */ 
        }) 
        shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`
    }


    function removeShoppingCartItem(e){
        const buttonClicked = e.target
        buttonClicked.closest('.product-seleccion')
        console.log(buttonClicked);
    }



}

    









document.addEventListener("DOMContentLoaded", () =>{
    loadComponent()
    showProducts()
})