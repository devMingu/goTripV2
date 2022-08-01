const countyContentBody = document.querySelector(".countyContentBody");

const europeData = [
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1581930407536-ba4fd42d4332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
        link: "https://map.kakao.com/?q=%EC%97%AC%EC%9D%98%EB%8F%84%20%ED%95%9C%EA%B0%95",
        title: "밤이 가장 아름다운 도시",
        description: "한강은 한반도 중부에 위치한 강으로, 대한민국의 국가 1급 하천이다. 북한강[3]과 남한강[4]이 경기도 양평군 양수리(두물머리)에서 만나 서울특별시를 통과하면서 김포 반도에서 황해로 들어간다.",
        linkTag: "여의도 한강"
    },
    {
        recommand: 1,
        img:"https://thumb.mtstarnews.com/06/2022/06/2022062215500437164_1.jpg",
        link:"https://map.kakao.com/?q=%EC%83%81%EC%95%94%EB%8F%99%20DMC",
        title: "원전 안전 완전",
        description: "A detective investigating a man's death in the mountains ends up meeting and developing feelings for the dead man's mysterious wife in the course of his dogged sleuthing.",
        linkTag: "헤어질 결심"
    },
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1617108309814-3326655a165a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        link:"https://map.kakao.com/?q=%ED%95%9C%EA%B0%95%EC%B2%A0%EA%B5%90",
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