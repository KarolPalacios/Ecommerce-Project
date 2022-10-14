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
                
                <p class="product-price">$${producto.price} <span class="product-stock">Stock: ${producto.quantity}</span></p>
                <p class="product-name">${producto.name}</p>
                
                <i class='bx bx-plus'></i>
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
        console.log(item);


        const productName = item.querySelector(".product-name").textContent
        const price = item.querySelector(".product-price").textContent
        const productImg = item.querySelector(".product-img").src; 


        addItemToShoppingCart(productName, price, productImg) 
    }


    const shoppingCartContainer = document.querySelector(".products-selected")
    function addItemToShoppingCart(productName, price, productImg){
        const ShoppingCart = document.createElement('div')

        let cartContent = ``
        
        cartContent += `
        <div class="product-seleccion">
            <img src="${productImg}" alt="" class="img-prod">
            <h3>${productName}</h3>
                <p>${price}</p>
            
        </div>
        `;
        ShoppingCart.innerHTML = cartContent
        shoppingCartContainer.append(ShoppingCart)
    } 
}

    /* Carrito */
    /* showProducts() */

    /* const addToCartButtons = document.querySelectorAll('.bx-plus');
    addToCartButtons.forEach((addToCartButton) => {
        addToCartButton.addEventListener("click", addToCartClicked );
    })
    
    function addToCartClicked(e) {
        const button = e.target;
        console.log(button);
    } */




/* addToCartBtn.forEach((addButton) => {
    addButton.addEventListener('click', addToCartClicked );
}) */

/* function addToCartClicked(e){
    const button = e.target
    const item = button.closest('.products')
    console.log(item);
} */ 




document.addEventListener("DOMContentLoaded", () =>{
    loadComponent()
    showProducts()
})