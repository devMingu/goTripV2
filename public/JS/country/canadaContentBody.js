const countyContentBody = document.querySelector(".countyContentBody");

const asiaData = [
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1529073353492-23aa380d4647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
        link: "https://korean.visitseoul.net/index",
        title: "균형을 바로 잡다",
        description: "캐나다는 북아메리카 대륙 북부의 연방 국가입니다. 동쪽으로는 대서양 서쪽으로는 태평양 북쪽으로는 북극해를 접하고 있습니다. 러시아에 이어 세계에서 2번째로 큰 나라입니다. 캐나다는 지구의 중심의 균형을 바로 잡는 축입니다.",
        linkTag: "빅토리아 호수"
    },
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1496498808362-7e2ec3b323d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
        link:"https://www.gotokyo.org/kr/index.html",
        title: "고위도 금융 중심지",
        description: "캐나다는 북아메리카 대륙 북부의 최대 금융 중심지입니다. 금융 중심지에서 나오는 대도시의 분위기는 여행자들을 압도합니다. ",
        linkTag: "JP모건 토론토"
    },
    {
        recommand: 0,
        img:"https://images.unsplash.com/photo-1581068414180-050836da1aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
        link:"https://www.taiwantour.or.kr/",
        title: "소수에게만 허용된",
        description: "소수에게만 허용된 청정 온천수입니다. 이곳 주민들은 지하수를 뽑아 올릴필요가 없습니다. 왜냐면 주변 자연에서 흐르는 물이 보다 더 깨끗하거든요. 이곳 주민들은 추운 겨울 온천에서 몸을 녹이며 겨울을 이겨냅니다.",
        linkTag: "빙하수 온천"
    },
];

for(let i=0; i<asiaData.length; i++){
    const divContent = document.createElement('div');
    const divContainer = document.createElement('div');
    const divTitle = document.createElement('div');
    const imgTag = document.createElement('img');
    const pTag = document.createElement('p');
    const aTag = document.createElement('a');
    const btnTag = document.createElement('button');

    const textTag = document.createElement('span');

    if (asiaData[i].recommand){
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
    imgTag.src = asiaData[i].img;

    divTitle.classList.add("c_title");
    divContent.classList.add("countryContent");
    divContainer.classList.add("countryContainer");


    divTitle.textContent = asiaData[i].title;
    pTag.textContent = asiaData[i].description;

    divTitle.classList.add('engFontStyle');
    pTag.classList.add('engFontStyle');
    textTag.classList.add('engFontStyle');

    aTag.href = asiaData[i].link;
    aTag.target = "_blank";
    aTag.textContent = asiaData[i].linkTag;

    btnTag.appendChild(aTag);

    divContainer.appendChild(imgTag);
    divContainer.appendChild(divTitle);
    divContainer.appendChild(pTag);
    divContainer.appendChild(btnTag);

    divContent.appendChild(divContainer);
    countyContentBody.appendChild(divContent);
}