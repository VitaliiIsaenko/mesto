const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

const profilePopup = document.querySelector('.popup_type_edit-profile');
const profileForm = profilePopup.querySelector('.form');

const profileCloseButton = profilePopup.querySelector('.popup__close');
const profileNameInput = profileForm.querySelector('.form__input_type_name');
const profileJobInput = profileForm.querySelector('.form__input_type_job');

const cardAddButton = profile.querySelector('.profile__add');

const cardPopup = document.querySelector('.popup_type_add-card');
const cardForm = cardPopup.querySelector('.form');

const cardCloseButton = cardPopup.querySelector('.popup__close');
const cardNameInput = cardForm.querySelector('.form__input_type_name');
const cardPictureLinkInput = cardForm.querySelector('.form__input_type_picture-link');

const picturePopup = document.querySelector('.popup_type_picture');
const pictureCloseButton = picturePopup.querySelector('.popup__close');

const pictureTemplate = document.querySelector('#picture-template').content;
const pictureList = document.querySelector('.pictures__list');

function createCard(name, photoLink) {
    const pictureCopy = pictureTemplate.cloneNode(true);
    const picturePhoto = pictureCopy.querySelector('.pictures__item-photo');
    const pictureName = pictureCopy.querySelector('.pictures__item-name');
    picturePhoto.src = photoLink;
    pictureName.textContent = name;

    const likeButton = pictureCopy.querySelector('.pictures__item-like');
    likeButton.addEventListener('click', evt => evt.target.classList.toggle('pictures__item-like_active'));

    const trashButton = pictureCopy.querySelector('.pictures__item-remove');
    trashButton.addEventListener('click', evt => evt.target.closest('.pictures__item').remove());

    const image = pictureCopy.querySelector('.pictures__item-photo');
    image.addEventListener('click', evt => openPicturePopup(evt.target.closest('.pictures__item')));

    return pictureCopy;
}

function profileFormSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = profileNameInput.value;
    profileJob.textContent = profileJobInput.value;

    closeProfilePopup();
}

function openProfilePopup() {
    profileNameInput.value = profileName.textContent;
    profileJobInput.value = profileJob.textContent;
    profilePopup.classList.add('popup_opened');
}

function closeProfilePopup() {
    profilePopup.classList.remove('popup_opened');
}

function cardFormSubmitHandler(evt) {
    evt.preventDefault();

    const card = createCard(cardNameInput.value, cardPictureLinkInput.value);
    pictureList.prepend(card);

    closeCardPopup();
}

function openCardPopup() {
    cardPopup.classList.add('popup_opened');
}

function closeCardPopup() {
    cardNameInput.value = '';
    cardPictureLinkInput.value = '';
    cardPopup.classList.remove('popup_opened');
}

function openPicturePopup(pictureItem) {
    const popupImage = picturePopup.querySelector('.popup__image');
    popupImage.src = pictureItem.querySelector('.pictures__item-photo').src;
    const popupCaption = picturePopup.querySelector('.popup__image-caption');
    popupCaption.textContent = pictureItem.querySelector('.pictures__item-name').textContent;

    picturePopup.classList.add('popup_opened');
}

function closePicturePopup() {
    picturePopup.classList.remove('popup_opened');
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

profileForm.addEventListener('submit', profileFormSubmitHandler);
profileEditButton.addEventListener('click', openProfilePopup);
profileCloseButton.addEventListener('click', closeProfilePopup);

cardForm.addEventListener('submit', cardFormSubmitHandler);
cardAddButton.addEventListener('click', openCardPopup);
cardCloseButton.addEventListener('click', closeCardPopup);

pictureCloseButton.addEventListener('click', closePicturePopup);

initializeCards();