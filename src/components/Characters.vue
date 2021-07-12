<template>
    <div>
        <h1>Characters</h1>
        <div v-for="character in characters" v-bind:key="character.id">
            <h2>{{character.name}}</h2>
            <ul>
                <li>Height: {{character.height}}</li>
                <li>Mass: {{character.mass}}</li>
                <li>Hair Color: {{character.hair_color}}</li>
                <li>Skin Color: {{character.skin_color}}</li>
                <li>Eye Color: {{character.eye_color}}</li>
                <li>Birth Year: {{character.birth_year}}</li>
                <li>Gender: {{character.gender}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Characters",
        data: function () {
            return {
                characters: []
            }
        },
        mounted() {
            let vn = this;
            let id = this.$route.params.id;
            this.axios.get('https://swapi.dev/api/films/' + id)
                .then((response) => {
                    let urls = response.data.characters;
                    urls.forEach((url) => {
                        this.axios.get(url)
                            .then((charResponse) => {
                                let character = charResponse.data
                                let parts = character.url.split('/');
                                let lastSegment = parts.pop() || parts.pop();
                                character.id = lastSegment;
                                vn.characters.push(character);
                                vn.characters.sort((a, b) => (a.id > b.id) ? 1 : -1);
                            })
                    })
                });
        }
    }
</script>

<style scoped>

</style>