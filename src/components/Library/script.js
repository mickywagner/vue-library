import BookTable from './BookTable/BookTable.vue'

export default {
    name: 'Library',

    components: {
        'book-table': BookTable,
    },

    data() {
        return {
            books: [
                {title: 'Fellowship of the Ring', author: 'J.R.R. Tolkien', pages: "435", completed: true, id: 0},
                {title: 'The Two Towers', author: 'J.R.R. Tolkien', pages: "500", completed: true, id: 1 },
                {title: 'Return of the King', author: 'J.R.R. Tolkien', pages: "367", completed: true, id: 2},
                {title: 'The Silmarillion', author: 'J.R.R. Tolkien', pages: "435", completed: false, id: 3 },
                {title: 'The History of Middle Earth', author: 'Christopher Tolkien', pages: "435", completed: false, id: 4}
            ]
        }
    }
}