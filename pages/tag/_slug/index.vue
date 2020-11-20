<template>
  <div class="posts p-4">
    <NuxtLink to="/">
      <p class="hover:underline">
        Back to All Posts
      </p>
    </NuxtLink>
    <h3 class="mb-4 font-extrabold text-4xl">
      Tag: {{ tag.name }}
    </h3>

    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
      <div v-for="post in posts" :key="post.path">
        <p class="text-gray-500 text-md font-hairline">
          {{ formatDate(post.createdAt) }}
        </p>
        <nuxt-link :to="post.path">
          <h3 class="heading font-bold text-2xl">
            {{ post.title }}
          </h3>
        </nuxt-link>

        <p class="mt-4 text-lg text-gray-600">
          {{ post.description }}
        </p>
        <nuxt-link :to="post.path">
          <p class="text-green-400 font-bold text-md">
            Read more
          </p>
        </nuxt-link>
      </div>
    </div>
    <section v-if="nextPage" id="next" class="text-center mt-8">
      <nuxt-link :to="`/tag/${tag.name}/page/2`" class="border p-2 rounded shadow">
        Next page
      </nuxt-link>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData ({ route, params, error, $content }) {
    try {
      // console.log(route)
      const tags = await $content('tags')
        .where({ slug: { $contains: params.slug } })
        .limit(1)
        .fetch()
      const tag = tags.length > 0 ? tags[0] : {}

      const tenPosts = await $content('posts')
        .where({ tags: { $contains: tag.name } })
        .only(['author', 'createdAt', 'description', 'path', 'title'])
        .sortBy('createdAt', 'desc')
        .limit(10)
        .fetch()

      const nextPage = tenPosts.length === 10
      const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts

      return {
        nextPage,
        posts,
        tag
      }
    } catch (err) {
      // console.log(err)
      error({
        statusCode: 404,
        message: 'Page could not be found'
      })
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }

}
</script>
