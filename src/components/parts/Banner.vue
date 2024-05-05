<script setup>
  import { onBeforeMount, onBeforeUnmount } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const pageTitle = route.meta.title || 'Default Title';

  const updatePageTitle = () => {
    document.title = pageTitle;
  };

  onBeforeMount(updatePageTitle);
  onBeforeUnmount(() => {
    document.title = 'Default Title';
  });
</script>

<template>
  <section class="construction py-5 d-flex align-items-center justify-content-center" :style="{ backgroundImage: `url('${backgroundImage}')` }">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 class="display-4 text-white fw-bold mb-3">This is {{ pageTitle }} page</h1>
          <p class="col-lg-12 fs-4 text-white">
            Stream Global, a pioneer in Bangladesh's real estate and construction sector, sets standards and breaks records with 49+ years of expertise.
          </p>
          <button class="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.construction {
  height: 70vh;
  position: relative;
  width: 100%;
  z-index: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.construction::after {
  background: rgba(0, 0, 0, 0.5);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}
</style>