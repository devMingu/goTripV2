const slideContent = document.querySelector('.slid__flex_column');

const contentData = [
    {
        mainTitle: "내가가는 길이 곧 나의 길이다",
        subTitle: "여행을 너무 복잡하게 생각하지 마세요",
        img: "https://images.unsplash.com/photo-1602521163379-79fba9eac5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80"
    },
    {
        mainTitle:"이끌리는 대로",
        subTitle: "마음이 이끄는 여행지",
        img: "https://images.unsplash.com/photo-1602584386319-fa8eb4361c2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
        mainTitle: "즐길준비 되셨나요? 재밌게 놀아요",
        subTitle: "from $240 per adult",
        img: "https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        mainTitle: "삶이란 이런것이다!",
        subTitle: "삶이란 아름다운 여행지를 둘러보는걸까요?",
        img: "https://images.unsplash.com/photo-1505753065532-68713e211a3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        mainTitle: "지금아니면 언제 갈건데?",
        subTitle: "더 이상 미루지 말아요",
        img: "https://images.unsplash.com/photo-1568044401506-084add6a8a92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80"
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