<template>
    <div class="library-app">
        
        <div class="bookshelf">
            <book-table 
                v-bind:books="books"
                @delete="removeBook"
            ></book-table>
        </div>

        <button @click="toggleNewBookModal">
        
            Add Book
        </button>
    </div>
</template>

<script src='./script.js'>
</script>

<style scoped src="./style.css">
</style>
