<script>
export default {
    data() {
        return {
            name: "John Doe",
            status: false,
        };
    },
};
</script>

<template>
    <h1>{{ name }}</h1>
    <p v-if="status">User is active</p>
</template>

<style scoped>
h1 {
    color: red;
}
</style>
