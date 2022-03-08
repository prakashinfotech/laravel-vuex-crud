import {createApp} from 'vue'
import Vuex from "vuex";
import axios from 'axios'

import App from '../App.vue'
const app = createApp(App)
app.use(Vuex);

const store = new Vuex.Store({
    state: {
        subjects: []
    },
    mutations: {
        initSubjects(state, subjects) {
            state.subjects = subjects;
            console.log(subjects);
        }
    },
    actions: {
        initApp(context) {
            axios.get('/api/subjects')
                .then(response => {
                    context.commit("initSubjects", response.data);
                }).catch(function (error) {
                console.error(error);
            });
        },
    },
    getters: {
        getSubjects(state) {
            return state.subjects;
        }
    }
});

export default store;
