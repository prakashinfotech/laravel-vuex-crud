import {createApp} from 'vue'
import Vuex from "vuex";
import axios from 'axios'

import App from '../App.vue'
const app = createApp(App)
app.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: null
    },
    mutations: {
        LOGIN_SUCCESS(state, response) {
            state.token = response.token
        },
    },
});

export default store;
