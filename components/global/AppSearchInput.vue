<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Posts"
      class="block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white"
    >
    <ul
      v-if="posts.length"
      class="z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"
    >
      <li v-for="post of posts" :key="post.slug" @click="clear">
        <NuxtLink
          :to="{ name: 'posts-slug', params: { slug: post.slug } }"
          class="flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black"
        >
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: '',
      posts: []
    }
  },
  watch: {
    async searchQuery (searchQuery) {
      if (!searchQuery) {
        this.posts = []
        return
      }
      this.posts = await this.$content('posts')
        .limit(6)
        .search(searchQuery)
        .fetch()
    }
  },
  methods: {
    clear () {
      console.log('click...')
      this.searchQuery = ''
    }
  }
}
</script>
