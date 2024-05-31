<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Block from '../components/Block.vue';

import { setWorld } from '../assets/scripts/cube_world/main'

// const world = ref();

// onMounted(() => {
//     setWorld(world.value)
// });

</script>

<template>
    <div id="presentation">
        <div id="background">
            <img aria-hidden="true" src="../assets/images/presentation_background.webp">
            <div></div>
        </div>

        <div id="world" ref="world"></div>

        <div id="text">
            <h1>
                <span class="text-functions-color">Print</span>
                <span class="text-brackets-color">(</span>
                <span class="text-string-color">"Hello World!"</span>
                <span class="text-brackets-color">)</span>
            </h1>
            <h1>
                <span class="text-functions-color">Name </span>
                <span class="text-symbol-color">= </span>
                <span class="text-string-color">“Lucas J. Felippo”</span>
            </h1>
            <h1>
                <span clas="text-color">Junior Full-Stack Engineer</span>
            </h1>
            <p>
                /* Bringing together the blocks that made your businnes soar since 2020. From Web Development to Artificial Intelligence, it’s the adventure to discover new thing to bring solutions to everyday problems that drives me.
                */
            </p>
        </div>
    </div>
    <Block title="Test"/>
    <Block title="Test2" :reverse="true"/>
    <Block />
    <Block />
</template>

<style scoped>
#presentation {
    position: relative;

    width: 100%;
    height: 95vh;
}
#presentation #background {
    position: absolute;
    width: 100%;
    height: 99%;
}
#presentation #background img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    /* filter: blur(4px) */
}
#presentation #background div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgb(var(--presentation-bg-color));
    /* background-image:linear-gradient(to top, rgba(var(--background-color), 1) 0%, rgba(var(--background-color), 0) 50%, rgba(var(--background-color), 1) 100%); */
}
#presentation #text {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(0, -50%);

    width: 50%;
}
#presentation #text h1 {
    font-size: 2.8rem;
    
    margin: 0;
}
#presentation #text p {
    font-size: 1.5rem;

    margin: 0;
}

#world {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>
