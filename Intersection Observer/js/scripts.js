const sectionOne = document.querySelector('.section1');
const sectionTwo = document.querySelector('.section2');
const sectionThree = document.querySelector('.section3');
const sectionFour = document.querySelector('.section4');
const sectionFive = document.querySelector('.section5');
const sections = document.querySelectorAll('.section');

const options = {
    root: null, // it is the viewport
    threshold: 0,
    rootMargin: "400px"
};

const observer = new IntersectionObserver(function(entries,observer){

    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        entry.target.classList.add('fade');
        console.log(entry);
        observer.unobserve(entry.target);
    });

},options);

sections.forEach(section => {

    observer.observe(section);

});