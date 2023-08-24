const text = document.querySelector('.second-text');
const textLoad = () =>{
    setTimeout(() => {
        text.textContent = 'Web Developer';
    },0);
    setTimeout(() => {
        text.textContent = 'Junior Programmer';
    },4000);
    setTimeout(() => {
        text.textContent = 'Free Fire Gamer';
    },8000);
    
}
textLoad();
setInterval(textLoad, 12000)