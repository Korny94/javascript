import { onClick } from "../listeners/onClick.js";

export function renderUser(user, parentElement) {
    const userHTML = createHtmlObject(user);
    parentElement.append(userHTML);
}

export function renderUsers(users, parentElement) {
    users.forEach(function(user) {
        renderUser(user, parentElement);
    })
}

export function createColumn() {
    const element = document.createElement("div");
    element.classList.add("col");
    return element;
}

export function createCard(children) {
    const element = document.createElement("div");
    element.classList.add("card");

    const childElement = document.createElement("div");
    childElement.classList.add("card-body");

    childElement.append(...children);

    element.append(childElement);

    return element;
}

export function createCardTitle(titleText) {
    const element = document.createElement("h5");
    element.classList.add("card-title");
    element.innerText = titleText;
    return element;
}

export function createCardSubtitle(subtitleText) {
    const element = document.createElement("h6");
    element.classList.add("card-subtitle");
    element.innerText = subtitleText;
    return element;
}

export function createCardText(cardText) {
    const element = document.createElement("p");
    element.classList.add("card-text");
    element.innerText = cardText;
    return element;
}

export function createCardLink(linkText, linkUrl) {
    const element = document.createElement("a");
    element.classList.add("card-link");
    element.innerText = linkText;
    element.href = linkUrl;
    return element;
}

export function createBootstrapElement(tagname, classes, children, text, link) {
    const element = document.createElement(tagname);

    if (Array.isArray(classes) && classes.length) {
        element.classList.add(classes)
    }

    if (Array.isArray(children) && children.length) {
        element.classList.add(children)
    }
}

export function createHtmlObject(user) {
    const fullName = user.name.first + " " + user.name.last;
    const premium = user.account.premium ? "Premium User" : "Free User";


    const title = createCardTitle(fullName);
    const subtitle = createCardSubtitle(premium);
    const text = createCardText(user.account.created.toLocaleString());
    const email = createCardLink(user.contact.email, "mailto:${user.contact.email}");
    const phone = createCardLink(user.contact.phone, "tel:${user.contact.phone}");

    const childItems = [title, subtitle, text, email, phone];

    const col = createColumn();
    const card = createCard(childItems);
    col.append(card);

    return col;
}

export function clearUserList(parentElement) {
    parentElement.innerHTML = "";
}

