const heart = document.querySelector("#heart");

const heartClick = document.querySelector("#heartClick");

const clickedHeart = document.querySelector("#clickedHeart");

const favorites = document.querySelector("#favorites");

const divProduct = document.querySelector("#divProducts");

function isChecked() {
    if(heartClick.checked) {
        clickedHeart.style.opacity = 1;
    } else {
        clickedHeart.style.opacity = 0;
    }
}