<template>
    <div>
        <h1>Movies</h1>
        <ol>
           <li v-for="movie in movies" v-bind:key="movie.id">
               <router-link :to="'/' + movie.id">{{movie.title}}</router-link>
           </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "Movies.vue",
        data: function () {
            return {
                movies: []
            }
        },
        mounted() {
            let vn = this;
            this.axios.get('https://swapi.dev/api/films')
                .then((response) => {
                    let movies = response.data.results;
                    movies.forEach((movie) => {
                        let parts = movie.url.split('/');
                        let lastSegment = parts.pop() || parts.pop();
                        vn.movies.push({
                            title: movie.title,
                            id: lastSegment,
                            url: movie.url
                        });
                    })
                });
        }
    }
</script>

<style scoped>

</style>