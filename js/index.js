let profile = document.querySelector('.profile');
let popup = document.querySelector('.popup');

let form = popup.querySelector('.popup__popup-container');
form.addEventListener('submit', formSubmitHandler);

let editButton = profile.querySelector('.profile__edit');
editButton.addEventListener('click', openPopup);

let popupCloseButton = form.querySelector('.popup__close');
popupCloseButton.addEventListener('click', closePopup);

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