<template lang="">
    <div class="layout">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'index-layout'
}
</script>
<style lang="scss">
    .layout {
        margin: 125px 0;
    }
</style>