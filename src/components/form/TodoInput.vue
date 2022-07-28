<template lang="">
    <form @submit.prevent="onSubmit">
        <todo-input-item :value='text' @change="onChange"></todo-input-item>
    </form>
</template>

<script>
import TodoInputItem from '@/components/form/TodoInputItem.vue'

export default {
    name: 'todo-submit',
    components: {
        TodoInputItem,
    },
    props: {
        type: {
            type: String,
            default: 'todosPush'
        }
    },
    data() {
        return {
            text: '',
        }
    },
    methods: {
        onChange(emit) {
            if (typeof emit !== 'string')
                return

            this.text = emit
        },
        onSubmit() {
            if (!this.text) {
                return
            }
            
            // type = 'todosPush'
            console.log(this.type)
            this.$store.commit(this.type, {
                title: this.text,
                isChecked: false,  
                key: new Date(),
            })

            this.text = ''
        }
    },

}
</script>
<style lang="">
    
</style>