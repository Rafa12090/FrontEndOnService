const persistPlugin = (store) => {
    // Recupera el estado almacenado previamente del almacenamiento local
    const persistedState = localStorage.getItem("vuexState");

    if (persistedState) {
        // Si se encuentra un estado almacenado, lo carga en el almacenamiento de Vuex
        store.replaceState(JSON.parse(persistedState));
    }

    // Guarda el estado de Vuex en el almacenamiento local cada vez que cambia
    store.subscribe((mutation, state) => {
        localStorage.setItem("vuexState", JSON.stringify(state));
    });
};

export default persistPlugin;