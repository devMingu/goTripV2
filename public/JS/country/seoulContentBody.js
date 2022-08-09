const countyContentBody = document.querySelector(".countyContentBody");

const europeData = [
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1581930407536-ba4fd42d4332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
        link: "https://map.kakao.com/?q=%EC%97%AC%EC%9D%98%EB%8F%84%20%ED%95%9C%EA%B0%95",
        title: "밤이 가장 아름다운 도시",
        description: "한강은 대한민국의 수도 서울특별시를 가로지르는 강입니다. 특히 한강 위의 대교는 대한민국의 경제 발전을 상징하는 구도로도 매우 유명합니다. 한강대교위에서 바라보는 서울의 야경은 매우 아름답습니다.",
        linkTag: "여의도 한강"
    },
    {
        recommand: 1,
        img:"https://thumb.mtstarnews.com/06/2022/06/2022062215500437164_1.jpg",
        link:"https://map.kakao.com/?q=%EC%83%81%EC%95%94%EB%8F%99%20DMC",
        title: "내가 그렇게 나쁩니까?",
        description: "서울은 많은 영화의 촬영 로케이션입니다. 어벤져스 에이지오브 울트론에서 울트론을 추격하는 장면은 서울에서 촬영되었습니다. 영화 헤어질 결심의 감독 박찬욱 감독은 서울 출생입니다.",
        linkTag: "헤어질 결심"
    },
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1617108309814-3326655a165a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        link:"https://map.kakao.com/?q=%ED%95%9C%EA%B0%95%EC%B2%A0%EA%B5%90",
        title: "세상에나 정말 넓은 철교입니다",
        description: "서울특별시 용산구 이촌동과 동작구 노량진동을 잇는 길이 1,110m의 철도 전용 교량입니다. 한강에 건설된 최초의 다리로, 총 4개의 교량으로 이루어져 있습니다.",
        linkTag: "한강철교"
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