export default {
    name: 'Tabs',

    data() {
        return {
            tabs: []
        }
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name)
            })
        }
    },

    mounted() {
       this.tabs = this.$children
    }
}