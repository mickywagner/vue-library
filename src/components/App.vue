<template>
  <div id="app">
    
          <app-tabs>

            <tab-item name="My Library" :selected="true">
                <library></library>
            </tab-item>
            
            <tab-item name="About">
                Stuff about this app
            </tab-item>

          </app-tabs>   
     
     
  </div>
</template>

<script src='./script.js'>
</script>

<style src='./style.css'>

</style>
