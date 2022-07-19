const countyContentBody = document.querySelector(".countyContentBody");

const mediterraneanSeaData = [
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        link: "https://www.visitgreece.gr/",
        title: "NEXT LEVEL SANTORINI",
        description: "Santorini is one of the Cyclades islands in the Aegean Sea.",
        linkTag: "그리스 관광청"
    },
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1567527259232-3a7fcd490c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        link:"https://www.google.com/search?q=%ED%8A%80%EB%A5%B4%ED%82%A4%EC%98%88+%EA%B4%80%EA%B4%91%EC%B2%AD&rlz=1C5CHFA_enKR978KR978&sxsrf=ALiCzsYFzlpkih58PDI4uyJgxT9m9t_1LA%3A1658116076173&ei=7NfUYp7-Ccft2roP4smN0AU&ved=0ahUKEwiepN3dw4H5AhXHtlYBHeJkA1oQ4dUDCA4&uact=5&oq=%ED%8A%80%EB%A5%B4%ED%82%A4%EC%98%88+%EA%B4%80%EA%B4%91%EC%B2%AD&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEOgcIABBHELADOgcIIxDqAhAnOgQIIxAnOhEILhCABBCxAxCDARDHARDRAzoLCAAQgAQQsQMQgwE6DgguEIAEELEDEIMBENQCOgsILhCABBCxAxCDAToICC4QgAQQsQM6BQguEIAEOgoILhCABBCHAhAUOggILhCABBDUAkoFCDwSATVKBAhBGABKBAhGGABQ0QJYixpg3RpoB3ABeAOAAYwBiAGZE5IBBDAuMjGYAQCgAQGwAQrIAQrAAQE&sclient=gws-wiz",
        title: "IS ISTANBUL?",
        description: "Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here.",
        linkTag: "튀르키예 나무위키"
    },
    {
        recommand: 0,
        img:"https://images.unsplash.com/photo-1560860446-c821e910a0a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
        link:"https://namu.wiki/w/%ED%82%A4%ED%94%84%EB%A1%9C%EC%8A%A4",
        title: "HELLO CYPRUS",
        description: "Cyprus, officially the Republic of Cyprus, is an island country in the eastern Mediterranean Sea south of the Anatolian Peninsula.",
        linkTag: "키프로스 나무위키"
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