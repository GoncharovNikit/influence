
export const commonFlagsModule = {
    state: () => ({
        preloaderVisibility: false,
    }),
    mutations: {
        setPreloaderVisibility(state, bool) {
            state.preloaderVisibility = bool
        },
       
    },
    actions: {
        async hidePreloader({commit}) {
            commit('setPreloaderVisibility', false)
        },
        async showPreloader({commit}) {
            commit('setPreloaderVisibility', true)
        },
        async changePreloaderVisibility({state, commit}) {
            commit('setPreloaderVisibility', !state.preloaderVisibility)
        },
    },
    namespaced: true,
}