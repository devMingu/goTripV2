const slideContent = document.querySelector('.slid__flex_column');

const contentData = [
    {
        mainTitle: "서울 도심 하루종일 투어 (점심 포함)",
        subTitle: "from $204 per adult",
        img: "https://images.unsplash.com/photo-1603852452515-2dc92bd9c6f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
    },
    {
        mainTitle: "서울에서 가장 높은 타워 (전망대 포함)",
        subTitle: "from $102 per adult",
        img: "https://images.unsplash.com/photo-1624079569473-fbb97980a4f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
    },
    {
        mainTitle: "한국 스타일의 고깃집",
        subTitle: "from $120 per adult",
        img: "https://images.unsplash.com/photo-1586058584825-c1e87ed735b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80"
    },
    {
        mainTitle: "서울의 문화 그리고 산책",
        subTitle: "from $52 per adult",
        img: "https://images.unsplash.com/photo-1618061579334-0f147abd12c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
    },
    {
        mainTitle: "서울 도심 반나절 투어",
        subTitle: "from $204 per adult",
        img: "https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
    },
    {
        mainTitle: "서울의 돌담길 체험하기",
        subTitle: "from $12 per adult",
        img: "https://images.unsplash.com/photo-1525147920934-584b18419214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80"
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