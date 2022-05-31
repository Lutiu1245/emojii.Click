const cadeoNenem = document.querySelector('.closed')
const achou = document.querySelector('.open')

cadeoNenem.addEventListener('click', () =>{
    if(achou.classList.contains('open')) {
        achou.classList.add('active');
        cadeoNenem.classList.remove('active');
    }
});

achou.addEventListener('click', ()=>{
    if(cadeoNenem.classList.contains('closed')){
        cadeoNenem.classList.add('active');
        achou.classList.remove('active');
    }
})