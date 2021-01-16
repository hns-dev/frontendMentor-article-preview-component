const activeState = document.querySelector('#active-state');
const shareIcon = document.querySelectorAll('.share-btn');
const shareActive = document.querySelector('#share-btn');

shareIcon.forEach(icon => {
    icon.addEventListener('click', showSharelinks);
})

function showSharelinks(){
    activeState.classList.toggle('hide');
    shareActive.classList.toggle('active');
}