<template>
    <div class="modal is-active">
        <div class="modal-background" id="background"></div>
        <div class="modal-content new-book">
            <h1>New Book</h1>

            <form @submit.prevent="onSubmit">
                <input type="text" v-model="title" placeholder="Enter book title" required>
                <input type="text" v-model="author" placeholder="Enter author" required>
                <input type="number" v-model="pages" min="1" placeholder="# Pages">
                <label>
                    <input type="checkbox" v-model="completed">
                    I read this
                </label>
                <button type="submit">Add Book</button>
            </form>
            <p @click="$emit('close')">Cancel</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewBookModal',

    data() {
        return {
            newBook: '',
            title: '',
            author: '',
            pages: '',
            completed: false,
        }
    }, 

    methods: {
        onSubmit() {
            this.newBook = {
                title: this.title,
                author: this.author,
                pages: this.pages,
                completed: this.completed,
                id: new Date().getTime() / 1000
            }

            this.$emit('update-library', this.newBook)

            this.title = ''
            this.author = ''
            this.pages = ''
            this.completed = false
            this.$emit('close')
        }
    }
}
</script>

<style scoped src="./style.css">
</style>