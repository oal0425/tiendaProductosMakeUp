function slider() {
    const sliders = [...document.querySelectorAll('.testimony__body')];
    /* Al encerrarlos entre corchetes y agregarle 3 puntos, hacemos que sea un array en vez de un nodo de elementos */
    
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    let value;

    buttonNext.addEventListener('click', () =>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () =>{
        changePosition(-1);
    });

    const changePosition = (add) =>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;
        
        sliders[Number(currentTestimony) - 1].classList.remove('testimony__body--show');
        if (value === sliders.length + 1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }


        sliders[value-1].classList.add('testimony__body--show');
        
    }

}

export default slider;