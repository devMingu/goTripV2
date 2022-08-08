const countyContentBody = document.querySelector(".countyContentBody");

const europeData = [
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1560185678-759b5712a60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
        link: "https://kr.france.fr/ko",
        title: "오로라를 보고싶은 사람들은 여기로",
        description: "주로 지구의 북극권, 남극권 지역에서 관측할 수 있는 천문현상입니다. '오로라'의 이름은 로마 신화의 새벽과 햇살의 여신 이름 아우로라에서 나왔어요!",
        linkTag: "오로라 투어"
    },
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1624704765325-fd4868c9702e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
        link:"https://highstreetitalia.com/",
        title: "극야의 아름다움",
        description: "극지방 겨울 시기에만 경험해볼 수 있는 하루종일 어두운 현상! 겨울에 태양 지평선 위로 올라오지 않아서 하루종일 날이 어두워요. 최대 24시간 동안 밤이 지속된다니 신기하지 않나요?",
        linkTag: "트롬소 전망대"
    },
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1612260192864-0691cd135373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        link:"https://www.visitnorway.com/",
        title: "여기 정말 아름다운 야경이 있습니다",
        description: "비행기를 타고 극야의 트롬소를 내려다 보는 장면은 정말 위대하다고 할 수 있습니다. 굉장히 어두운 협곡속에서 등장하는 트롬쇠는 보물을 발견한 느낌을 가져다 줍니다.",
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