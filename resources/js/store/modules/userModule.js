import axios from 'axios'
import router from '../../router'

export const userModule = {

    state: () => ({
        isAuthorized: false,
        user: { username: '', email: '', password: '', password_confirmation: '' },
        errors: null,
    }),
    mutations: {
        setAuthorized(state, user) {
            state.isAuthorized = true
            state.user = user
        },
        clearUserData(state) {
            state.isAuthorized = false
            state.user = { username: '', email: '', password: '', password_confirmation: '' }
        },
        setUserName(state, username) { state.user.username = username },
        setUserEmail(state, email) { state.user.email = email },
        setUserPassword(state, password) { state.user.password = password },
        setUserPasswordConfirmation(state, password_c) { state.user.password_confirmation = password_c },
        setUserData(state, user) { state.user = user },
        setFetchedErrors(state, errors) { state.errors = errors },
        clearServerErrors(state) { state.errors = {} }
    },
    getters: {
        errors(state) {
            return state.errors
        }
    },
    actions: {
        async axiosErrorsHandler({ }, error) {
            console.log(error, 'ERRoRRE');
            switch (error.response.status ?? -1) {
                case 401:
                    console.log('Login in to use this action.');
                    break;
                case 422:
                    console.log('Чего-то не хватает..');
                    break;
                case 500:
                    console.log('Internal Server Error');
                    break;
                default:
                    console.log('This status didn\'t processed. (' + error.status ?? -1 + ')');
                    break;
            }
        },
        async registerUser({ state, commit, dispatch }) {
            if (state.isAuthorized) {
                console.log('User already authorized! Log out firstly!');
                return null;
            }
            try {
                dispatch('commonFlags/showPreloader', {}, { root: true })
                await axios.post('/api/auth/register', state.user)
                    .then(response => {
                        console.log(response)
                        if (response.status == 201) {
                            console.log('Login after successfull registration...');
                            dispatch('loginUser')
                        }
                    })
                    .catch(error => {
                        commit('setFetchedErrors', error.response.data)
                        dispatch('axiosErrorsHandler', error)
                    })
            } catch (e) {
                console.log('Failed to register user: ', e.message)
            } finally {
                dispatch('commonFlags/hidePreloader', {}, { root: true })
            }
        },
        async loginUser({ state, commit, dispatch }) {
            if (state.isAuthorized) {
                console.log('User already authorized! Log out firstly!');
                return null;
            }
            try {
                dispatch('commonFlags/showPreloader', {}, { root: true })

                await axios.post('/api/auth/login', state.user)
                    .then(response => {
                        console.log(response);
                        if (response.status == 200) {
                            console.log('Successfull logining. Setting access token...')
                            document.cookie = 'token=' + encodeURIComponent(response.data.access_token)
                            commit('setAuthorized', response.data.user)
                            // Redirect to main
                            router.push('/')
                        }
                    })
                    .catch(error => {
                        dispatch('axiosErrorsHandler', error)
                        commit('setFetchedErrors', error.response.data)
                    })
            } catch (e) {
                console.log('TryCatch Error:', e)
            } finally {
                dispatch('commonFlags/hidePreloader', {}, { root: true })
            }
        },
        async logoutUser({ state, commit, dispatch }) {
            try {
                dispatch('commonFlags/showPreloader', {}, { root: true })

                await axios.post('/api/auth/logout')
                    .then(response => {
                        console.log(response);
                        if (response.status == 200) {
                            console.log('Successfull logouting. User data clearing...x');
                            commit('clearUserData')
                            // Redirect to login
                            router.push('/login')
                        }
                    })
                    .catch(error => {
                        dispatch('axiosErrorsHandler', error)
                    })
            } catch (e) {
                console.log('TryCatch Error:', e)
            } finally {
                dispatch('commonFlags/hidePreloader', {}, { root: true })
            }
        },
        async profile({ state, commit, dispatch }) {
            try {
                dispatch('commonFlags/showPreloader', {}, { root: true })

                await axios.get('/api/auth/profile')
                    .then(response => {
                        console.log(response.data);
                        if (response.status == 200) {
                            console.log('Profile has taken successfull. Setting to the state...');
                            commit('setAuthorized', response.data)
                        }
                    })
                    .catch(error => {
                        dispatch('axiosErrorsHandler', error)
                    })
            } catch (e) {
                console.log('TryCatch Error:', e)
            } finally {
                dispatch('commonFlags/hidePreloader', {}, { root: true })
            }
        },
        async refreshToken({ state, commit, dispatch }) {
            try {
                dispatch('commonFlags/showPreloader', {}, { root: true })

                await axios.post('/api/auth/refresh')
                    .then(response => {
                        console.log(response);
                        if (response.status == 200) {
                            console.log('Token refreshed successfull. Setting new value to cookie...');
                            document.cookie = 'token=' + encodeURIComponent(response.data.access_token)
                        }
                    })
                    .catch(error => {
                        dispatch('axiosErrorsHandler', error)
                    })

            } catch (e) {
                console.log('TryCatch Error:', e)
            } finally {
                dispatch('commonFlags/hidePreloader', {}, { root: true })
            }
        }
    },
    namespaced: true,
}