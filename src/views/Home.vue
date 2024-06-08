<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Block from '../components/Block.vue';

import { BlockWorld } from '../assets/block_world/scripts/blockWorld'

const world = ref();

onMounted(() => {
    const blockWorld = new BlockWorld(world.value);
});

</script>

<template>
    <div id="presentation">
        <div id="background">
            <img aria-hidden="true" src="../assets/images/presentation_background.webp">
            <div></div>
        </div>

        <canvas id="world" ref="world"></canvas>

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
            <p class="text-comment-color">
                /* Bringing together the blocks that made <span class="text-comment-emphasis-color">your</span>
                businnes soar since 2020. From <span class="text-comment-emphasis-color">Web Development</span> to <span class="text-comment-emphasis-color">Artificial Intelligence</span>, it’s the adventure to discover new thing to bring <span class="text-comment-emphasis-color">solutions</span>
                to everyday <span class="text-comment-emphasis-color">problems</span> that drives me. */
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

    background-color: rgb(var(--presentation-bg-color));
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
    top: 45%;
    left: 5%;
    transform: translate(0, -50%);

    width: 50%;
}
#presentation #text h1 {
    font-size: 2.6rem;
    
    margin: 0;
}
#presentation #text p {
    font-size: 1.3rem;

    margin: 0;
}

@media screen and (max-width: 960px) {
    #presentation #text h1 {
        font-size: 2.2rem;
        
        margin: 0;
    }
    #presentation #text p {
        font-size: 1.1rem;

        margin: 0;
    }
}

@media screen and (max-width: 600px) {
    #presentation #text {
        left: 50%;
        transform: translate(-50%, -50%);

        width: 70%;
    
        text-align: center;
    }
    #presentation #text h1 {
        font-size: 1.6rem;
    }
    #presentation #text p {
        font-size: 1rem;
    }
}

/* Canvas of the cubes */
#world {
    position: absolute;
    width: 100%;
    height: 100%;

    overflow: hidden;
}
</style>
