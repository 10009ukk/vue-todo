<template lang="">
    <h3>{{ time }}</h3>
</template>
<script>
import { dateFns } from '@/date-fns.js'

export default {
    name: 'todo-clock',
    data() {
        return {
            time: '',
        }
    },
    created() {
        this.getTime()
    },
    methods: {
        getTime() {
            this.time = dateFns().slice(11, 16)
            setInterval(this.getTime, 1000);
        }
    },
}
</script>
<style lang="">
    
</style>

