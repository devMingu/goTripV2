const homeDropDown = document.querySelector('.homeDropDown');
const homeDropDownDiv1 = document.createElement('div');
const homeDropDownDiv2 = document.createElement('div');

console.log("HELLO WORLD");

const homeCountryData = [
    {
        country: '프랑스',
        city:'파리'
    },
];

homeDropDownDiv1.textContent = homeCountryData[0].country;
homeDropDownDiv2.textContent = homeCountryData[0].city;

homeDropDownDiv2.classList.add('dropDownCity');
homeDropDown.appendChild(homeDropDownDiv1);
homeDropDown.appendChild(homeDropDownDiv2);
