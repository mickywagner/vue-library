<template>
    <table>
        <thead>
            <tr>
                <td>Title</td>
                <td>Author</td>
                <td>Pages</td>
                <td>Status</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="book in books" :key="book.id">
                <td>{{ book.title }}</td>
                <td>{{ book.author }}</td>
                <td>{{ book.pages }}</td>
                <td>
                    <input 
                        type="checkbox"
                        v-model="book.completed"/>
                </td>
                <td>
                        Delete
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
    }
}
</script>

<style scoped>

table {
    margin-top: 20px;
    width: 80%;
    margin: 0 auto;
    margin-top: 1rem;
    
}

thead {
    font-weight: 600;
    background: rgba(100, 148, 237, 0.514);
}

thead td {
    text-align: center;
}

tr {
    border-bottom: 1px solid black;
}

td {
    padding: 1rem;
}

</style>