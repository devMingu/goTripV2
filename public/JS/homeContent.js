const contentBody = document.querySelector(".contentBody");

const homeContent = [
  {
    title: ["음식을 찾아 떠나는 여행은 어떠신가요?", "전 세계 다양한 음식을 체험하기", "단순한 음식 이상의 특별함이 담긴 공간"],
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1680&q=80",
  },
  {
    title: ["걱정은 잠시 내려두세요", "나를 위한 자그마한 휴식"],
    img: "https://images.unsplash.com/photo-1529066516367-36973222c957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: ["어디든 같이 떠날까요?", "길 따라 목적지 없는 여행"],
    img: "https://images.unsplash.com/photo-1520962922320-2038eebab146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    title: ["아름다운 숙소 함께 떠나는 여행", "그림같이 아름다운 숙소"],
    img: "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];


for(let i=0 ; i<homeContent.length; i++){
    const outerDivTag = document.createElement('div');
    const h1Tag = document.createElement('h1');
    const innerDivTag = document.createElement('div');
    const imgTag = document.createElement('img');

    const idx = Math.floor(Math.random()*homeContent[i].title.length);

    h1Tag.textContent = homeContent[i].title[idx];
    imgTag.src = homeContent[i].img;

    innerDivTag.appendChild(h1Tag);
    innerDivTag.appendChild(imgTag);
    innerDivTag.classList.add("bodyImageContainer");
    outerDivTag.classList.add("middle_content");

    outerDivTag.appendChild(innerDivTag);
    contentBody.appendChild(outerDivTag);

}