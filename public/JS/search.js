const tourList = document.querySelector(".searchList");
const contain__title = document.querySelector(".contain2__title");

let backgroundFlag = 0;
let tour = [
    {
        location: '유럽',
        name: 'europe',
        img: 'https://images.unsplash.com/photo-1564594736624-def7a10ab047?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
    },
    {
        location: '아시아',
        name: 'asia',
        img: 'https://images.unsplash.com/photo-1540483761890-a1f7be05d99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80'
    },
    {
        location: '지중해',
        name: 'mediterraneanSea',
        img: 'https://images.unsplash.com/photo-1592396355679-1e2a094e8bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        location: '서울',
        name: 'seoul',
        img: 'https://images.unsplash.com/photo-1586274677440-231405a4c74c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
    },
    {
        location: '도쿄',
        name: 'tokyo',
        img: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
        location: '트롬소',
        name: 'tromso',
        img: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
    },
];


contain__title.innerText = "어디로 떠나고 싶으세요?";

for(let i =0; i<tour.length; i++){
    const divTag = document.createElement('div');
    const divLocationTag = document.createElement('div');
    const imgTag = document.createElement('img');
    const aTag = document.createElement('a');
    aTag.href = `/goTrip/${tour[i].name}`;
    imgTag.src = tour[i].img;
    divLocationTag.textContent = tour[i].location;
    divLocationTag.classList.add("divLocation");
    aTag.appendChild(imgTag);
    divTag.appendChild(aTag);
    divTag.appendChild(divLocationTag);
    divTag.classList.add('tourListBox');
    tourList.appendChild(divTag);
}
