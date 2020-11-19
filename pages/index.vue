<template>
  <div class="posts p-4">
    <div class="header">
      <p class="font-extrabold text-4xl md:text-6xl">
        <span>코딩라이프연구소</span>
      </p>
      <p class="mb-16">
        A technology blog covering everything.
      </p>
      <p class="mb-16">
        당신의 코딩생활을 응원합니다.
      </p>
    </div>

    <h1>All Posts</h1>

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
      <nuxt-link to="/page/2" class="border p-2 rounded shadow">
        Next page
      </nuxt-link>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData ({ params, error, $content }) {
    try {
      const tenPosts = await $content('posts')
        .only(['createdAt', 'description', 'path', 'title'])
        .sortBy('createdAt', 'desc')
        .limit(10)
        .fetch()

      const nextPage = tenPosts.length === 10
      const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts
      return { nextPage, posts }
    } catch (err) {
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
  },
  head () {
    return {
      title: 'Nuxt blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Cool nuxt blog'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://nuxt-blog.com/'
        }
      ]
    }
  }
}
</script>
