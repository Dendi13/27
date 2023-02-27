let parent = document.querySelector('.nav__list');
let element = document.querySelector('.nav__item');
let link = document.querySelector('.nav__link');
let btn = document.querySelector('.btn');
let form = document.querySelector('.form');

parent.addEventListener('click', function (event) {
    let currentElement = event.target;
    for (let el of element) {
        classList.parentElement().remove('active');
        currentElement.classList.add('active');
    }
})

btn.addEventListener('click', function () {
    currentElement.classList.add('active');

})