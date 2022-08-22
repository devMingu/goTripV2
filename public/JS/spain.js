const spainCount = document.querySelector(".spainCount");

let cnt = 0;
spainCount.textContent = cnt;

spainCount.addEventListener('click', ()=>{
    cnt++;
    spainCount.textContent = cnt;
})
