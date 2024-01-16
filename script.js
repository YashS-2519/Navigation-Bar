var menu = document.querySelector('#menu')
var background = document.querySelector('.background')
var sideNav = document.querySelector('.side-nav')
var closeBtn = document.querySelector('#close')


menu.addEventListener('click',()=>{
    background.style.transform = 'scale(0.4) translateX(30%) rotateY(-6deg)';
    background.style.filter = 'blur(1.5px)';
    sideNav.style.transform = 'translateX(0%)';
});

closeBtn.addEventListener('click', ()=>{
    background.style.transform = 'scale(1) translateX(0%)';
    background.style.filter = 'blur(0)';
    sideNav.style.transform = 'translateX(-100%)';
});