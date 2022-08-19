// defining elements
const btn = document.querySelector('.btn');
const bar = document.querySelector('.bar');
const r = document.querySelector(':root');

// status variables
let btnVisible = false;

// adding listeners
window.addEventListener('click', event => {
    btn.style.display = 'initial';
    btnVisible = true;
    r.style.setProperty('--barFirstCol', 'rgb(212, 13, 13)')
    r.style.setProperty('--barSecondCol', 'rgb(243, 128, 33)')
    bar.style.animationPlayState = 'paused';
    bar.style.width = '100%';
})
bar.addEventListener('animationend', event => {
    if (!btnVisible) {
        window.location.href='https://ticktick.com/webapp/#q/all/today';
    }
})