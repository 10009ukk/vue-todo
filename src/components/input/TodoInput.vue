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
import { dateFns } from '@/date-fns'
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
        add: {
            type: String,
            default: 'addTodos'
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
                alert('텍스트를 입력하세요...')
                return
            }
            
            this.$store.commit(this.add, {
                title: this.text,
                isChecked: false,  
                key: dateFns(),
            })

            this.text = ''
        }
    },

}
</script>
<style lang="">
    
</style>