<template>
    <div class="library-app">
        <h1>Bookshelf</h1>
        
        <div class="bookshelf">
            <book-table v-bind:books="books">
            </book-table>
        </div>

        <button>
            Add Book
        </button>
    </div>
</template>

<script src='./script.js'>
</script>

<style scoped src="./style.css">
</style>
