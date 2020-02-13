import Tabs from './Tabs/Tabs.vue'
import tabItem from './Tab/Tab.vue'
import Library from './Library/Library.vue'
import About from './About/About'

export default {
    name: 'App',
    
    components: {
      'app-tabs': Tabs,
      'tab-item': tabItem,
      'library': Library,
      'about-app': About
    }
  }