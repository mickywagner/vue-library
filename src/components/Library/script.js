import BookTable from './BookTable/BookTable.vue'

export default {
    name: 'Library',

    components: {
        'book-table': BookTable,
    },

    data() {
        return {
            books: [

            ]
        }
    }
}