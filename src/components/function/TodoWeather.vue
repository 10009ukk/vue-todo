<template lang="">
    <h5>{{ city }} : {{ weather }}</h5>
</template>
<script>
const API_KEY = "e676665aa6d66d723ca429279cfda04e";

export default {
    name: 'todo-weather',
    data() {
        return {
            city: '',
            weather: ''
        }
    },
    created() {
        navigator.geolocation.getCurrentPosition(this.onGeoOk, this.onGeoError);
    },
    methods: {
        onGeoOk(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
            fetch(url)
              .then((response) => response.json())
              .then((data) => {
                this.city = data.name;
                this.weather = `${data.weather[0].main} / ${data.main.temp}`;
              })
              .catch(console.log)
              
        },
        onGeoError() {
            alert("Can't find you. No weather for you.");
        }
    },
}
</script>
<style lang="">
    
</style>
