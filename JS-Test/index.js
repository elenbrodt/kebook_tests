const numero = document.getElementById("quantidade");
const left = document.getElementById("left");
const right = document.getElementById("right");

const input = document.getElementById("slider");

const btn_monthly = document.querySelector(".btn_monthly");
const btn_annuity = document.querySelector(".btn_annuity");

const monthly = document.querySelector("#monthly");
const annuity = document.querySelector("#annuity");

var count = 1;
var toggle = true;

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
    }
}

function increaseProfiles (){
    if (count < 10){
        count = parseInt(count) + 1;
        numero.innerHTML = `${count}`;
        slider.value = count;
    } 
}

slider.onchange = ()=> {
    count = slider.value;
    numero.innerHTML = `${count}`;
}

btn_monthly.onclick = () => {
    toggle = !toggle;
    changeBackground();
}
btn_annuity.onclick = () => {
    toggle = !toggle;
    changeBackground();
}

function changeBackground(){
    if (toggle){
        btn_monthly.style.background = "linear-gradient(to right,#c86ef9 , #7839dd)";
        btn_annuity.style.background = "#F1EAF7";
        annuity.style.display = "none";
        monthly.style.display = "block";
    }else{
        btn_annuity.style.background = "linear-gradient(to right,#c86ef9 , #7839dd)";
        btn_monthly.style.background = "#F1EAF7";
        monthly.style.display = "none";
        annuity.style.display = "block";
    }
}
    

