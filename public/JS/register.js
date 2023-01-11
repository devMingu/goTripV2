const registerIinputContainer = document.querySelector(".register__input__container");
const loginGoogle = document.querySelector(".login__google");



loginGoogle.addEventListener('click', () => {
    registerIinputContainer.classList.toggle("register__input__container__display");
})