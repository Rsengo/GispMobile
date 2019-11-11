// import ldap from 'ldapjs';

class AuthApi {
    constructor({ url, login, password }) {
        // this.client = ldap.createClient({ url });
        this.login = login;
        this.password = password;
    }

    async login(callback) {
        this.client.bind(this.login, this.password, callback);
    }

    async logout(callback) {
        this.client.unbind(callback);
    }
}

export default AuthApi;