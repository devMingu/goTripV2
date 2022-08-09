const slideContent = document.querySelector('.slid__flex_column');

const contentData = [
    {
        mainTitle: "피오르속 넓은 공간 체험하기",
        subTitle: "세계에서 가장 아름다운 습곡",
        img: "https://images.unsplash.com/photo-1508592931388-95bc7b61033d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    },
    {
        mainTitle:"개썰매를 타보는 재미",
        subTitle: "허스키가 이끄는 개썰매 재밌을것 같지 않나요?",
        img: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80"
    },
    {
        mainTitle: "자연과 어우러진 드라이빙",
        subTitle: "조금은 위험하지만 재밌는 눈속 드라이빙",
        img: "https://images.unsplash.com/photo-1537000413083-5cf29e3cfcd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665&q=80"
    },
    {
        mainTitle: "Northern Lights 헌팅하기",
        subTitle: "오로라를 쫓으러 가볼까요?!",
        img: "https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1532&q=80"
    },
    {
        mainTitle: "북극권의 아름다운 풍경",
        subTitle: "자연과 어우러지는 생활",
        img: "https://images.unsplash.com/photo-1475066392170-59d55d96fe51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },

];

for(let i=0 ; i<contentData.length ; i++){
    const divTag1 = document.createElement('div');
    const divTag2 = document.createElement('div');
    const divTag3 = document.createElement('div');
    const imgTag = document.createElement('img');
    const h3Tag = document.createElement('h3');
    const h5Tag = document.createElement('h5');

    imgTag.src = contentData[i].img;
    h3Tag.textContent = contentData[i].mainTitle;
    h5Tag.textContent = contentData[i].subTitle;

    divTag1.classList.add("slideTourBox");

    divTag2.appendChild(imgTag);
    divTag3.appendChild(h3Tag);
    divTag3.appendChild(h5Tag);

    divTag1.appendChild(divTag2);
    divTag1.appendChild(divTag3);

    slideContent.appendChild(divTag1);
}