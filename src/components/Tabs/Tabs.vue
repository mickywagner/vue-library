<template>
    <div>
        <div class="tabs light">
            <ul>
                <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }" :key="tab.name">
                    <a :href="tab.href" @click="selectTab(tab)">
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
    background: var(--main-color)
}



.tabs.light a {
    color: black;
}

.tabs.light li.is-active a {
    color: white;
    border-bottom: 2px solid white;
}


</style>