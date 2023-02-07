import { clearUserList, renderUsers } from "../render/user.js";


export function onSearch(event, parentElement, userList) {
    const target = event.target;
    const value = target.value;

    const filteredListOfUsers = filterListBasedOnSearch(userList, value);
    clearUserList(parentElement);
    renderUsers(filteredListOfUsers, parentElement);

    // Filter the array of user items
    // Based on the search term provided
    // Render the new filtered list
}

export function filterListBasedOnSearch(users, term) {
    users.filter(function(user) {
        term = term.toLowerCase().trim();

        const valuesToCheck = [user.name.first, user.name.last];

        const matchingValues = valuesToCheck.filter(function(value) {
            value = value.toLowerCase().trim();
            return value.includes(term);
        })

        return matchingValues.length
    })
}