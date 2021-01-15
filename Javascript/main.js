const activeState = document.querySelector('#active-state');
const shareIcon = document.querySelectorAll('.share-icon');

shareIcon.forEach(icon => {
    icon.addEventListener('click', showSharelinks);
})

function showSharelinks(){
    activeState.classList.toggle('hide');
}