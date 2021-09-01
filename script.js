const nav = document.querySelector('nav');
const topOfNav =  nav.offsetTop;

window.addEventListener('scroll', handleScroll);
function handleScroll() {
    if(window.scrollY >= topOfNav) {        
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = '0px';
        document.body.classList.remove('fixed-nav');
    }
    
}
