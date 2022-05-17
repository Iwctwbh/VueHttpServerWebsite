<template>
    <div class="divLogin">
        <h1>Login</h1>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'vueLogin',
        props: {
            msg: String,
        },
    });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
