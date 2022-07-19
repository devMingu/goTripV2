const countyContentBody = document.querySelector(".countyContentBody");

const europeData = [
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1581930407536-ba4fd42d4332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
        link: "https://kr.france.fr/ko",
        title: "밤이 가장 아름다운 도시",
        description: "한강은 한반도 중부에 위치한 강으로, 대한민국의 국가 1급 하천이다. 북한강[3]과 남한강[4]이 경기도 양평군 양수리(두물머리)에서 만나 서울특별시를 통과하면서 김포 반도에서 황해로 들어간다.",
        linkTag: "여의도 한강"
    },
    {
        recommand: 1,
        img:"http://img.lifestyler.co.kr/uploads/program/cheditor/2020/04/ACPDR7TBY1OG4GEP35PS.jpg",
        link:"https://highstreetitalia.com/",
        title: "여기가 K-드라마의 고향",
        description: "한 사람, 한 사람의 '생로병사'가 모여, 수만 가지 이야기가 녹아 있는 곳. 탄생의 기쁨과 영원한 헤어짐의 전혀 다른 인사들이 공존하는 곳. 같은 병을 가진 것만으로 큰 힘이 되다 가도, 때론 누군가의 불행을 통해 위로를 얻기도 하는 아이러니 한 곳. 흡사 우리의 인생과 너무나도 닮아 있는 곳.",
        linkTag: "슬기로운 의사생활"
    },
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1617108309814-3326655a165a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        link:"https://www.visitnorway.com/",
        title: "세상에나 정말 넓은 철교입니다",
        description: "서울특별시 용산구 이촌동(용산역)과 동작구 노량진동(노량진역)을 잇는 길이 1,110m의 철도 전용 교량이다. 한강에 건설된 최초의 다리로, 총 4개의 교량으로 이루어져 있다. 한강대교라고 알고 있는 경우가 있는데 한강대교는 한강에 건설된 최초의 인도교이다. 한강철교의 구간은 '용산구 이촌동 172-1'번지 쪽 도로부터 노들로 쪽까지이다. 관리는 전 구간 한국철도공사 서울본부에서 담당한다.",
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