let rotate = document.querySelector('.rotate');
let slidesInd = document.querySelectorAll('.slide');
let tamanoWidth = slidesInd[0].clientWidth;
let contador = 1;
const intervalo = 3000;

window.addEventListener("resize",function(){
    tamanoWidth = slidesInd[0].clientWidth;
});

setInterval(()=>{
    slides();
},intervalo);

function slides(){
    
    if(contador >= slidesInd.length){
        contador = 0;
    }
    rotate.style.transform = `translate(${ -tamanoWidth * contador}px)`;
    //alert(`contador es ${contador} y largo ${slidesInd.length}`)
    if(contador == 0){
        rotate.style.transition = "transform 0s ease-in-out";
    }else{
        rotate.style.transition = "transform 1s ease-in-out";
    }
    
    contador++;

}