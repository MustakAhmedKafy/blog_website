<script setup>
import { onMounted } from "vue";
import { data, fn } from "../../data.js";
import BlogCard from "../parts/BlogCard.vue";
import Banner from "../parts/Banner.vue";

const getPosts = async () => {
  const res = await fn.fetchPublicApi("/posts", "get");
  data.posts = res.posts;
};

onMounted(async () => {
  await getPosts();
  console.log(data.posts);
});
</script>

<template>
  <Banner backgroundImage="https://source.unsplash.com/random/2020x500" />
  <section class="blog-page bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mt-3" v-for="post in data.posts" :key="post.id">
          <BlogCard :post="post" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
