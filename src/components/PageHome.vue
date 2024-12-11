<template>
    <div>
        hello
    </div>
    <div v-for="thread in data.threads" :key="thread.id">
        <h2>
            {{ thread.title }}
        </h2>
        <div v-for="postId in thread.posts" :key="postId">
            <p>{{ userById(postById(postId)?.userId || '')?.name }}</p>
            <p>{{ postById(postId)?.text }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
    import sourceData from '@/data.json'
    import { ref } from 'vue'

    const data = ref(sourceData)
    
    function postById(postId: string) {
        return data.value.posts.find(p => p.id === postId);
    }

    function userById(userID: string) {
        return data.value.users.find(u => u.id === userID);
    }

</script>
<style></style>