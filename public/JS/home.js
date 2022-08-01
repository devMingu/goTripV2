const navbarOptions = document.querySelector(".navbarOptions");
const options = [
    {
        name: '일본',
        tagName: 'fa-lira-sign',
        home_link: 'homeJapan'
    }, 
    {
        name: '한국',
        tagName: 'fa-city',
        home_link: 'homeKorea'
    }, 
    {
        name: '캐나다',
        tagName: 'fa-tree',
        home_link: 'homeCanada'
    },
    {
        name: '미국',
        tagName: 'fa-republican',
        home_link: 'homeAmerica'
    }, 
    {
        name: '노르웨이',
        tagName: 'fa-pizza-slice',
        home_link: 'homeNorway'
    }, 
    {
        name: '몰타',
        tagName: 'fa-motorcycle',
        home_link: 'homeMolta'
    }, 
    {
        name: '파리',
        tagName: 'fa-hat-cowboy',
        home_link: 'homeParis'
    },
    ];

for(let i=0; i<options.length; i++){
    const divTag = document.createElement('div');
    const textDivTag = document.createElement('div');
    const iTag = document.createElement('i');
    const aTag = document.createElement('a');
    aTag.href = `/goTrip/${options[i].home_link}`;

    iTag.classList.add('fas');
    iTag.classList.add(`${options[i].tagName}`);
    divTag.classList.add('optionsMargin');
    divTag.className += ' optionsContainer';
    textDivTag.textContent = options[i].name;

    aTag.appendChild(iTag);
    divTag.appendChild(aTag);
    divTag.appendChild(textDivTag);
    navbarOptions.appendChild(divTag)
}