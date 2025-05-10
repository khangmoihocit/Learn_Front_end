import { fetchApi } from "./helper/fetchApi.js";
// fetch("https://dummyjson.com/products/categories")
//     .then(response => response.json())
//     .then(data => {
//         let htmls = "";
//         data.forEach(item => {
//             htmls += `<div class="category-item">${item.name}<\div>`;
//         });
//         console.log(data);
//         const divCategory = document.querySelector("#category");
//         divCategory.innerHTML = htmls;
//     })

//Get Product
fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
        console.log(data.products);
        let htmls = "";
        data.products.forEach(item => {
            htmls += `
            <div class="product-item">
                <img src="${item.images[0]}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>$${item.price}/p>
            </div>
            `;
        });

        const divProduct = document.querySelector("#products");
        divProduct.innerHTML = htmls;
    })
//End get product

// cach dung fetch api
// fetchApi("https://dummyjson.com/products")
//     .then(data => {
//         console.log(data.products);
//         let htmls = "";
//         data.products.forEach(item => {
//             htmls += `
//             <div class="product-item">
//                 <img src="${item.images[0]}" alt="${item.title}">
//                 <h3>${item.title}</h3>
//                 <p>$${item.price}/p>
//             </div>
//             `;
//         });

//         const divProduct = document.querySelector("#products");
//         divProduct.innerHTML = htmls;
//     })

