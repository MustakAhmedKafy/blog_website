<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  post: Object,
});



// dynamic img

const randomImageUrl = computed(() => {
  try {
    // Generate a random image URL
    const randomId = Math.floor(Math.random() * 1000); // Adjust as needed
    return `https://picsum.photos/id/${randomId}/200/300`; // Adjust width and height as needed
  } catch (error) {
    console.error('Error generating random image URL:', error);
    // Return a fallback image URL or handle the error in another way
    return 'fallback-image-url.jpg';
  }
});
</script>

<template>
  <div>
    <!-- Check if post exists before accessing its properties -->
    <router-link class="text-decoration-none" :to="`/blog/${post.id}`">
      <div class="card bg-white">
        <img
          :src="randomImageUrl"
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

.card img{
  height: 200px;
  object-fit: cover;
}

</style>
