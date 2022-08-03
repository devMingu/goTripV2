const countyContentBody = document.querySelector(".countyContentBody");

const mediterraneanSeaData = [
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        link: "https://www.visitgreece.gr/",
        title: "차원이 다른 산토리니",
        description: "키클라데스 제도 최남단에 있는 그리스 에게 해의 섬입니다. 이 섬의 또 다른 이름은 티라입니다. 정말 이름부터 이쁘지 않나요? 산토리니는 가장 유명한 관광지 중 하나입니다.",
        linkTag: "그리스 관광청"
    },
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1567527259232-3a7fcd490c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        link:"https://www.google.com/search?q=%ED%8A%80%EB%A5%B4%ED%82%A4%EC%98%88+%EA%B4%80%EA%B4%91%EC%B2%AD&rlz=1C5CHFA_enKR978KR978&sxsrf=ALiCzsYFzlpkih58PDI4uyJgxT9m9t_1LA%3A1658116076173&ei=7NfUYp7-Ccft2roP4smN0AU&ved=0ahUKEwiepN3dw4H5AhXHtlYBHeJkA1oQ4dUDCA4&uact=5&oq=%ED%8A%80%EB%A5%B4%ED%82%A4%EC%98%88+%EA%B4%80%EA%B4%91%EC%B2%AD&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEOgcIABBHELADOgcIIxDqAhAnOgQIIxAnOhEILhCABBCxAxCDARDHARDRAzoLCAAQgAQQsQMQgwE6DgguEIAEELEDEIMBENQCOgsILhCABBCxAxCDAToICC4QgAQQsQM6BQguEIAEOgoILhCABBCHAhAUOggILhCABBDUAkoFCDwSATVKBAhBGABKBAhGGABQ0QJYixpg3RpoB3ABeAOAAYwBiAGZE5IBBDAuMjGYAQCgAQGwAQrIAQrAAQE&sclient=gws-wiz",
        title: "여기가 이스탄불?",
        description: "인구수 15,520,000명의 튀르키예의 최대도시로 수도 앙카라보다 더 큰 도시입니다. 서기 330년 로마 제국 황제 콘스탄티누스 1세가 이 곳을 새 수도로 지정한적이 있습니다.",
        linkTag: "튀르키예 나무위키"
    },
    {
        recommand: 0,
        img:"https://images.unsplash.com/photo-1560860446-c821e910a0a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
        link:"https://namu.wiki/w/%ED%82%A4%ED%94%84%EB%A1%9C%EC%8A%A4",
        title: "반가워 사이프러스",
        description: "사이프러스는 키프로스로 잘 알려진 작은 섬나라입니다. 이 작은 섬은 지리적인 이유로 서아시아로 분류되기도 하지만 문화적으로 역사적으로는 그리스와 가깝기에 남유럽으로분류되기도 합니다.",
        linkTag: "사이프러스 나무위키"
    },
];

for(let i=0; i<mediterraneanSeaData.length; i++){
    const divContent = document.createElement('div');
    const divContainer = document.createElement('div');
    const divTitle = document.createElement('div');
    const imgTag = document.createElement('img');
    const pTag = document.createElement('p');
    const aTag = document.createElement('a');
    const btnTag = document.createElement('button');

    const textTag = document.createElement('span');

    if (mediterraneanSeaData[i].recommand){
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
    imgTag.src = mediterraneanSeaData[i].img;

    divTitle.classList.add("c_title");
    divContent.classList.add("countryContent");
    divContainer.classList.add("countryContainer");


    divTitle.textContent = mediterraneanSeaData[i].title;
    pTag.textContent = mediterraneanSeaData[i].description;

    divTitle.classList.add('engFontStyle');
    pTag.classList.add('engFontStyle');
    textTag.classList.add('engFontStyle');
    
    aTag.href = mediterraneanSeaData[i].link;
    aTag.target = "_blank";
    aTag.textContent = mediterraneanSeaData[i].linkTag;

    btnTag.appendChild(aTag);

    divContainer.appendChild(imgTag);
    divContainer.appendChild(divTitle);
    divContainer.appendChild(pTag);
    divContainer.appendChild(btnTag);

    divContent.appendChild(divContainer);
    countyContentBody.appendChild(divContent);
}