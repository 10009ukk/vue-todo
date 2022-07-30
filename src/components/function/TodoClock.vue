<template lang="">
    <h3>{{ hour.length === 1 ? `0${hour}` : hour }} : {{ minutes.length === 1 ? `0${minutes}` : minutes }}</h3>
</template>
<script>
export default {
    name: 'todo-clock',
    data() {
        return {
            hour: '',
            minutes : ''
        }
    },
    created() {
        this.getTime()
    },
    methods: {
        getTime() {
            const date = new Date();
            this.hour = String(date.getHours())
            this.minutes = String(date.getMinutes())

            setInterval(this.getTime, 1000);
        }
    },
}
</script>
<style lang="">
    
</style>

