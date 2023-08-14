//! theme
function white(){
    document.body.style.backgroundColor = 'white';
    const p = document.querySelectorAll('p');
    for(const pStyle of p){
    pStyle.style.color = 'black'
}
    const h1 = document.querySelectorAll('h1,h2,h3');
    for(const pStyle of h1){
    pStyle.style.color = 'black'
}
    const a = document.querySelectorAll('a');
    for(const pStyle of a){
    pStyle.style.color = 'black'
}
    const span = document.querySelectorAll(".shadow-xl");
    for(const pStyle of span){
    pStyle.style.backgroundColor = 'transparent'
}
    const input = document.querySelectorAll(".input");
    for(const pStyle of input){
    pStyle.style.backgroundColor = 'transparent'
}
}
function black(){
    document.body.style.backgroundColor = '#0f192b';
    const p = document.querySelectorAll('p');
    for(const pStyle of p){
    pStyle.style.color = '#c4cfde'
}
    const h1 = document.querySelectorAll('h1,h2,h3');
    for(const pStyle of h1){
    pStyle.style.color = '#c4cfde'
    }
    const a = document.querySelectorAll('a');
    for(const pStyle of a){
    pStyle.style.color = '#c4cfde'
    }
    const span = document.querySelectorAll(".shadow-xl ");
    for(const pStyle of span){
    pStyle.style.backgroundColor = '#1e293b'
}
    const input = document.querySelectorAll(".input");
    for(const pStyle of input){
    pStyle.style.backgroundColor = '#1e293b'
    }
}
