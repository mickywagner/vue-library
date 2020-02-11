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
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'BookTable',

    props: [],

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
}

tr {
    border-bottom: 1px solid black;
}

td {
    padding: 1rem 0;
}
</style>