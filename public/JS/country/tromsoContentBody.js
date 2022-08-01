const countyContentBody = document.querySelector(".countyContentBody");

const europeData = [
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1560185678-759b5712a60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
        link: "https://kr.france.fr/ko",
        title: "오로라를 보고싶은 사람들은 여기로",
        description: "한강은 한반도 중부에 위치한 강으로, 대한민국의 국가 1급 하천이다. 북한강[3]과 남한강[4]이 경기도 양평군 양수리(두물머리)에서 만나 서울특별시를 통과하면서 김포 반도에서 황해로 들어간다.",
        linkTag: "오로라 투어"
    },
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
        link:"https://highstreetitalia.com/",
        title: "백야의 아름다움",
        description: "A detective investigating a man's death in the mountains ends up meeting and developing feelings for the dead man's mysterious wife in the course of his dogged sleuthing.",
        linkTag: "트롬소 전망대"
    },
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1612260192864-0691cd135373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        link:"https://www.visitnorway.com/",
        title: "여기 정말 아름다운 야경이 있습니다",
        description: "서울특별시 용산구 이촌동(용산역)과 동작구 노량진동(노량진역)을 잇는 길이 1,110m의 철도 전용 교량이다. 한강에 건설된 최초의 다리로, 총 4개의 교량으로 이루어져 있다. 한강대교라고 알고 있는 경우가 있는데 한강대교는 한강에 건설된 최초의 인도교이다. 한강철교의 구간은 '용산구 이촌동 172-1'번지 쪽 도로부터 노들로 쪽까지이다. 관리는 전 구간 한국철도공사 서울본부에서 담당한다.",
        linkTag: "트롬소 전망대"
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
    textTag.classList.add('engFontStyle');

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