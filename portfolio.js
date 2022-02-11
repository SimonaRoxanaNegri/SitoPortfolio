


document.addEventListener('scroll', () => {
    let barNav = document.querySelector("nav");
    let scrolled = window.pageYOffset;
    if (scrolled > 130) {
        barNav.classList.add('bg-white', 'border-nav-shadow');
        barNav.classList.remove('bg-trasparent');
    }
    else {
        barNav.classList.add('bg-trasparent');
        barNav.classList.remove('bg-white', 'border-nav-shadow');
    }
})

//CATEGORIES 

/* function createCategories() {
    let category = document.getElementById("list_categories")
    category.innerHTML = ""
    categories.forEach(function (el1) {
        let item = document.createElement("a")
        item.setAttribute("href", "#")
        item.classList.add("categories")
        item.innerHTML = ` ${el1} `
        category.appendChild(item)
    })
    return category
}
let categories = ['Sviluppo Siti', 'Lavori Grafici', 'Sviluppo App']
let elems = createCategories(categories)
let listCategories = document.getElementById("list_categories").append(elems)
document.getElementById("list_categories").innerHTML = listCategories */

/* const fetch = require('node-fetch');*/

fetch('./progetti.json')
    .then(response => response.json())
    .then(data => {
        const categories = Array.from(new Set(data.map(el => el.category)))
        let listCategories = document.getElementById("list_categories")
        categories.forEach(el => {
            let div = document.createElement("div")
            div.innerHTML = `<button name="categories" class="btn categories" type="button" id="${el}">${el}</button>`;
            listCategories.appendChild(div)

        })

        //TUTTI GLI ELEMENTI
        let all = document.createElement("div")
        all.innerHTML = `<button type="button" name="categories" id="all" class="btn categories">Tutti i progetti</button>`;
        listCategories.appendChild(all)

        //FILTRI

        const filters = document.querySelectorAll("[name=categories]")
        filters.forEach(el => {
            el.addEventListener('click', () => {
                let clickedCategory = el.id
                if (clickedCategory != "all") {
                    const filteredProducts = data.filter(prodotti => prodotti.category == clickedCategory)
                    showProducts(filteredProducts)
                } else {
                    showProducts(data)
                }
            })
        })


        let productsWrapper = document.getElementById("productswrapper")
        function showProducts(products) {
            productsWrapper.innerHTML = ""
            products.forEach(el => {
                let div = document.createElement("div")
                div.classList.add("col-12", "col-md-5", "col-lg-4", "mx-3", "px-4", "card-project", "my-5")
                div.innerHTML = `
                   
                <p class="fw-bold ">${el.category}</p>
                <h3 class="fs-5 ">${el.name}</h3>
                <div class="text-end "><a class="text-decoration-none"
                        href="${el.url}" target="_blank"><span
                            class="fs-5 button-custom">
                                Guarda
                        </span></a>
                    <img src="media/right-arrow.svg" alt="freccia" class="img-fluid w-socials me-0 ms-3">
                    </a>
                </div>
            `;

                productsWrapper.appendChild(div)

            })
        } showProducts(data);
    })



    




