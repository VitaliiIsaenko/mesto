let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit');

let popup = document.querySelector('.popup');
let form = popup.querySelector('.popup__popup-container');

let popupCloseButton = form.querySelector('.popup__close');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
})

editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);


function openPopup() {
    let inputName = form.querySelector('.popup__input-name');
    let inputJob = form.querySelector('.popup__input-job');

    let profileName = profile.querySelector('.profile__name').textContent;
    let profileJob = profile.querySelector('.profile__job').textContent;

    inputName.value = profileName;
    inputJob.value = profileJob;
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}