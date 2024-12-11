<template>
    <div>
        hello
    </div>
    <div v-for="thread in data.threads" :key="thread.id">
        <h2>
            {{ thread.title }}
        </h2>
        <div v-for="postId in thread.posts" :key="postId">
            <p>{{ data.users.find(u => u.id === data.posts.find(p => p.id === postId).userId)?.name }}</p>
            <p>{{ data.posts.find(p => p.id === postId)?.text }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
    import sourceData from '@/data.json'
    import { ref } from 'vue'

    const data = ref(sourceData)

</script>
<style></style>