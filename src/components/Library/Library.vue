<template>
    <div class="library-app">
        
        <div class="bookshelf">
            <book-table 
                v-bind:books="books"
                @delete="removeBook"
                @update="updateLocalStorage(books)"
            ></book-table>
        </div>

        <new-book-modal
            v-show="NewBookModal"
            @close="toggleNewBookModal"
            @update-library="updateLibrary"
        >
        </new-book-modal>

        <button @click="toggleNewBookModal">
            + New Book
        </button>
    </div>
</template>

<script src='./script.js'>
</script>

<style scoped src="./style.css">
</style>
