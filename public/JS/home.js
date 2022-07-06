const navbarOptions = document.querySelector(".navbarOptions");
const options = [
    {
        name: '일본',
        tagName: 'fa-lira-sign',
    }, 
    {
        name: '캐나다',
        tagName: 'fa-tree',
    },
    {
        name: '미국',
        tagName: 'fa-republican',
    }, 
    {
        name: '노르웨이',
        tagName: 'fa-pizza-slice',
    }, 
    {
        name: '몰타',
        tagName: 'fa-motorcycle',
    }, 
    {
        name: '파리',
        tagName: 'fa-hat-cowboy',
    }
    ];

for(let i=0; i<options.length; i++){
    const divTag = document.createElement('div');
    const textDivTag = document.createElement('div');
    const iTag = document.createElement('i');
    iTag.classList.add('fas');
    iTag.classList.add(`${options[i].tagName}`);
    divTag.classList.add('optionsMargin');
    divTag.className += ' optionsContainer';
    textDivTag.textContent = options[i].name;
    divTag.appendChild(iTag);
    divTag.appendChild(textDivTag);
    navbarOptions.appendChild(divTag)
}