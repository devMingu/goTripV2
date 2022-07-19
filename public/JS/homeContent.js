const contentBody = document.querySelector(".contentBody");

const homeContent = [
  {
    title: ["음식을 찾아 떠나는 여행은 어떠신가요?", "전 세계 다양한 음식을 체험하기", "단순한 음식 이상의 특별함이 담긴 공간"],
    img: "https://source.unsplash.com/collection/1424340/360x340",
  },
  {
    title: ["단풍국의 아름다움 그리고 메이플 베어", "아무런 걱정없이 하루를 즐길 수 있는 곳", "나를 위한 자그마한 휴식"],
    img: "https://source.unsplash.com/collection/3109817/360x340",
  },
  {
    title: ["자유, 행복 그리고 아름다운 사랑이 있는 나라", "세계에서 가장 다양성이 풍부한 나라"],
    img: "https://source.unsplash.com/collection/8547261/360x340",
  },
  {
    title: ["아름다운 자연과 함께 떠나는 여행", "자연 그리고 사람 그리고 동물들", "모든 자연요소를 갖춘 멋진 장소", "한 폭의 그림같은 아름다움"],
    img: "https://source.unsplash.com/collection/9915359/360x340",
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

    outerDivTag.appendChild(innerDivTag);
    contentBody.appendChild(outerDivTag);

}