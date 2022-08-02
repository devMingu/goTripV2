const slideContent = document.querySelector('.slid__flex_column');

const contentData = [
    {
        mainTitle: "저도 이런 멋있는 집에서 살고 싶네요",
        subTitle: "이런 집은 얼마정도 할까요?",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2350&q=80"
    },
    {
        mainTitle:"자연과 어우러진 숙소",
        subTitle: "from $250 per adult",
        img: "https://images.unsplash.com/photo-1659259540437-0fe84def75cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
    },
    {
        mainTitle: "사랑하는 사람과 떠나는 피크닉",
        subTitle: "from $80 per adult",
        img: "https://images.unsplash.com/photo-1596120236172-231999844ade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    },
    {
        mainTitle: "전 세계 아름다운 건축물 알아보기",
        subTitle: "세계에는 정말 다양하고 아름다운 건물이 많습니다.",
        img: "https://images.unsplash.com/photo-1645531843766-2d3386c21955?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
        mainTitle: "오늘은 조용히 독서할래요",
        subTitle: "free",
        img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1890&q=80"
    },
    {
        mainTitle: "파도치는 해변가를 걸어볼래요!",
        subTitle: "from $19.99 per adult",
        img: "https://images.unsplash.com/photo-1597116635010-8b65f0dce76c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80"
    },
    {
        mainTitle: "강아지와 함께 바닷가 산책하기",
        subTitle: "강아지도 정말 좋아할 것 같지 않나요?",
        img: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
        mainTitle: "친구들과 축구 한판?",
        subTitle: "축구하고 싶은사람들을 모아봐요",
        img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
        mainTitle: "웰컴 인디아!",
        subTitle: "깨닫고 싶은 자들의 여행지",
        img: "https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80"
    },
    {
        mainTitle: "우주에서 찍는 셀피 ^~^",
        subTitle: "저.. 잘 보이나요?",
        img: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
    },
    {
        mainTitle: "아직도 늦지 않았어요",
        subTitle: "영화관에서 꼭 봐야할 영화 탑건.",
        img: "https://image.bugsm.co.kr/album/images/1000/180472/18047275.jpg"
    },
    {
        mainTitle: "저 푸르른 별은 누구의 별일까요?",
        subTitle: "보이는 저 곳에 여러분들이 보일까요?",
        img: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80"
    },
    {
        mainTitle: "오늘은 나만의 이야기를 진솔하게 풀어봐요",
        subTitle: "보이는 저 곳에 여러분들이 보일까요?",
        img: "https://images.unsplash.com/flagged/photo-1564401398070-9a0ec00bd38a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
    {
        mainTitle: "도전하는 당신을 언제나 응원할게요",
        subTitle: "도전은 결코 쉽지않은 선택입니다 그렇기에 당신은 대단합니다",
        img: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1284&q=80"
    },
    {
        mainTitle: "NewJeans의 첫번째 앨범",
        subTitle: "한번 들어보세요! 저도 아직 안들어봤어요",
        img: "https://image.bugsm.co.kr/album/images/1000/40780/4078016.jpg"
    },
    {
        mainTitle: "이것이 케이팝이다!",
        subTitle: "누적 조회수 23억뷰의 주인공 BLACKPINK",
        img: "https://image.bugsm.co.kr/album/images/1000/159020/15902090.jpg"
    },
    {
        mainTitle: "지금 가장 인기있는 드라마",
        subTitle: "김세정 주연의 '오늘의 웹툰'",
        img: "https://img.wavve.com/BMS/TVProgram/2022/PRG_S01_P461258590-Vertical_LogoY-RE_w720_h1080_q75.jpg"
    },
    {
        mainTitle: "더위에 열 받는 당신에게 들려주고 싶어요",
        subTitle: "선미의 신곡입니다. 열이올라요",
        img: "https://image.bugsm.co.kr/album/images/1000/40772/4077267.jpg"
    },
    {
        mainTitle: "너 언니한테 까불면 모가지 날아간다",
        subTitle: "저 씨부*새* - 고민시",
        img: "https://img.wavve.com/movieImg/MovieGroup/2021/GMV_CD01_WR0000011549-Vertical_LogoY_w720_h1080_q75.jpg"
    },
    {
        mainTitle: "지금 이 시간에 가장 듣기 좋은 목소리",
        subTitle: "같이 태연 노래 들어요",
        img: "https://image.bugsm.co.kr/album/images/1000/204506/20450649.jpg"
    },
    {
        mainTitle: "소녀는 왜 불도저에 탔을까요",
        subTitle: "스카이캐슬 김혜윤 주연",
        img: "https://img.wavve.com/movieImg/MV_C901/4/MV_C901_SG0000147684_w720_h1080_q75.jpg"
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

    divTag3.classList.add('textStyle'); //font-style

    divTag1.appendChild(divTag2);
    divTag1.appendChild(divTag3);

    slideContent.appendChild(divTag1);
}