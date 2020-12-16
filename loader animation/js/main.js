const numb = document.querySelector('.numb p');
const circular = document.querySelector('.circular');
const left = document.querySelector('.left .progress');
const right = document.querySelector('.right .progress');
let counter = 0.0;

const options = {
    root: null, // it is the viewport
    threshold: 0.5,
    rootMargin: "0px"
};

const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        left.style.animation = 'left 1.5s linear both';
        right.style.animation = 'right 1s linear 1.5s both';
        setInterval(()=>{
            if((Math.round(counter)/10) == 4.7){
                clearInterval();
            }else{
                counter += 0.1;
                numb.textContent = (Math.round(counter)/10);
            }
        },5);
        observer.unobserve(entry.target);
    });
},options);

observer.observe(circular);