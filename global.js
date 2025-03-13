console.log("IT'S ALIVE");

var x=0;

x = x+3

console.log(x)


function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a");
let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);
currentLink?.classList.add("current");
console.log(navLinks);

let pages = [
    {url: "../", title : "Home"},
    {url: "../contact/", title : "contact"},
    {url: "../projects/", title : "Projects"}
    
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
    let url = p.url;
    let title = p.title;
    // Create link and add it to nav
    nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );
}