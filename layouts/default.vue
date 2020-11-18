<template>
  <div class="wrapper">
    <div class="header p-4 flex justify-center items-center">
      <nuxt-link to="/">
        <svg class="w-8 h-8 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> </svg>
      </nuxt-link>
      <nuxt-link to="/" class="font-bold text-md mr-8 hidden md:block">
        CodingLifeLabs
      </nuxt-link>
      <app-search-input />
    </div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: "Arial", sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
p {
  margin-bottom: 10px;
}
.logo {
  font-weight: bold;
  text-align: center;
  display: block;
  color: black;
  font-size: 20px;
  margin: 0 0 2rem 0;
  text-decoration: none;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.wrapper {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
