import BookTable from './BookTable/BookTable.vue'

export default {
    name: 'Library',

    components: {
        'book-table': BookTable,
    },

    created: function() {
        const savedLibrary = JSON.parse(localStorage.getItem('savedLibrary'))

        if(savedLibrary) {
            this.books = savedLibrary
        } else {
            localStorage.setItem('savedLibrary', JSON.stringify(this.books))
        }
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
    },

    methods: {
        toggleNewBookModal() {

        },

        updateLibrary(book) {
            this.books.push(book)
            localStorage.setItem('savedLibrary', JSON.stringify(this.books))
        },

        removeBook(book) {
            this.books.splice(this.books.indexOf(book), 1)
            localStorage.setItem('savedLibrary', JSON.stringify(this.books))

        }
    }
}