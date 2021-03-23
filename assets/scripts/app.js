const addMovieModal = document.getElementById('add-modal');
const backgroundModel = document.getElementById('backdrop');
const startAddMovieModal = document.querySelector('header button')
//const startAddMovieModal = document.querySelector('header').lastElementChild;
// const modalaction = document.getElementsByClassName('modal__action');
// const modalcontent = document.getElementsByClassName('modal__content');
// const backgroundModal = document.body.firstElementChild;

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdropModal();
}

const toggleBackdropModal = () => {
   backgroundModel.classList.toggle('visible');
}


startAddMovieModal.addEventListener('click',toggleMovieModal,toggleBackdropModal);