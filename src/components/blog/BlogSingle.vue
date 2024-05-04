<script setup>
import { useRoute } from "vue-router";
import { fn } from "../../data.js";
import { ref } from "vue";

const route = useRoute();
const postDetails = ref({});

const getPostDetails = () => {
  const res = fn.fetchPublicApi(`/posts/${route.params.id}`, "get");
  res.then((response) => {
    postDetails.value = response;
  });
};

getPostDetails();

// watch(route, () => {
//   getPostDetails();
// });
</script>
<template>
  <!-- <h2>Related Posts</h2>
  <router-link class="block text-xl mt-4 lg:inline-block lg:mt-0 text-black mr-10" to="/blog/1">Blog 1</router-link>
  <router-link class="block text-xl mt-4 lg:inline-block lg:mt-0 text-black" to="/blog/2">Blog 2</router-link> -->
  <div class="container mt-5">
    <div class="card p-4">
      <div class="">
        <div class="card-title">
          {{ postDetails.title }}
        </div>
        <p class="card-body">{{ postDetails.body }}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          v-for="tag in postDetails.tags"
          :key="tag"
          class="badge text-bg-warning me-2"
          >#{{ tag }}</span
        >
      </div>
      <img
        class="w-100"
        src="https://source.unsplash.com/random/1000x300"
        alt="Sunset in the mountains"
      />
    </div>
  </div>
</template>

<style scoped>
img{
  object-fit: cover;
}
</style>
