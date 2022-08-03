const slideContent = document.querySelector('.slid__flex_column');

const contentData = [
    {
        mainTitle: "가장 큰 건담을 보유한 나라입니다",
        subTitle: "유년기 마음을 흔들던 건담을 보러가보세요",
        img: "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    },
    {
        mainTitle:"도쿄에서 즐기는 이자카야",
        subTitle: "생각만 해도 너무 재밌지 않나요?",
        img: "https://images.unsplash.com/photo-1554797589-7241bb691973?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80"
    },
    {
        mainTitle: "한점 한점의 정성",
        subTitle: "현지에서 맛보는 스시는 단언컨데 최고입니다",
        img: "https://images.unsplash.com/photo-1501735972267-d5c1bc03655c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    },
    {
        mainTitle: "일본은 깨끗합니다",
        subTitle: "도심임에도 불구하고 깨끗한 점은 훌륭합니다",
        img: "https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
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