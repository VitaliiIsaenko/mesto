let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit');
let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__job');

let popup = document.querySelector('.popup');
let popupContainer = popup.querySelector('.popup__container');
let form = popupContainer.querySelector('.form');

let popupCloseButton = popupContainer.querySelector('.popup__close');
let nameInput = form.querySelector('.form__input_name_name');
let jobInput = form.querySelector('.form__input_name_job');


function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup();
}

function openPopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

form.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);