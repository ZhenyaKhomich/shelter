document.addEventListener('DOMContentLoaded', function() {

    let burg = document.body.querySelector('.burg');
    let menu = document.body.querySelector('.menu');

    burg.classList.remove('openBurg');
    menu.classList.remove('openMenu');

    burg.addEventListener('click', function() {
        burg.classList.toggle('openBurg');
        menu.classList.toggle('openMenu');
    })

    document.body.addEventListener('click', function() {
        
        if(!event.target.closest('nav')) {
        burg.classList.remove('openBurg');
        menu.classList.remove('openMenu');
    }  
    })

    document.body.addEventListener('click', function() {
        
        if(event.target.classList == 'li') {
        burg.classList.remove('openBurg');
        menu.classList.remove('openMenu');
        }  
    })
})