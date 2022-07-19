const slideContent = document.querySelector('.slid__flex_column');

const contentData = [
    {
        mainTitle: "포르쉐타고 아우토반 달려볼래요?",
        subTitle: "from $599 per adult (범칙금 포함)",
        img: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
    },
    {
        mainTitle:"런던에서 가장 인기있는 헤어스타일",
        subTitle: "from $250 per adult",
        img: "https://images.unsplash.com/photo-1658114675929-5faae0441b7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
    {
        mainTitle: "사랑하는 사람과 떠나는 피크닉",
        subTitle: "from $80 per adult",
        img: "https://images.unsplash.com/photo-1596120236172-231999844ade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    },
    {
        mainTitle: "타이슨 부럽지 않은 나의 불꽃 주먹",
        subTitle: "from $52 per adult",
        img: "https://images.unsplash.com/photo-1657664065994-5e257c88b7f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1683&q=80"
    },
    {
        mainTitle: "오늘은 조용히 독서할래요",
        subTitle: "free",
        img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1890&q=80"
    },
    {
        mainTitle: "파도치는 해변가를 걸어볼래요!",
        subTitle: "from $19.99 per adult",
        img: "https://images.unsplash.com/photo-1597116635010-8b65f0dce76c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80"
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