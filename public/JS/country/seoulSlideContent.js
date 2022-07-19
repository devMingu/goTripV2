const slideContent = document.querySelector('.slid__flex_column');

const contentData = [
    {
        mainTitle: "이태원 클라쓰",
        subTitle: "서울시 한남동 이태원",
        img: "https://image.tving.com/upload/cms/caip/CAIP1500/P001142449.jpg/dims/resize/1280"
    },
    {
        mainTitle:"유미의 세포들",
        subTitle: "서울시 광진구 세종대학교",
        img: "https://image.tving.com/upload/cms/caip/CAIP1500/P001594130.jpg/dims/resize/F_webp,2048"
    },
    {
        mainTitle: "간 떨어지는 동거",
        subTitle: "서울시 송파구 어딘가의 방",
        img: "http://img.lifestyler.co.kr/uploads/program/2/2266/menu/7/board/0/0/f132659623918993767(0).jpg"
    },
    {
        mainTitle: "이상한 변호사 우영우",
        subTitle: "법무법인 태산",
        img: "https://t1.daumcdn.net/news/202207/01/newsen/20220701175257267tvkd.jpg"
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