const loadComponent = () => {
    const loader = document.getElementById( "loader" )

    setTimeout(() => {
        //Agrega la clase 'hide' al elemento loader
        loader.classList.add( "hide" )
    }, 4000);
}

const themeIcon = document.getElementById("theme-btn")

themeIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark")

    if (themeIcon.classList.contains("bx-moon")) {
        themeIcon.classList.replace("bx-moon", "bx-sun")
    } else {
        themeIcon.classList.replace("bx-sun", "bx-moon")
    }
})

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
    const productContainer = document.getElementById("products-list")

    let fragment = ``

    items.forEach( producto => {
        fragment += `
        <div class="product-card" id="${producto.id}">
            <img src="${producto.image}" alt="" class="product-img">
            <p class="product-price">$${producto.price} <span class="product-stock">stock: ${producto.quantity}</span></p>
            <p>${producto.name}</p>
            <button class="btn-add">+</button>
        </div>
        `
    })

    productContainer.innerHTML = fragment
}

document.addEventListener("DOMContentLoaded", () =>{
    loadComponent()
    showProducts()
})