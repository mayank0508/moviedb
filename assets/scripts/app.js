const addMovieModal = document.getElementById('add-modal');
const backgroundModel = document.getElementById('backdrop');
const startAddMovieModal = document.querySelector('header button');
const cancelModal = addMovieModal.querySelector('.btn--passive');
const addMovieButton = cancelModal.nextElementSibling;
const inputModal = addMovieModal.querySelectorAll('input');
const initialText = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
//const inputModal = document.getElementsByTagName('input');
//const startAddMovieModal = document.querySelector('header').lastElementChild;
// const modalaction = document.getElementsByClassName('modal__action');
// const modalcontent = document.getElementsByClassName('modal__content');
// const backgroundModal = document.body.firstElementChild;

const newMovie = [];


const toggleBackdropModal = () => {
    backgroundModel.classList.toggle('visible');
 }


const updateUI = () => {
    if (newMovie.length === 0){
        initialText.style.display = 'block';
    } else{
        initialText.style.display = 'none';
    }
};

const cancelMovieDelete = () => {
    toggleBackdropModal();
    deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0; 
    for (const movie of newMovie) {
      if(movie.id === movieId){
         break;
      }
      movieIndex++;
  }
  newMovie.splice(movieIndex,1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  //listRoot.removeChild(listRoot.children[movieIndex]);
  cancelMovieDelete();
  updateUI();
}

const startdeleteMovieHandler = movieId => {
   deleteMovieModal.classList.add('visible');
   toggleBackdropModal();
   const cancelMovieDeletebutton =deleteMovieModal.querySelector('.btn--passive');
   let addMovieDeletebutton =deleteMovieModal.querySelector('.btn--danger');

   addMovieDeletebutton.replaceWith(addMovieDeletebutton.cloneNode(true));

   addMovieDeletebutton =deleteMovieModal.querySelector('.btn--danger');

   const cancelDeleteButton = deleteMovieModal.removeEventListener('click',cancelMovieDelete);

   //const addMovieDeletebutton = deleteMovieModal.removeEventListener('click',deleteMovieHandler.bind(null, movieId));
   
   cancelMovieDeletebutton.addEventListener('click',cancelMovieDelete)
   addMovieDeletebutton.addEventListener('click',deleteMovieHandler.bind(null, movieId));
};

const renderMovieButton = (id, title, imageURL, rating) => {
    const newMovieElement = document.createElement('li');
    //const newMovieElement = document.getElementsByClassName('movie-element');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${imageURL}" alt="${title}">
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 Stars</p>
    </div>
    `;
    newMovieElement.addEventListener('click',startdeleteMovieHandler.bind(null,id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
}

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
}

const showMovieModal = () => {
    //function
    addMovieModal.classList.add('visible');
    toggleBackdropModal();
}

const usrClearInput = () => {
    for (const clrInput of inputModal){
        clrInput.value = '';
    }
}

const CancelButton = () => {
   closeMovieModal();
   usrClearInput();
   toggleBackdropModal();
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
        id: Math.random().toString(),
        title: titleValue,
        ImageURL: imageURLValue,
        rating: ratingValue,

    };

    newMovie.push(movieHandler) // used to puch the data from add button to the movie
    console.log(newMovie); // used to display the data in the V8 engine
    closeMovieModal(); // used to close the modal
    toggleBackdropModal();
    usrClearInput();
    renderMovieButton(movieHandler.id,movieHandler.title,movieHandler.ImageURL, movieHandler.rating);
    updateUI();
};

const backdropClick = () => {
    closeMovieModal();
    cancelMovieDelete();
    usrClearInput();
};


startAddMovieModal.addEventListener('click',showMovieModal);
backgroundModel.addEventListener('click',backdropClick);
cancelModal.addEventListener('click', CancelButton);
addMovieButton.addEventListener('click', addButton)