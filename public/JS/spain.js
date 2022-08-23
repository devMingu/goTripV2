const onTitle = document.querySelector(".onTitle");
const tripContentOne = document.querySelector(".tripContentOne");
const spainCampingIcon = document.querySelector(".spainCampingIcon");
const tripContentOneTitle = document.querySelector(".tripContentOneTitle");
const tripContentOneTitles = document.querySelector('.tripContentOneTitles');
const tripContentSubTitle = document.querySelector(".tripContentSubTitle");

const iconClick = () => {
    console.log("ICON CLICKED");
    tripContentOne.classList.toggle('testUrl');
    spainCampingIcon.classList.toggle('hide');
    tripContentOneTitle.textContent = "열정 가득한 나라";
    tripContentOneTitles.textContent = "뜨거운 열정 속으로"
    tripContentOneTitles.classList.add('tripTitleContentCntName');
    tripContentSubTitle.textContent = "인천에서 마드리드 대한항공 직항으로 이용해보세요"
};

onTitle.addEventListener('click', iconClick);

