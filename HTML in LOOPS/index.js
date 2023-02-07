import users from "./data/users.js"
import { onSearch } from "./listeners/onSearch.js";
import { renderUsers, clearUserList } from "./render/user.js"


const parent = document.querySelector(".user-list-row")

clearUserList(parent);

renderUsers(users, parent);

const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

searchForm.addEventListener("change", function(event) {
    onSearch(event, parent, users);
});