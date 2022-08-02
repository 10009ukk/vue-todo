<template lang="">
  <input
        class="input-item"
        :type="type"
        :placeholder="placeholder"
        :value="value"

        @input="onInput"
  />
</template>
<script>
export default {
  name: "todo-input-item",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInput: function ($event) {
      this.$emit("change", $event.target.value);
    },
  },
};
</script>
<style lang="scss">
  .input-item {
    font-size: 14px;
    padding: 5px;
    width: 300px;
    border: none;

    &:focus {
      outline: none;
      border: none;
    }
  }
</style>
