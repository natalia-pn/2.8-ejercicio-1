const faceValue = document.querySelector('.face');

const headContainer = document.querySelector('.head');


function changeFace() {
    faceValue.innerHTML = ';)';
}

headContainer.addEventListener ('mouseout', changeFace);