<template>
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }" :key="tab.name">
                    <a href="#" @click="selectTab(tab)">
                        {{ tab.name }}
                    </a>
                </li>
            </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
    
</template>

<script src="./script.js">
</script>

<style>

.tabs-details {
    padding: 1rem;
}

.tabs {
    margin-bottom: 0;
}


</style>