<template>
    <div class="library-app">
        
        <div class="bookshelf">
            <book-table 
                v-bind:books="books"
                @delete="removeBook"
                @update="updateLocalStorage(books)"
                @sort="sortTitle"
                @sort-author="sortAuthor"
                @sort-pages="sortPages"
            ></book-table>
        </div>

        <transition enter-active-class="animated slideInLeft faster"
                    leave-active-class="animated zoomOut faster">
        <new-book-modal
            v-show="NewBookModal"
            @close="toggleNewBookModal"
            @update-library="updateLibrary"
        >
        </new-book-modal>
        </transition>

        <button @click="toggleNewBookModal">
            Add Book
        </button>
    </div>
</template>

<script src='./script.js'>
</script>

<style scoped src="./style.css">
</style>
