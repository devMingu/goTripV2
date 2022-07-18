const slideContent = document.querySelector('.slid__flex_column');

const contentData = [
    {
        mainTitle: "Where there is a will there is way",
        subTitle: "from $9.99 per adult",
        img: "https://images.unsplash.com/photo-1602521163379-79fba9eac5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80"
    },
    {
        mainTitle:"Follow your heart",
        subTitle: "from $52 per adult",
        img: "https://images.unsplash.com/photo-1602584386319-fa8eb4361c2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
        mainTitle: "Are you ready to enjoy? Seize the day",
        subTitle: "from $240 per adult",
        img: "https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        mainTitle: "This is how life is",
        subTitle: "from $13.2 per adult",
        img: "https://images.unsplash.com/photo-1505753065532-68713e211a3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
        mainTitle: "If not now, then when?",
        subTitle: "from $873 per adult",
        img: "https://images.unsplash.com/photo-1568044401506-084add6a8a92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80"
    },
];

for(let i=0 ; i<contentData.length ; i++){
    const divTag1 = document.createElement('div');
    const divTag2 = document.createElement('div');
    const divTag3 = document.createElement('div');
    const imgTag = document.createElement('img');
    const h3Tag = document.createElement('h3');
    const h5Tag = document.createElement('h5');

    imgTag.src = contentData[i].img;
    h3Tag.textContent = contentData[i].mainTitle;
    h5Tag.textContent = contentData[i].subTitle;

    divTag1.classList.add("slideTourBox");

    divTag2.appendChild(imgTag);
    divTag3.appendChild(h3Tag);
    divTag3.appendChild(h5Tag);

    divTag1.appendChild(divTag2);
    divTag1.appendChild(divTag3);

    slideContent.appendChild(divTag1);
}