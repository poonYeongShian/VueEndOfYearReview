<template>
    <div v-for="thread in data.threads" :key="thread.id" class="col-large push-top">
        <h1>{{ thread.title }}</h1>

        <div class="post-list">
            <!-- <div v-for="postId in thread.posts" :key="postId">
                <p>{{ userById(postById(postId)?.userId || '')?.name }}</p>
                <p>{{ postById(postId)?.text }}</p>
            </div> -->
            <div class="post" v-for="postId in thread.posts" :key="postId">
                <div class="user-info">
                    <a href="#" class="user-name">{{ userById(postById(postId)?.userId || '')?.name }}</a>
                    <a href="#">
                        <img class="avatar-large" :src="userById(postById(postId)?.userId || '')?.avatar" alt="" >
                    </a>

                    <p class="desktop-only text-small">107 posts</p>
                </div>

                <div class="post-content">
                    <div>
                        <p>
                            {{ postById(postId)?.text }}
                        </p>
                    </div>
                </div>

                <div class="post-date text-faded">
                    {{ postById(postId)?.publishedAt }}
                </div>
            </div>
        </div>
    </div>
    <!-- <div v-for="thread in data.threads" :key="thread.id">
        <h2>
            {{ thread.title }}
        </h2>

    </div> -->
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
<style>

</style>