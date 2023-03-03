let parent = document.querySelector('.nav__list');
let element = document.querySelector('.nav__item');
let link = document.querySelector('.nav__link');
let myBtn = document.querySelector('#myBtn');
let Myform = document.querySelector('.form');
let orderNow = document.querySelector('#orderNow');
let btnOkn = document.querySelector('#btnOkn');
let popup = document.querySelector('.popup');
let form__close = document.querySelector('.form__close');
let form__input = document.querySelector('.form__input');
let popup__msg = document.querySelector('.popup__msg');
let form__row = document.querySelector('.form__row')



parent.addEventListener('click', function(event) {
    let currentElement = event.target;
    console.log(event.target)
    for( let el of element) {
        el.parentElement.classList.remove('active');
        currentElement.parentElement.classList.add('active');
    }
})

orderNow.addEventListener('click', function (evt) {
    evt.preventDefault();
    Myform.classList.add('active')
    btnOkn.addEventListener('click', function(evt) {
        evt.preventDefault();
        Myform.classList.remove('active');
        popup.classList.add('active');
        popup__msg.textContent = `Уважаемый ${form__input.value}, спасибо за заказ: ${form__row.value}`;
    })
    form__close.addEventListener('click', function(evt) {
        evt.preventDefault();
        Myform.classList.remove('active');
        popup.classList.remove('active');
    })
})