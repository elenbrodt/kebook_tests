const numero = document.getElementById("quantidade");
const left = document.getElementById("left");
const right = document.getElementById("right");

const input = document.getElementById("slider");

var count = 1;

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


