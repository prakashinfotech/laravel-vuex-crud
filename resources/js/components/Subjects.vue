<template>
    <div>
        <h4 class="text-center">All Subjects</h4><br/>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Created At</th>
                <th>Updated At</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="subject in subjects" :key="subject.id">
                <td>{{ subject.id }}</td>
                <td>{{ subject.subject.name }}</td>
                <td>{{ getHumanDate(subject.created_at) }}</td>
                <td>{{ getHumanDate(subject.updated_at) }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import moment from 'moment';
    export default {
        created() {
            this.$store.dispatch("initApp");
        },
        methods: {
            getHumanDate : function (date) {
                return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
            }
        },
        computed: {
            subjects() {
                return this.$store.getters.getSubjects;
            },
        },
        beforeRouteEnter(to, from, next) {
            if (!window.Laravel.isLoggedin) {
                window.location.href = "/";
            }
            next();
        },
    };
</script>
