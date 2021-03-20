let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit');

let popup = document.querySelector('.popup');
let form = popup.querySelector('.popup__popup-container');

let popupCloseButton = form.querySelector('.popup__close');

form.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);


function openPopup() {
    let inputName = form.querySelector('.popup__input-name');
    let inputJob = form.querySelector('.popup__input-job');

    let profileName = profile.querySelector('.profile__name');
    let profileJob = profile.querySelector('.profile__job');

    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    let nameInput = form.querySelector('.popup__input-name');
    let jobInput = form.querySelector('.popup__input-job');

    let profileName = profile.querySelector('.profile__name');
    let profileJob = profile.querySelector('.profile__job');

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup();
}