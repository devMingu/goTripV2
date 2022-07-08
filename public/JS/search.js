const tourList = document.querySelector(".searchList");

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
        location: '남반구',
        img: 'https://source.unsplash.com/collection/10526814/122x122'
    },
];

for(let i =0; i<4; i++){
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
