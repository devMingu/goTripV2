const slideContent = document.querySelector('.slid__flex_column');

const contentData = [
    {
        mainTitle: "서울 도심에서 만나는 과거",
        subTitle: "과거와 현재 미래가 공존하는 서울",
        img: "https://images.unsplash.com/photo-1603852452515-2dc92bd9c6f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
    },
    {
        mainTitle: "높이 555m의 초고층 빌딩",
        subTitle: "롯데월드타워를 가보는것도 좋은 경험입니다",
        img: "https://images.unsplash.com/photo-1624079569473-fbb97980a4f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
    },
    {
        mainTitle: "한국 스타일의 비비큐",
        subTitle: "한국에 왔으면 고기를 먹어줘야죠!",
        img: "https://images.unsplash.com/photo-1586058584825-c1e87ed735b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80"
    },
    {
        mainTitle: "한강은 산책하기 좋은 공간입니다",
        subTitle: "자전거를 타도 좋을것 같네요",
        img: "https://images.unsplash.com/photo-1618061579334-0f147abd12c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
    },
    {
        mainTitle: "서울 도심 반나절 투어",
        subTitle: "서울의 밤은 또 다른 모습입니다",
        img: "https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
    },
    {
        mainTitle: "서울의 과거 체험하기",
        subTitle: "과거가 그대로 보존되어있습니다",
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