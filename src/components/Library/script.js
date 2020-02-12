import BookTable from './BookTable/BookTable'
import NewBookModal from './NewBookModal/NewBookModal'

export default {
    name: 'Library',

    components: {
        'book-table': BookTable,
        'new-book-modal': NewBookModal
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
            NewBookModal: false,

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
            this.NewBookModal = !this.NewBookModal
        },

        updateLibrary(book) {
            this.books.push(book)
            this.updateLocalStorage(this.books)
        },

        removeBook(book) {
            this.books.splice(this.books.indexOf(book), 1)
            this.updateLocalStorage(this.books)
        },

        updateLocalStorage(obj) {
            localStorage.setItem('savedLibrary', JSON.stringify(obj))
        }
    }
}