<script setup lang="ts">
interface Props {
  title?: string
  reverse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Hello World!',
  reverse: false
})
</script>

<template>
    <div class="block">
        <div :class="['content', props.reverse ? 'reverse-row' : 'row']">
            <div class="text">
                <h1>{{ props.title }}</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ipsa autem sit labore enim.</p>
            </div>
            <div class="img">
                <img class="test" src="../assets/images/marketplace_placeholder.webp" alt="placeholder">
            </div>
        </div>
        <div class="divider"></div>
    </div>
</template>

<style scoped>

.block {
    position: relative;
    min-height: auto;
    padding: 4.5rem 0;

    display: flex;
    justify-content: center;
}

.content {
    max-width: calc(80% - 4rem);
    margin: auto;

    display: flex;
    flex-direction: column;

    text-align: center;
}

.content .text, .content .img {
    flex-basis: 50%;
}
.content h1 {
    font-size: 2rem;
    margin: 0;
}
.content p {
    font-size: 1.1rem;
    margin: 1rem 0 0;
}
.content img {
    width: 100%;
    height: 200px;
}

@media screen and (min-width: 960px) {
    .content {
        flex-direction: row;
        text-align: left;
    }
    .row {
        flex-direction: row;
    }
    .reverse-row {
        flex-direction: row-reverse
    }
    .reverse-row .text {
        padding-left: 1rem;
    }
    .content h1 {
        font-size: 3rem;
    }
    .content p {
        font-size: 1.5rem;
    }
}

/* .block .img-div {
    --image-height: 200px;

    position: relative;
    top: 50%;
    left: 20%;
    transform: translate(0, -50%);

    width: 200px;
    height: var(--image-height);
}
.block .img-div img {
    width: 100%;
    height: 100%;
}
.block .img-div div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}


.block .text {
    position: relative;
    left: calc(20% + var(--image-height) + 100px);

    width: 50%;
    height: 50%;
    background-color: white;
} */


.block .divider {
    position: absolute;
    width: 30%;
    height: 0.3em;
    left: 50%;
    transform: translate(-50%);

    background-color: rgba(var(--text-color-base), 1);

    border-radius: 100%;

    bottom: 0;
}
</style>