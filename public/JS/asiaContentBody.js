const countyContentBody = document.querySelector(".countyContentBody");

const asiaData = [
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1599033769063-fcd3ef816810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        link: "https://korean.visitseoul.net/index",
        title: "과거에 귀를 귀울이다",
        description: "경복궁은 조선 시대에 지어진 왕궁 중 가장 큰 궁궐이었다. 개국공신 정도전은 태조로부터 첫 번째 궁궐의 이름을 지으라는 명을 받았고, 고심끝에 '새 왕조가 큰 복을 누려 번영할 것'이라는 의미로경복궁(景福宮)이라는 이름을 붙였다.",
        linkTag: "서울 관광청"
    },
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1613487957484-32c977a8bd62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
        link:"https://www.gotokyo.org/kr/index.html",
        title: "서브컬처 혁명, 오타쿠가 즐기는 장소",
        description: "오타쿠 문화의 구성요소인 게임, 만화, 피규어 컬렉션과 애니메이션. 이러한 서브컬처의 발상지는 뭐니 뭐니 해도 아키하바라입니다. 오타쿠들이 제각각 열중하는 가게가 많은 전기부품점 사이사이에 끼어 있습니다.",
        linkTag: "도쿄 관광청"
    },
    {
        recommand: 0,
        img:"https://images.unsplash.com/photo-1621172715450-53ca41f75d93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        link:"https://www.taiwantour.or.kr/",
        title: "신베이시 우라이 온천",
        description: "우라이(烏來)온천은 약 알칼리성 탄산온천으로 수질이 맑고 투명하여마실 수 있다. 2월초에는 우라이의 벚꽃이 만개한다.약 2만그루의 벚꽃이 손님을 기다린다. 후지 벚꽃, 붉은 벚꽃이 다투듯 피어나 온천과 함께 또 하나의 즐거움을 안겨준다.",
        linkTag: "대만 관광청"
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