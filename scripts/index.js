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

// Profile
const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit');
const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');

const profilePopup = document.querySelector('.popup_type_edit-profile');
const profileForm = profilePopup.querySelector('.form');

const profileCloseButton = profilePopup.querySelector('.popup__close');
const profileNameInput = profileForm.querySelector('.form__input_type_profile-name');
const profileAboutInput = profileForm.querySelector('.form__input_type_about');

// Pictures
const picturePopup = document.querySelector('.popup_type_picture');
const pictureCloseButton = picturePopup.querySelector('.popup__close');

const pictureList = document.querySelector('.pictures__list');

// Cards
const cardAddButton = profile.querySelector('.profile__add');

const cardPopup = document.querySelector('.popup_type_add-card');
const cardForm = cardPopup.querySelector('.form');

const cardNameInput = cardForm.querySelector('.form__input_type_card-name');
const cardPictureLinkInput = cardForm.querySelector('.form__input_type_picture-link');

const cardCloseButton = cardPopup.querySelector('.popup__close');

// Popups
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.openedPopup = popup;
    document.addEventListener('keydown', closePopupOnEscape);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupOnEscape);
}

function closePopupOnEscape(evt) {
    if (evt.key === 'Escape') {
        closePopup(evt.currentTarget.openedPopup);
    }
}

// Profile
function openProfilePopup(profileName, profileAbout) {
    profileNameInput.value = profileName;
    profileNameInput.dispatchEvent(new Event('input'));

    profileAboutInput.value = profileAbout;
    profileAboutInput.dispatchEvent(new Event('input'));

    openPopup(profilePopup);
}

function profileFormSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = profileNameInput.value;
    profileAbout.textContent = profileAboutInput.value;

    closePopup(profilePopup);
}

// Pictures
function openPicturePopup(name, link) {
    const popupCaption = picturePopup.querySelector('.popup__image-caption');
    popupCaption.textContent = name;

    const popupImage = picturePopup.querySelector('.popup__image');
    popupImage.src = link;
    popupImage.alt = name;

    openPopup(picturePopup);
}

// Cards
function cardFormSubmitHandler(evt) {
    evt.preventDefault();

    const card = createCard(cardNameInput.value, cardPictureLinkInput.value);
    pictureList.prepend(card);

    closeCardPopup();
}

function closeCardPopup() {
    cardForm.reset();

    cardNameInput.dispatchEvent(new Event('input'));
    cardPictureLinkInput.dispatchEvent(new Event('input'));

    closePopup(cardPopup);
}

function createCard(name, photoLink) {
    const pictureTemplate = document.querySelector('#picture-template').content;
    const pictureCopy = pictureTemplate.cloneNode(true);
    const picturePhoto = pictureCopy.querySelector('.pictures__item-photo');
    const pictureName = pictureCopy.querySelector('.pictures__item-name');
    picturePhoto.src = photoLink;
    picturePhoto.alt = name;
    pictureName.textContent = name;

    const likeButton = pictureCopy.querySelector('.pictures__item-like');
    likeButton.addEventListener('click', evt => evt.target.classList.toggle('pictures__item-like_active'));

    const trashButton = pictureCopy.querySelector('.pictures__item-remove');
    trashButton.addEventListener('click', evt => evt.target.closest('.pictures__item').remove());

    const image = pictureCopy.querySelector('.pictures__item-photo');
    image.addEventListener('click', () => {
        openPicturePopup(name, photoLink);
    });

    return pictureCopy;
}

function initializeCards() {
    initialCards.forEach(el => {
        pictureList.append(createCard(el.name, el.link));
    });
}

// Profile
profileForm.addEventListener('submit', profileFormSubmitHandler);
profileEditButton.addEventListener('click', () => openProfilePopup(profileName.textContent, profileAbout.textContent));
profileCloseButton.addEventListener('click', () => closePopup(profilePopup));

// Pictures
pictureCloseButton.addEventListener('click', () => closePopup(picturePopup));

// Cards
cardForm.addEventListener('submit', cardFormSubmitHandler);
cardAddButton.addEventListener('click', () => openPopup(cardPopup));
cardCloseButton.addEventListener('click', closeCardPopup);

// Popups
Array.from(document.querySelectorAll('.popup')).forEach(function(popup) {
    popup.addEventListener('click', function(evt) {
        if (evt.target === popup) {
            closePopup(popup);
        }
    });
});

initializeCards();

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
});