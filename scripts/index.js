const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

const popup = document.querySelector('.popup');
const form = popup.querySelector('.form');

const popupCloseButton = popup.querySelector('.popup__close');
const nameInput = form.querySelector('.form__input_name_name');
const jobInput = form.querySelector('.form__input_name_job');

const pictureTemplate = document.querySelector('#picture-template').content;
const pictureList = document.querySelector('.pictures__list');

function createCard(name, photoLink) {
    const pictureCopy = pictureTemplate.cloneNode(true);
    const picturePhoto = pictureCopy.querySelector('.pictures__item-photo');
    const pictureName = pictureCopy.querySelector('.pictures__item-name');
    picturePhoto.src = photoLink;
    pictureName.textContent = name;
    return pictureCopy;
}

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

function initializeCards() {
    const cards = [];
    initialCards.forEach(el => {
        cards.push(createCard(el.name, el.link));
    });
    pictureList.append(...cards);
}

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

form.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

initializeCards();