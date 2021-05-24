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
            .then(data => {
                return {
                    "name": data.name,
                    "about": data.about,
                    "avatar": data.avatar
                };
            })
            .catch(err => console.log(err));
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
            .catch(err => console.log(err));
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
            .catch(err => console.log(err));
    }
}