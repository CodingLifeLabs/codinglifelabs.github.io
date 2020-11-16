<template>
  <div class="posts">
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
        <p class="tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">
            <nuxt-link :to="`/tags/${tag}`">{{ tag }}</nuxt-link>
          &nbsp;
          </span>
        </p>
        <nuxt-link :to="post.path">
          <p class="text-green-400 font-bold text-md">
            Read more
          </p>
        </nuxt-link>
      </div>
    </div>
    <section id="prev-next" class="text-center mt-8">
      <nuxt-link :to="prevLink" class="border p-2 rounded shadow mr-2">
        Prev page
      </nuxt-link>
      <nuxt-link v-if="nextPage" :to="`/page/${pageNo + 1}`" class="border p-2 rounded shadow">
        Next page
      </nuxt-link>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const pageNo = parseInt(params.number)

    const tags = await $content('tags')
      .where({ slug: { $contains: params.slug } })
      .limit(1)
      .fetch()
    const tag = tags.length > 0 ? tags[0] : {}

    const tenPosts = await $content('posts')
      .where({ tags: { $contains: tag.name } })
      .only(['createdAt', 'description', 'path', 'title'])
      .sortBy('createdAt', 'desc')
      .limit(10)
      .skip(9 * (pageNo - 1))
      .fetch()

    if (!tenPosts.length) {
      return error({ statusCode: 404, message: 'No posts found!' })
    }

    const nextPage = tenPosts.length === 10
    const posts = nextPage ? tenPosts.slice(0, -1) : tenPosts
    return { nextPage, posts, pageNo, tag }
  },
  computed: {
    prevLink () {
      return this.pageNo === 2 ? '/' : `/tag/${this.tag.name}/page/${this.pageNo - 1}`
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

<style>

</style>
