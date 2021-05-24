export default class Api {
    constructor(options) {
        this._headers = options.headers;
        this._baseUrl = options.baseUrl;
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
                headers: this._headers
            })
            .then(result => {
                if (result.ok) {
                    return result.json();
                }
                return Promise.reject("Cards fetching failed");
            })
            .then(data => {
                return data;
            })
            .catch(err => {
                console.log(err);
                return Promise.reject(err)
            });
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
                headers: this._headers
            })
            .then(result => {
                if (result.ok) {
                    return result.json();
                }
                return Promise.reject("User info fetching failed");
            })
            .catch(err => {
                console.log(err);
                return Promise.reject(err)
            });
    }

    patchUserInfo(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
                headers: this._headers,
                method: 'PATCH',
                body: JSON.stringify({
                    name,
                    about
                })
            })
            .then(result => {
                if (result.ok) {
                    return result.json();
                }
                return Promise.reject("User info patch failed");
            })
            .then(data => {
                return data;
            })
            .catch(err => {
                console.log(err);
                return Promise.reject(err)
            });
    }

    patchUserAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
                headers: this._headers,
                method: 'PATCH',
                body: JSON.stringify({
                    avatar
                })
            })
            .then(result => {
                if (result.ok) {
                    return result.json();
                }
                return Promise.reject("User avatar patch failed");
            })
            .then(data => {
                return data;
            })
            .catch(err => {
                console.log(err);
                return Promise.reject(err)
            });
    }

    postCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
                headers: this._headers,
                method: 'POST',
                body: JSON.stringify({
                    name,
                    link
                })
            })
            .then(result => {
                if (result.ok) {
                    return result.json();
                }
                return Promise.reject("Adding a card failed")
            })
            .catch(err => {
                console.log(err);
                return Promise.reject(err)
            });
    }

    removeCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
                headers: this._headers,
                method: 'DELETE'
            })
            .then(result => {
                if (result.ok) {
                    return result.json();
                }
                return Promise.reject("Deleting a card failed")
            })
            .catch(err => {
                console.log(err);
                return Promise.reject(err)
            });
    }

    likeCard(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
                headers: this._headers,
                method: 'PUT'
            })
            .then(result => {
                if (result.ok) {
                    return result.json();
                }
                return Promise.reject("Liking a card failed");
            })
            .catch(err => {
                console.log(err);
                return Promise.reject(err)
            });
    }

    dislikeCard(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
                headers: this._headers,
                method: 'DELETE'
            })
            .then(result => {
                if (result.ok) {
                    return result.json();
                }
                return Promise.reject("Disliking a card failed");
            })
            .catch(err => {
                console.log(err);
                return Promise.reject(err)
            });
    }
}