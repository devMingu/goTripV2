const slideContent = document.querySelector('.slid__flex_column');

const contentData = [
    {
        mainTitle: "서울의 직장인들은 매우 바쁩니다.",
        subTitle: "아침 7~9시는 직장인들의 출근 시간입니다",
        img: "https://images.unsplash.com/photo-1544032527-042957c6f7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
    {
        mainTitle:"서울의 직장인들은 늦게 퇴근합니다.",
        subTitle: "저녁 5~7시는 직장인들의 퇴근시간으로 매우 체증이 심할수있습니다",
        img: "https://images.unsplash.com/photo-1597548898542-78eeb7bfaf40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
    {
        mainTitle: "지하철을 타고 서울의 어디든 갈 수 있습니다.",
        subTitle: "서울의 지하철은 모든곳에 연결되어있습니다",
        img: "https://images.unsplash.com/photo-1513092530180-d316e03fde6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
        mainTitle: "코엑스에는 멋있는 도서관이 있습니다.",
        subTitle: "이곳에서 잠시 쉬었다가 가는것도 좋습니다",
        img: "https://images.unsplash.com/photo-1548701214-948e2c384afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
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