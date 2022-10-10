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


document.addEventListener("DOMContentLoaded", () =>{
    loadComponent()
})