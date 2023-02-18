const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");
const searchBox = document.querySelector(".search-box");

var toggle = true;

searchIcon.onclick=()=>{
    if (toggle){
        openSearchInput();
    } 
    else{
        closeSearchInput ();
    } 
}

function openSearchInput (){
    searchInput.style.display = "inline";
    toggle = !toggle;
}

function closeSearchInput (){
    searchInput.style.display = "none";
    toggle = !toggle;
}