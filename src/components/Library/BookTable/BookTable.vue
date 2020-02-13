<template>
    <table>
        <thead>
            <tr>
                <td @click="$emit('sort')">Title</td>
                <td @click="$emit('sort-author')">Author</td>
                <td @click="$emit('sort-pages')">Pages</td>
                <td>Status</td>
                <td></td>
            </tr>
        </thead>
        <tbody is="transition-group" 
               enter-active-class="animated bounceInUp delay-4s"
               leave-active-class="animated bounceOut">
            <tr v-for="book in books" :key="book.id">
                <td>{{ book.title }}</td>
                <td>{{ book.author }}</td>
                <td>{{ book.pages }}</td>
                <td>
                    <input 
                        type="checkbox"
                        v-model="book.completed"
                        @change="$emit('update')"/>
                    <span v-if="book.completed"> Read</span>
                    <span v-else> Not Read</span>
                </td>
                <td @click="removeBook(book)">
                    <font-awesome-icon icon="trash"></font-awesome-icon>
                </td>   
            </tr>
        </tbody>
    </table>
</template>

<script>


export default {
    name: 'BookTable',

    props: ['books'],

    data() {
        return {

        }
    },

    methods: {
        removeBook(book) {
            this.$emit('delete', book)
        },

    }
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

table {
    margin-top: 20px;
    margin: 0 auto;
    margin-top: 1rem;
    width: 80%;
}

thead {
    font-weight: 600;
    background: var(--main-color);
    color: var(--light-text);
}

thead td {
    text-align: center;
    cursor: pointer;
}


tbody {
    position: relative;
    width: 100%;
}

tr {
    border-bottom: 1px solid black;

}

td {
    padding: 1rem;
}


  

</style>