const helpButton = document.querySelector('#enter')
helpButton.addEventListener('click', () => {
    const infoArea = document.querySelector('.info-area')
    // if(infoArea.classList.contains('display-none')){
    //     infoArea.classList.remove('display-none');
    // } else {
        infoArea.classList.add('display-none')
    // }
})