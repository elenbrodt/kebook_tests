const numero = document.getElementById("quantidade");
const left = document.getElementById("left");
const right = document.getElementById("right");

const input = document.getElementById("slider");

const btn_monthly = document.querySelector(".btn_monthly");
const btn_annuity = document.querySelector(".btn_annuity");

const monthly = document.querySelector("#monthly");
const annuity = document.querySelector("#annuity");

const price = document.querySelector(".price span");

var count = 1;
var toggle = true;
var total = 246.41;

left.onclick = () =>{
    decreaseProfiles();
}
right.onclick = () => {
    increaseProfiles();
}

function decreaseProfiles (){
    if (count > 1){
        count = parseInt(count) - 1;
        numero.innerHTML = `${count}`;
        slider.value = count;
        changePrice();
    }
}

function increaseProfiles (){
    if (count < 10){
        count = parseInt(count) + 1;
        numero.innerHTML = `${count}`;
        slider.value = count;
        changePrice();
    } 
}

slider.onchange = ()=> {
    count = slider.value;
    numero.innerHTML = `${count}`;
    changePrice();
}

btn_monthly.onclick = () => {
    toggle = !toggle;
    changeBackground();
    changePrice();
}
btn_annuity.onclick = () => {
    toggle = !toggle;
    changeBackground();
    changePrice();
}

function changeBackground(){
    if (toggle){
        btn_monthly.style.background = "linear-gradient(to right,#c86ef9 , #7839dd)";
        btn_annuity.style.background = "#F1EAF7";
        monthly.style.display = "block";
        annuity.style.display = "none";
    }else{
        btn_annuity.style.background = "linear-gradient(to right,#c86ef9 , #7839dd)";
        btn_monthly.style.background = "#F1EAF7";
        annuity.style.display = "block";
        monthly.style.display = "none";
    }
}

function changePrice(){
    if (toggle){
        if (count<5){
            price.innerHTML = `${total*count}`;
        }
        if (5<= count && count< 10 ){
            price.innerHTML = `${((total*count)-((total*count)*0.05)).toFixed(2)}`;
        }
        if (count == 10){
            price.innerHTML = `${((total*count)-((total*count)*0.07)).toFixed(2)}`;
        }
    }else {
        if (count<5){
            price.innerHTML = `${((total*count)-((total*count)*0.05)).toFixed(2)}`;
        }
        if (5<= count && count< 10 ){
            price.innerHTML = `${((total*count)-((total*count)*0.07)).toFixed(2)}`;
        }
        if (count == 10){
            price.innerHTML = `${((total*count)-((total*count)*0.01)).toFixed(2)}`;
        }
    }
}

