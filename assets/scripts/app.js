const addMovieModal = document.getElementById('add-modal');
const backgroundModel = document.getElementById('backdrop');
const startAddMovieModal = document.querySelector('header button');
const cancelModal = addMovieModal.querySelector('.btn--passive');
const addMovieButton = cancelModal.nextElementSibling;
const inputModal = addMovieButton.querySelectorAll('input');
//const inputModal = document.getElementsByTagName('input');
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

const backdropClick = () => {
    toggleMovieModal();
}

const CancelButton = () => {
   toggleMovieModal();
}

const addButton = () => {
   const titleValue = userInput[0].value;
   const imageURLValue = userInput[1].value;
   const ratingValue = userInput[2].value;

   if (
    titleValue === " " ||
    imageURLValue === " " ||
    ratingValue === " " ||
    +ratingValue < 1 || 
    +rating > 5
    ) {
        alert("Plz enter valid inputs !")
        return;
    }
}

startAddMovieModal.addEventListener('click',toggleMovieModal);
backgroundModel.addEventListener('click',backdropClick);
cancelModal.addEventListener('click',CancelButton);
addMovieButton.addEventListener('click',addButton)