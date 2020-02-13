<template>
    <div class="about">
        <h1>About This Project</h1>
        <h2>Built with Vue.JS</h2>
        <p>Frameworks project for <a href="https://www.theodinproject.com/courses/javascript">Odin Project Javascript course</a>. It basically involed re-creating a previous project with either React, Angular of Vue.
            My original project (in Vanilla javascript) can be found <a href="https://mickywagner.github.io/Library/">here.</a> 
        </p>

        <ul class="social">
            <li><a href="https://github.com/mickywagner"><font-awesome-icon :icon="['fab','github']" class="icon"></font-awesome-icon></a></li>
            <li><a href="www.linkedin.com/in/michaela-wagner"><font-awesome-icon :icon="['fab','linkedin']" class="icon"></font-awesome-icon></a></li>
        </ul>
        
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style >
.about {
    width: 100%;
    padding: 0 20px;
}

.about h1 {
    
    font-weight: 600;
    color: var(--main-color);
    font-size: 2em;
}

.about h2 {
    font-weight: 600;
    padding-bottom: 1rem;
}

.about p {
    max-width: 500px;
}

.social {
    padding-top: 1rem;
    display: flex;
}

.icon {
    font-size: 2em;
    
}

</style>