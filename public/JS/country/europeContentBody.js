const countyContentBody = document.querySelector(".countyContentBody");

const europeData = [
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1565881606991-789a8dff9dbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80",
        link: "https://kr.france.fr/ko",
        title: "Big Night Of Paris",
        description: "Paris, city and capital of France, situated in the north-central part of the country. For centuries Paris has been one of the world’s most important and attractive cities.",
        linkTag: "파리 관광청"
    },
    {
        recommand: 1,
        img:"https://images.unsplash.com/photo-1552751118-d3cde54807de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        link:"https://highstreetitalia.com/",
        title: "SEE THE BEAUTY OF SEA",
        description: "We organize excursions and experiences in Venice. Gondola, San Marco Square excursions and many other impressive proposals to live Venice.",
        linkTag: "이탈리아 관광청"
    },
    {
        recommand: 0,
        img:"https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
        link:"https://www.visitnorway.com/",
        title: "Northern Lights Catch The Moment",
        description: "Northern Lights tours are great because the tour operators have been chasing the Northern Lights for years and can find the best spots for potential viewing even when there is low hanging cloud cover.",
        linkTag: "노르웨이 관광청"
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