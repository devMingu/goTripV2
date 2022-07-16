const slideContent = document.querySelector('.slid__flex_column');

const contentData = [
    {
        mainTitle: "파리에서 즐기는 한가로운 오후",
        subTitle: "from $204 per adult",
        img: "https://images.unsplash.com/photo-1493707553966-283afac8c358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
        mainTitle: "틱톡..틱톡... 종소리가 들리시나요? 런던에서 즐기는 빅벤 체험",
        subTitle: "from $102 per adult",
        img: "https://images.unsplash.com/photo-1562274419-949e955f11e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1322&q=80"
    },
    {
        mainTitle: "이번역은 융프라우역입니다. 스위스에 오신것을 환영합니다.",
        subTitle: "from $240 per adult",
        img: "https://images.unsplash.com/photo-1585821244330-7029d402beb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80"
    },
    {
        mainTitle: "기차 타고 즐기는 여행",
        subTitle: "from $52 per adult",
        img: "https://images.unsplash.com/photo-1563129972-5a5b526c630c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80"
    },
    {
        mainTitle: "현지인처럼 베니스 100배 즐겨보기",
        subTitle: "from $204 per adult",
        img: "https://images.unsplash.com/photo-1553174733-117286fd10ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1279&q=80"
    },
    {
        mainTitle: "영국에 왔으면 축구경기 보고 가야죠",
        subTitle: "from $430 per adult",
        img: "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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