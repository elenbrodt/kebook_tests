const numero = document.getElementById("quantidade");
const left = document.getElementById("left");
const right = document.getElementById("right");

const progressBefore = document.querySelector(".progress-before");
const progressAfter = document.querySelector(".progress-after");

const input = document.getElementById("slider");

const btn_monthly = document.querySelector(".btn_monthly");
const btn_annuity = document.querySelector(".btn_annuity");

const monthly = document.querySelector(".monthly");
const annuity = document.querySelector(".annuity");

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
        input.value = count;
        changePrice();
        left.setAttribute("disabled", "false");
    }if (count ===1){
        left.setAttribute("disabled", "true");
    }
}

function increaseProfiles (){
    if (count < 10){
        count = parseInt(count) + 1;
        numero.innerHTML = `${count}`;
        input.value = count;
        changePrice();
    } 
}

input.addEventListener('input', handleInputChange);
right.addEventListener('click', change)
left.addEventListener('click', change)

function change () {
    const result = percentageChange(count);
    progressBefore.style.width = result+'%';
    progressAfter.style.width = (100-result)+'%';
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

function percentageChange (num){
    return (num-1)/(9)*100 ;
}

function handleInputChange(e) {
    let target = e.target;
    count = target.value;
    const result = percentageChange(count);
    progressBefore.style.width = result+'%';
    progressAfter.style.width = (100-result)+'%';
    numero.innerHTML = `${count}`;
    changePrice();
}

function changeBackground(){
    if (toggle){
        btn_monthly.style.background = "linear-gradient(to right,#c86ef9 , #7839dd)";
        btn_annuity.style.background = "white";
        monthly.style.display = "block";
        annuity.style.display = "none";
        btn_annuity.style.color = "#8A898D";
        btn_monthly.style.color = "white";
    }else{
        btn_annuity.style.background = "linear-gradient(to right,#c86ef9 , #7839dd)";
        btn_monthly.style.background = "white";
        annuity.style.display = "block";
        monthly.style.display = "none";
        btn_monthly.style.color = "#8A898D";
        btn_annuity.style.color = "white";
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

