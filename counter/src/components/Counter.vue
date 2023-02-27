<template>
    <div class="counter">
        <h1>{{count}}</h1>
        <div class="methods">
            <button @click="increment" class="increment">
                +
            </button>
            <button @click="decrement" class="decrement">
                -
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CounterComponent',
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

<style scoped>
    .counter{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .increment{
        font-size: 24px;
        color: white;
        width: 50px;
        height: 50px;
        background-color: green;
        border: none;
        margin-right: 5px;
    }

    h1{
        font-size: 40px;
    }

    .decrement{
        font-size: 24px;
        color: white;
        padding: 4px;
        background-color: red;
        border: none;
        width: 50px;
        height: 50px;
    }
</style>