import users from "./data/users.js"

import { renderUsers, clearUserList } from "./render/user.js"

const parent = document.querySelector(".user-list-row")

clearUserList(parent);

renderUsers(users, parent);