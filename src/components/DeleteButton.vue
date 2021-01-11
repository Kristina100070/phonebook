<template>
    <div>
      <button v-on:click="remove">Delete</button>
    </div>
</template>

<script>
    export default {
       methods: {
        remove() {
            this.$emit("remove-item");
        }
       }  
    }
</script>