const tourList = document.querySelector(".searchList");
const tourActivity = document.querySelector(".activityTour");
const backgroundOpacity = document.querySelector('.s__container');
const showActivity = document.querySelector("#carouselExampleCaptions");

const onBackgroundOpacity = () =>{
    if (backgroundFlag){
        backgroundOpacity.classList.remove('backgroundOpacity');
        showActivity.classList.add("i_hidden");
        backgroundFlag = 0;
    }
    else{
        backgroundOpacity.classList.add('backgroundOpacity');
        showActivity.classList.remove("i_hidden");
        backgroundFlag = 1;
    }
        
    console.log("클릭");
}

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
];




for(let i =0; i<3; i++){
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



tourActivity.addEventListener('click', onBackgroundOpacity);
