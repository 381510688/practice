<template>
    <div id="app>
        <p>Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.</p>
        <div>
            <button v-on:click="increment">增加</button>
            <button v-on:click="decrement">减少</button>
            <button @click="incrementIfOdd">奇数增加</button>
            <button @click="incrementAsync">异步加</button>
        </div>
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: mapGetters([
            'evenOrOdd'
        ]),
        method: mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
    }
</script>
