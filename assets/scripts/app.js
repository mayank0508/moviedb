const addMovieModal = document.getElementById('add-modal');

const startAddMovieModal = document.querySelector('header button')
//const startAddMovieModal = document.querySelector('header').lastElementChild;
// const modalaction = document.getElementsByClassName('modal__action');
// const modalcontent = document.getElementsByClassName('modal__content');

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
}


startAddMovieModal.addEventListener('click',toggleMovieModal);