import products from "./exportFavorites.js";

const selectProducts = document.querySelector("#selectProducts");


products.forEach((product) => {
    selectProducts.innerHTML += `<div id="divProducts">
                            <div id="hearts">
                                <img src="/images/heart.png" alt="Image of heart, add to favorites" class="heart">
                                <img src="/images/clickedHeart.png" alt="Image of heart, add to favorites" class="clickedHeart">
                            </div>
                            <div id="productName">
                                <h2>${product.productName}</h2>
                            </div>
                            </div>
                            `;
});

const heart = document.querySelectorAll(".heart");

const clickedHeart = document.querySelectorAll(".clickedHeart");


console.dir(heart);


heart.forEach((clickHeart) => {
    clickHeart.addEventListener("click", function(e) {
        clickHeart.style.opacity = 0;
    });
});




/*
heart.addEventListener("click", function(e) {
    if (heart.click) {
        clickedHeart.style.opacity = 1;
    } else {
        clickedHeart.style.opacity = 0;
    }
});
*/
// console.dir(products);