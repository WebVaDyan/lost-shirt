(function() {

    const elem = document.querySelector('.products__list');
    const iso = new Isotope( elem, {
    // options
    itemSelector: '.products__item',
    filter: '.popular'
    });

    const controlls = document.querySelectorAll('.filter__link');
    const activeClass = 'filter__iteam--active';

    controlls.forEach(function(control) {
         
       control.addEventListener('click', function(e) {

        e.preventDefault();


        const filterName = control.getAttribute("data-filter");
        
        controlls.forEach(function(link){
            link.closest('.filter__iteam').classList.remove(activeClass);
        })

            control.closest('.filter__iteam').classList.add(activeClass);

            iso.arrange({
                filter: `.${filterName}`
            })

       })
        
    })

}()) 