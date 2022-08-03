const countyContentBody = document.querySelector(".countyContentBody");

const europeData = [
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1565881606991-789a8dff9dbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80",
        link: "https://kr.france.fr/ko",
        title: "성대한 파리의 밤입니다",
        description: "프랑스 수도이자 최대도시인 파리는 경제, 문화, 정치, 외교 등의 많은 분야에서 세계적인 영행력을 가진 도시입니다. 파리의 연 평균 기온은 12.4°C로 서울과 비슷합니다.",
        linkTag: "파리 관광청"
    },
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1552751118-d3cde54807de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        link:"https://highstreetitalia.com/",
        title: "보세요 수상도시의 아름다움을",
        description: "이탈리아 북동부 베네토의 중심 도시인 베네치아. 구도심 도시 전체에 수로가 뚫려 배를 타고 다닌다 해서 물의 도시로 유명합니다. 또한 내부에는 자동차 도로가 하나도 없다는 사실 알고 계셨나요?",
        linkTag: "이탈리아 관광청"
    },
    {
        recommand: 0,
        img:"https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
        link:"https://www.visitnorway.com/",
        title: "오로라를 잡으러 떠나볼까요?",
        description: "로마 신화의 새벽과 햇살의 여신 이름 아우로라에서 '오로라'라는 이름이 나왔습니다. 오로라는 밤이 매우 길거나 하루종일 어두운 겨울이 상대적으로 관찰하기 쉽습니다!",
        linkTag: "노르웨이 관광청"
    },
];

for(let i=0; i<europeData.length; i++){
    const divContent = document.createElement('div');
    const divContainer = document.createElement('div');
    const divTitle = document.createElement('div');
    const imgTag = document.createElement('img');
    const pTag = document.createElement('p');
    const aTag = document.createElement('a');
    const btnTag = document.createElement('button');

    const textTag = document.createElement('span');

    if (europeData[i].recommand){
        const divRecommand = document.createElement('div');
        const iTag = document.createElement('i');

        divRecommand.classList.add("goTripRecommand");
        iTag.classList.add("fab");
        iTag.classList.add("fa-angellist");
        textTag.textContent = "GoTrip Recommand";

        divRecommand.appendChild(iTag);
        divRecommand.appendChild(textTag);

        divContainer.appendChild(divRecommand);
    }
    imgTag.src = europeData[i].img;

    divTitle.classList.add("c_title");
    divContent.classList.add("countryContent");
    divContainer.classList.add("countryContainer");


    divTitle.textContent = europeData[i].title;
    pTag.textContent = europeData[i].description;

    divTitle.classList.add('engFontStyle');
    pTag.classList.add('engFontStyle');
    textTag.classList.add('engFontStyle');

    aTag.href = europeData[i].link;
    aTag.target = "_blank";
    aTag.textContent = europeData[i].linkTag;

    btnTag.appendChild(aTag);

    divContainer.appendChild(imgTag);
    divContainer.appendChild(divTitle);
    divContainer.appendChild(pTag);
    divContainer.appendChild(btnTag);

    divContent.appendChild(divContainer);
    countyContentBody.appendChild(divContent);
}