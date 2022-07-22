const contentBody = document.querySelector(".contentBody");

const homeContent = [
  {
    title: ["음식을 찾아 떠나는 여행은 어떠신가요?", "전 세계 다양한 음식을 체험하기", "단순한 음식 이상의 특별함이 담긴 공간"],
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: ["우리 모두 다같이 캐나다", "아무런 걱정없이 하루를 즐길 수 있는 곳", "나를 위한 자그마한 휴식"],
    img: "https://images.unsplash.com/photo-1542704792-e30dac463c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: ["꺼지지 않는 불빛", "지구의 아름다움"],
    img: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
  },
  {
    title: ["아름다운 자연과 함께 떠나는 여행", "자연 그리고 사람 그리고 동물들", "모든 자연요소를 갖춘 멋진 장소", "한 폭의 그림같은 아름다움"],
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
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