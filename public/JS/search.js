const tourList = document.querySelector(".searchList");

let backgroundFlag = 0;
let tour = [
    {
        location: '유럽',
        name: 'europe',
        img: 'https://source.unsplash.com/collection/2141901/122x122'
    },
    {
        location: '아시아',
        name: 'asia',
        img: 'https://source.unsplash.com/collection/2084453/122x122'
    },
    {
        location: '지중해',
        name: 'mediterraneanSea',
        img: 'https://source.unsplash.com/collection/10526814/122x122'
    },
    {
        location: '서울',
        name: 'seoul',
        img: 'https://source.unsplash.com/collection/10750452/122x122'
    },
    {
        location: '도쿄',
        name: 'japan',
        img: 'https://source.unsplash.com/collection/8515895/122x122'
    },
    {
        location: '파리',
        name: 'italia',
        img: 'https://source.unsplash.com/collection/45135470/122x122'
    },
    {
        location: '트롬소',
        name: 'scandinavia',
        img: 'https://source.unsplash.com/collection/1784623/122x122'
    },
];




for(let i =0; i<tour.length; i++){
    const divTag = document.createElement('div');
    const divLocationTag = document.createElement('div');
    const imgTag = document.createElement('img');
    const aTag = document.createElement('a');
    aTag.href = `/goTrip/${tour[i].name}`;
    imgTag.src = tour[i].img;
    divLocationTag.textContent = tour[i].location;
    
    aTag.appendChild(imgTag);
    divTag.appendChild(aTag);
    divTag.appendChild(divLocationTag);
    divTag.classList.add('tourListBox');
    tourList.appendChild(divTag);
}