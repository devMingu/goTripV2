const tourList = document.querySelector(".searchList");

let backgroundFlag = 0;
let tour = [
    {
        location: '유럽',
        img: 'https://source.unsplash.com/collection/2141901/122x122'
    },
    {
        location: '아시아',
        img: 'https://source.unsplash.com/collection/2084453/122x122'
    },
    {
        location: '지중해',
        img: 'https://source.unsplash.com/collection/10526814/122x122'
    },
    {
        location: '한국',
        img: 'https://source.unsplash.com/collection/10750452/122x122'
    },
    {
        location: '일본',
        img: 'https://source.unsplash.com/collection/8515895/122x122'
    },
    {
        location: '이탈리아',
        img: 'https://source.unsplash.com/collection/45135470/122x122'
    },
    {
        location: '스칸디나비아',
        img: 'https://source.unsplash.com/collection/1784623/122x122'
    },
];




for(let i =0; i<tour.length; i++){
    const divTag = document.createElement('div');
    const divLocationTag = document.createElement('div');
    const imgTag = document.createElement('img');
    
    imgTag.src = tour[i].img;
    divLocationTag.textContent = tour[i].location;
    divTag.appendChild(imgTag);
    divTag.appendChild(divLocationTag);
    divTag.classList.add('tourListBox');
    tourList.appendChild(divTag);
}