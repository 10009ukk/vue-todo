<template lang="">
    <index-layout>
        <div>
            <todo-list :items="items" />
        </div>

        <form @submit.prevent="onSubmit">
            <todo-input :value='text' @change="onChange"></todo-input>
            <button>등록</button> 
        </form>
    </index-layout>
</template>

<script>
import IndexLayout from '@/layouts/index.vue'
import TodoInput from '@/components/form/TodoInput.vue'
import TodoList from '@/components/list/TodoList.vue'
export default {
    name: 'todo-view',
    components: {
        IndexLayout,
        TodoInput,
        TodoList
    },
    data() {
        return {
            text: '',
        }
    },
    computed: {
        items() {
            return this.$store.getters.todosGet
        }
    },
    methods: {
        onChange(emit) {
            if (typeof emit !== 'string')
                return

            this.text = emit
        },
        onSubmit() {
            const text = this.text
            if (!text) {
                return
            }
            
            this.$store.commit('todosPush', {
                title: text,
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