<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <router-link class="nav-link active" to="/">Home</router-link> -->
            <router-link class="nav-link active" :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <!-- <router-link class="nav-link" to="/about">About</router-link> -->
            <router-link class="nav-link" :to="{ name: 'about' }"
              >About</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'BlogHome' }"
              >Blog</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'contact' }"
              >Contact</router-link
            >
          </li>
        </ul>
        <button class="btn btn-warning text-white">Download</button>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
