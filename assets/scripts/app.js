const addMovieModal = document.getElementById('add-modal');
const backgroundModel = document.getElementById('backdrop');
const startAddMovieModal = document.querySelector('header button');
const cancelModal = addMovieModal.querySelector('.btn--passive');
const addMovieButton = cancelModal.nextElementSibling;
const inputModal = addMovieModal.querySelectorAll('input');
const initialText = document.getElementById('entry-text');
//const inputModal = document.getElementsByTagName('input');
//const startAddMovieModal = document.querySelector('header').lastElementChild;
// const modalaction = document.getElementsByClassName('modal__action');
// const modalcontent = document.getElementsByClassName('modal__content');
// const backgroundModal = document.body.firstElementChild;

const newMovie = [];



const updateUI = () => {
    if (newMovie.length === 0){
        initialText.style.display = 'block';
    } else{
        initialText.style.display = 'none';
    }
}

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdropModal();
}

const toggleBackdropModal = () => {
   backgroundModel.classList.toggle('visible');
}

const backdropClick = () => {
    toggleMovieModal();
    usrClearInput();
}

const usrClearInput = () => {
    for (const clrInput of inputModal){
        clrInput.value = '';
    }
}

const CancelButton = () => {
   toggleMovieModal();
   usrClearInput();
}


const addButton = () => {
   const titleValue = inputModal[0].value;
   const imageURLValue = inputModal[1].value;
   const ratingValue = inputModal[2].value;

   if (
    titleValue === " " ||
    imageURLValue === " " ||
    ratingValue === " " ||
    +ratingValue < 1 || 
    +ratingValue > 5
    ) {
        alert("Plz enter valid inputs !")
        return;
    }

    const movieHandler = {
        title: titleValue,
        ImageURL: imageURLValue,
        rating: ratingValue,

    };

    newMovie.push(movieHandler) // used to puch the data from add button to the movie
    console.log(newMovie); // used to display the data in the V8 engine
    toggleMovieModal(); // used to close the modal
    usrClearInput();
    updateUI();
}

startAddMovieModal.addEventListener('click',toggleMovieModal);
backgroundModel.addEventListener('click',backdropClick);
cancelModal.addEventListener('click', CancelButton);
addMovieButton.addEventListener('click', addButton)