<template>
    <div class="center">
        <h1>{{count}}</h1>
        <button @click="increment" id="increment">increment</button>
        <button @click="decrement" id="decrement">decrement</button>
    </div>
</template>

<script>

    export default {
        name: 'counter',
        data(){
            return {
                count: 0
            }
        },
        methods: {
            increment(){
                this.count++
            },
            decrement(){
                this.count--
            }
        }
    }

</script>