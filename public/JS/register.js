const registerIinputContainer = document.querySelector(".register__input__container");
const loginGoogle = document.querySelector(".login__google");
const recommandPhoto = document.querySelector(".recommandPhoto");
const recommandForm = document.querySelector(".recommandForm");

loginGoogle.addEventListener('click', () => {
    registerIinputContainer.classList.toggle("register__input__container__display");
});



