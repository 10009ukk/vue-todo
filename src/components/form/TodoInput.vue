<template lang="">
    <input
          :type="type"
          :placeholder="placeholder"
          :value="value"

          @input="onInput"
    />
</template>
<script>
export default {
  name: "todo-input",
  props: {
    type: {
      type: String,
      default: "",
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
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    onInput: function ($event) {
      this.$emit("change", $event.target.value);
    },
  },
};
</script>
<style lang=""></style>
