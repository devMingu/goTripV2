const onTitle = document.querySelector(".onTitle");
const tripContentOne = document.querySelector(".tripContentOne");
const spainCampingIcon = document.querySelector(".spainCampingIcon");
const tripContentOneTitle = document.querySelector(".tripContentOneTitle");
const tripContentSubTitle = document.querySelector(".tripContentSubTitle");

const spainContextDate = [
    {
        oneTitle: "열정 가득한 나라",
        oneTitles: "뜨거운 열정 속으로",
        subTitle: "인천에서 마드리드 대한항공 직항으로 이용해보세요",
        imgUrl: "testUrl1",
    },
    {
        oneTitle: "신혼여행 추천지",
        oneTitles: "스페인만의 특별한 경험",
        subTitle: "마고트립에서만 제공하는 신혼여행 패키지",
        imgUrl: "testUrl2",
    },
    {
        oneTitle: "따스한 햇살 아래",
        oneTitles: "잘익은 과일들의 축제",
        subTitle: "스페인의 토마토 축제가 궁금하다면?",
        imgUrl: "testUrl3",
    },
]



const iconClick = () => {
    console.log("ICON CLICKED");
    // spainCampingIcon.classList.toggle('hide');

    const ran = Math.floor(Math.random() * 3);
    console.log(ran);

    tripContentOne.classList.toggle(`${spainContextDate[ran].imgUrl}`);
    tripContentOneTitle.textContent = spainContextDate[ran].oneTitle;
    onTitle.textContent = spainContextDate[ran].oneTitles;

    tripContentSubTitle.textContent = spainContextDate[ran].subTitle;
};

onTitle.addEventListener('click', iconClick);

