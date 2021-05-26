(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._ownCard=r===e.owner._id,this._text=e.name,this._image=e.link,this._likesCount=e.likes.length,this._selector=n,this._handleCardClick=o,this._cardRemoveHanlder=i,this._cardLikeHandler=a,this._cardDislikeHanlder=s,this._isLiked=e.likes.some((function(e){return e._id==r}))}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".pictures__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._imageElement=this._element.querySelector(".pictures__item-photo"),this._nameElement=this._element.querySelector(".pictures__item-name"),this._likeButton=this._element.querySelector(".pictures__item-like"),this._removeButton=this._element.querySelector(".pictures__item-remove"),this._likesCounter=this._element.querySelector(".pictures__item-likes-count"),this._ownCard||(this._removeButton.remove(),this._removeButton=null),this._isLiked&&this._toggleLike(this._likesCount),this._setEventListeners(),this._imageElement.src=this._image,this._imageElement.alt=this._text,this._nameElement.textContent=this._text,this._likesCounter.textContent=this._likesCount,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){return e._handleLikeClick()})),this._ownCard&&this._removeButton.addEventListener("click",(function(){return e._handleRemoveClick()})),this._imageElement.addEventListener("click",(function(){return e._handleCardClick()}))}},{key:"_handleLikeClick",value:function(){var e=this;this._isLiked?this._cardDislikeHanlder((function(t){return e._toggleLike(t)})):this._cardLikeHandler((function(t){return e._toggleLike(t)})),this._isLiked=!this._isLiked}},{key:"_toggleLike",value:function(e){this._likesCount=e,this._likesCounter.textContent=this._likesCount,this._likeButton.classList.toggle("pictures__item-like_active")}},{key:"_handleRemoveClick",value:function(){var e=this;this._cardRemoveHanlder((function(){return e._removeElement()}))}},{key:"_removeElement",value:function(){this._ownCard&&this._element.remove()}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"render",value:function(){var e=this;this._items.forEach((function(t){e._container.append(e._renderer(t))}))}},{key:"addItem",value:function(e){this._container.prepend(this._renderer(e))}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._openedPopupClass="popup_opened",this._closeButton=this._popupElement.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add(this._openedPopupClass),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove(this._openedPopupClass),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOutsidePopupClose",value:function(e){e.target===this._popupElement&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){return e.close()})),this._popupElement.addEventListener("click",(function(t){return e._handleOutsidePopupClose(t)}))}}])&&o(t.prototype,n),e}();function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupCaption=t._popupElement.querySelector(".popup__image-caption"),t._popupImage=t._popupElement.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupCaption.textContent=e,this._popupImage.src=t,this._popupImage.alt=e,u(f(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),a}(i);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formSubmitHanlder=t,n._form=n._popupElement.querySelector(".form"),n._submit=n._popupElement.querySelector(".form__submit"),n._submitText=n._submit.textContent,n}return t=a,(n=[{key:"setFormValidator",value:function(e){this._formValidator=e,this._formValidator.enableValidation()}},{key:"getForm",value:function(){return this._form}},{key:"open",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.keys(t).forEach((function(n){var r=e._form.querySelector(".form__input[name='".concat(n,"']"));null!==r&&(r.value=t[n]),e._formValidator&&e._formValidator.revalidate()})),d(v(a.prototype),"open",this).call(this)}},{key:"_getInputValues",value:function(){return Array.from(this._form.querySelectorAll(".form__input")).reduce((function(e,t){return e[t.name]=t.value,e}),{})}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._formSubmitHanlder(e._getInputValues())})),d(v(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),void 0!==this._formValidator&&this._formValidator.toggleButtonState(),d(v(a.prototype),"close",this).call(this)}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submit.textContent=e?t:this._submitText}}])&&_(t.prototype,n),a}(i);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(t),this._aboutElement=document.querySelector(n),this._avatarElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{id:this._id,name:this._nameElement.textContent,about:this._aboutElement.textContent,avatar:this._avatarElement.src}}},{key:"setUserInfo",value:function(e,t,n,r){this._id=e,this._nameElement.textContent=t,this._aboutElement.textContent=n,this._avatarElement.src=r}}])&&g(t.prototype,n),e}(),E={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._formElement=n,this._buttonElement=this._formElement.querySelector(this._settings.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._settings.inputErrorClass),n.textContent=t,n.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._settings.inputErrorClass),t.classList.remove(this._settings.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"revalidate",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._checkInputValidity(t)}))}},{key:"enableValidation",value:function(){this.toggleButtonState(),this._setEventListeners()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._settings.inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._settings.inactiveButtonClass))}}])&&C(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=t.headers,this._baseUrl=t.baseUrl}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"patchUserInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"patchUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"postCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._checkResponse)}},{key:"likeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"PUT"}).then(this._checkResponse)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("API returned an error")}}])&&S(t.prototype,n),e}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popupElement.querySelector(".form"),t._submit=t._popupElement.querySelector(".form__submit"),t._submitText=t._submit.textContent,t}return t=a,(n=[{key:"open",value:function(e){this._submitHanlder=e,j(q(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHanlder()})),j(q(a.prototype),"setEventListeners",this).call(this)}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Удаление...";this._submit.textContent=e?t:this._submitText}}])&&P(t.prototype,n),a}(i);function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var U=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-24",headers:{authorization:"95c85b95-3cb8-4962-9069-374e5b282358","Content-Type":"application/json"}}),B=document.querySelector(".profile"),A=B.querySelector(".profile__edit"),V=B.querySelector(".profile__add"),H=B.querySelector(".profile__avatar-edit"),D=new k(".profile__name",".profile__about",".profile__avatar"),F=null;Promise.all([U.getUserInfo(),U.getInitialCards()]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];D.setUserInfo(i._id,i.name,i.about,i.avatar),(F=new r({items:a,renderer:G},".pictures__list ")).render()})).catch((function(e){return console.log(e)}));var N=new b(".popup_type_add-card",(function(e){N.renderLoading(!0),U.postCard(e.name,e.link).then((function(e){F.addItem(e),N.close()})).catch((function(e){return console.log(e)})).finally((function(e){N.renderLoading(!1)}))}));N.setEventListeners(),N.setFormValidator(new w(E,N.getForm()));var J=new b(".popup_type_edit-profile",(function(e){var t=e.name,n=e.about;J.renderLoading(!0),U.patchUserInfo(t,n).then((function(e){D.setUserInfo(e._id,e.name,e.about,e.avatar),J.close()})).catch((function(e){return console.log(e)})).finally((function(e){J.renderLoading(!1)}))}));J.setEventListeners(),J.setFormValidator(new w(E,J.getForm()));var M=new h(".popup_type_picture");M.setEventListeners();var z=new x(".popup_type_approve");z.setEventListeners();var $=new b(".popup_type_edit-avatar",(function(e){var t=e.avatar;$.renderLoading(!0),U.patchUserAvatar(t).then((function(e){D.setUserInfo(e._id,e.name,e.about,e.avatar),$.close()})).catch((function(e){return console.log(e)})).finally((function(e){$.renderLoading(!1)}))}));function G(e){return new t(e,"#picture-template",D.getUserInfo().id,(function(){return M.open(e.name,e.link)}),(function(t){z.open((function(){z.renderLoading(!0),U.removeCard(e._id).then((function(e){t(),z.close()})).catch((function(e){return console.log(e)})).finally((function(e){return z.renderLoading(!1)}))}))}),(function(t){U.likeCard(e._id).then((function(e){t(e.likes.length)})).catch((function(e){return console.log(e)}))}),(function(t){U.dislikeCard(e._id).then((function(e){t(e.likes.length)})).catch((function(e){return console.log(e)}))})).generateCard()}$.setEventListeners(),$.setFormValidator(new w(E,$.getForm())),H.addEventListener("click",(function(){$.open()})),A.addEventListener("click",(function(){J.open(D.getUserInfo())})),V.addEventListener("click",(function(){return N.open()}))})();