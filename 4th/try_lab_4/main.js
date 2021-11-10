const sections = document.querySelectorAll('section');
const navli = document.querySelectorAll('.main-header .main-nav li');

window.addEventListener('scroll', ()=> {
    let current = '';
    console.log(pageYOffset);

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = sections.clientHeight;
        if(pageYOffset >= sectionTop) {
            current = section.getAttribute('id')
        }
    })
   navli.forEach( li => {
       li.classList.remove('active');
       if(li.classList.contains(current)) {
           li.classList.add('active')

       }
   })
})