<template lang="">
    <form @submit.prevent="onSubmit">
        <todo-input-item 
            :value='text'
            :placeholder="placeholder" 
            
            @change="onChange"
        />
    </form>
</template>

<script>
import TodoInputItem from '@/components/input/TodoInputItem.vue'

export default {
    name: 'todo-submit',
    components: {
        TodoInputItem,
    },
    props: {
        placeholder: {
            type: String,
            default: "",
        },
        push: {
            type: String,
            default: 'todosPush'
        },
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
            
            this.$store.commit(this.push, {
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