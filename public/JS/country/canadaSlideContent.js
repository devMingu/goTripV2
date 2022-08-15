const slideContent = document.querySelector('.slid__flex_column');

const contentData = [
    {
        mainTitle: "인접한 바다에서 요트타고 즐기기",
        subTitle: "토론토를 즐기는 가장 좋은 방법입니다",
        img: "https://images.unsplash.com/photo-1603466182843-75f713ba06b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        mainTitle: "여행자를 위한 완벽한 교통수단",
        subTitle: "이동에 부담 가지지 마세요",
        img: "https://images.unsplash.com/photo-1572626360141-63c9b829c006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
    {
        mainTitle: "일급 청정 빙하수 마시기",
        subTitle: "건강에 좋은 미네랄이 함유되어있어요",
        img: "https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
    {
        mainTitle: "토론토 블루제이스 스타디움",
        subTitle: "류현진 선수의 홈구장",
        img: "https://images.unsplash.com/photo-1503638454472-b9c1ed258357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
    },
    {
        mainTitle: "트램타고 즐기는 투어",
        subTitle: "트램은 블럭사이를 움직일때 매우 유용해요",
        img: "https://images.unsplash.com/photo-1551384051-584c2ce18d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
    {
        mainTitle: "야생동물과의 공존",
        subTitle: "자연이 지켜지는 캐나다에는 야생동물이 많아요",
        img: "https://images.unsplash.com/photo-1500479694472-551d1fb6258d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        mainTitle: "승우아빠의 유학생활",
        subTitle: "승우아빠는 캐나다에서 직장생활을 했어요",
        img: "https://images.unsplash.com/photo-1496931149846-1086f9e651ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
];

for(let i=0 ; i<contentData.length ; i++){
    const divTag1 = document.createElement('div');
    const divTag2 = document.createElement('div');
    const divTag3 = document.createElement('div');
    const imgTag = document.createElement('img');
    const h3Tag = document.createElement('h3');
    const h5Tag = document.createElement('h5');

    imgTag.src = contentData[i].img;
    h3Tag.textContent = contentData[i].mainTitle;
    h5Tag.textContent = contentData[i].subTitle;

    divTag1.classList.add("slideTourBox");
    
    divTag2.appendChild(imgTag);
    divTag3.appendChild(h3Tag);
    divTag3.appendChild(h5Tag);

    divTag1.appendChild(divTag2);
    divTag1.appendChild(divTag3);

    slideContent.appendChild(divTag1);
}