const countyContentBody = document.querySelector(".countyContentBody");

const europeData = [
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        link: "https://kr.france.fr/ko",
        title: "반갑습니다 도쿄입니다.",
        description: "뉴욕, 런던과 함께 세계 3대 도시중 하나인 도쿄는 먼 과거에 무사시노쿠니의 도시마군이었지만 11세기 헤이안 시대 후반부터 에도라고 불렸습니다. 이 작은 해안 마을은 도쿠가와 이에야스가 에도 막부를 세우고 일본의 핵심 도시가 되었습니다.",
        linkTag: "도쿄 중심지"
    },
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1531219572328-a0171b4448a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        link:"https://highstreetitalia.com/",
        title: "도쿄의 거대한 빌딩 숲",
        description: "세계 경제의 중심지 도쿄의 거대한 빌딩 숲은 도쿄가 금융도시라는것을 입증합니다. 다음 종이의 집은 도쿄를 방문할까요?",
        linkTag: "도쿄 403-2"
    },
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1544142402-2945a7d54a31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        link:"https://www.visitnorway.com/",
        title: "도쿄의 밤은 이제 시작입니다",
        description: "도쿄의 밤은 서울만큼이나 아름답습니다. 도쿄에 가서 밤을 즐기지 않는것은 너무나도 아쉽습니다. 달짝지근한 와규와 나미비루 한잔이면 오늘 하루도 성공적입니다.",
        linkTag: "도쿄 쇼핑몰"
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