/*
- When a user selects a number from the select box, build a number of anchor tags (a elements) that matches the selected number
- The anchor tags should link to the details page with the id in the query string
- On the details page retrieve the id from the query string
- Add the id to the URL below, make an API call using the final url and display the title and author of the selected book
https://api.noroff.dev/api/v1/books
*/

const numBooks = document.querySelector("#selectNumBooks");

const numSquares = document.querySelector("#apiCall1");

const bookDetails = document.querySelector("#bookDetails")

const url12 = "https://api.noroff.dev/api/v1/books";

async function getBooks() {

    try {
        const response = await fetch(url12);
        const json = await response.json();
    
        console.log(json);

        for (let i = 0; i < json.length; i++) {
        }

        numBooks.onchange = function() {
            let bookValue = numBooks.value;
            console.log(bookValue);
        
            numSquares.innerHTML = "";
        
            for (let i = 1; i < bookValue; i++) {
                numSquares.innerHTML += `
                <a href="../apiBooks.html?id=${json[i].id}" class="bookNum">${i}</a>
            `;
            }
        
        }
    } catch(err) {
        numSquares.innerHTML = "There was an error: " + err;
    }

}

getBooks();


const url13 = "https://api.noroff.dev/api/v1/books/";

const queryString2 = document.location.search;

const params2 = new URLSearchParams(queryString2);

const id2 = params2.get("id");

console.log(id2)


async function fetchBook() {
    
    try {
        bookDetails.classList.remove("loading");
        const response = await fetch(url13 + id2)
        const json = await response.json();
        console.log(json);

        bookDetails.innerHTML = `
        <p>Selected id: ${json.id}</p>
        <h1>${json.title}</h1>
        <p>Author: ${json.author}</p>
        `;
    } catch(err) {
        console.log("EEERRROOOOR: ", err);
    }

}

setTimeout(function() {
    fetchBook();
}, 500)


