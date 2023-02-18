const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");
const searchBox = document.querySelector(".search-box");
const ul = document.querySelector("ul");
const nav = document.querySelector("nav");
const checkbox = document.querySelector(".checkbox");
const modalCategory = document.querySelector(".modal-category");
var toggle = true;

searchIcon.onclick=()=>{
    if (toggle){
        openSearchInput();
    } 
    else{
        closeSearchInput ();
    } 
}

checkbox.onclick = ()=>{
    if (toggle){
        modalCategory.style.display = 'flex';
        toggle = !toggle;
    } 
    else{
        modalCategory.style.display = 'none';
        toggle = !toggle;
    } 
}

function openSearchInput (){
    searchInput.style.display = "inline";
    ul.style.justifyContent = "center";
    ul.style.gap = "40px";
    ul.style.width = "600px";
    nav.style.justifyContent = "center";

    toggle = !toggle;
}

function closeSearchInput (){
    searchInput.style.display = "none";
    toggle = !toggle;
}