const body = document.querySelector('body');
const input = document.querySelector('input');
const button = document.querySelector('button');
const closeButton = document.getElementById("close");

button.addEventListener('click', function(){
    input.style.display = 'block';
    input.style.border = '2px solid black';
    input.style.borderRight = 'none'
    input.style.width = '200px'
    input.style.transition = 'width 2s';
    closeButton.style.display = 'block';
    closeButton.style.opacity = '1';
    closeButton.style.transition = 'opacity 2s'
})
closeButton.addEventListener('click', function(){
    // input.style.display = 'none';
    input.style.borderRight = 'none'
    input.style.width = '0'
    input.style.transition = 'width 2s';
    button.style.borderLeft = 'none'
    closeButton.style.opacity = '0';
    closeButton.style.transition = 'opacity 1s'
    // closeButton.style.display = 'none';
})