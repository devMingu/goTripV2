// search__activity
// search__hotel

const search__activity = document.querySelector(".search__activity");
const search__hotel = document.querySelector(".search__hotel");
const contain2__title = document.querySelector(".contain2__title");

const onSearchActivityHandler = () =>{
    contain2__title.innerText = "여행지를 알려주세요";
    console.log("체험");
}

const onSearchHotelHandler = () =>{
    contain2__title.innerText = "숙소를 알려주세요";
    console.log("숙소");
}

search__activity.addEventListener('click', onSearchActivityHandler);
search__hotel.addEventListener('click', onSearchHotelHandler);