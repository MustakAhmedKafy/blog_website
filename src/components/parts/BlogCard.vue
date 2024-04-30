<script setup>
import { defineProps } from "vue";

const props = defineProps({
  post: Object,
});
</script>

<template>
  <div>
    <!-- Check if post exists before accessing its properties -->
    <router-link class="text-decoration-none" :to="`/blog/${post.id}`">
      <div class="card bg-white">
        <img
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
          class="card-img-top"
        />
        <div class="card-body">
          <!-- Use optional chaining operator to safely access properties -->
          <h5 class="card-title text-dark">{{ post.title }}</h5>
          <p class="card-text">
            {{ post.body }}
          </p>
          <div>
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="badge text-bg-light me-2"
              >#{{ tag }}</span
            >
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.card-text {
  color: #000;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  margin-bottom: 10px;
}

.card-title{
      display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    margin-bottom: 10px;
}

</style>
