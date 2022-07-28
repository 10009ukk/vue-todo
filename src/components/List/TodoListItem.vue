<template lang="">
    <div>
        {{ item }}
        <todo-check  
            @toggle='onToggle' 
            :checked="item.isChecked"
        />
        <todo-input 
            class="input"
            :class='{ complete: item.isChecked }' 
            :value="item.title"
            
            @change='onChange' 
            @keyup.enter="onReset"
        />
        <todo-button 
            viewBox='0 0 576 512'
            d='M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1'
            @touch="onDelete"
        />

    </div>    
</template>
<script>
import TodoCheck from '../form/TodoCheck.vue'
import TodoInput from '../form/TodoInput.vue'
import TodoButton from '../form/TodoButton.vue'

export default {
    
    name: 'todo-list-item',
    components: {        
        TodoInput,
        TodoButton,
        TodoCheck,
    },
    data() {
        return {
            text: ''
        }
    },
    props: {
        item: {
            type: Object
        }
    }, 
    methods: {
        onChange(emit) {
            if (typeof emit !== 'string')
                return

            this.text = emit
        },

        onDelete() {
            this.$store.commit('todosPop', this.item.key)
        },
        onReset() {
            this.$store.commit('todosChange', {
                title: this.text,
                key: this.item.key      
            })
        },
        onToggle(emit) {
            this.item.isChecked = emit
            
            this.$store.commit('todosChange', {
                isChecked: emit,
                key: this.item.key      
            })
        },

    },    
}
</script>
<style lang="scss">

    .complete {
        text-decoration: line-through;
    }

</style>