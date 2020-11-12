<template>
  <div class="posts px-8">
    <h1>Posts</h1>
    <div class="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="post in posts" :key="post.dir">
        <nuxt-link :to="post.dir">
          <h3 class="heading font-bold text-2xl">
            {{ post.title }}
          </h3>
        </nuxt-link>

        <p>
          {{ post.description }}
        </p>
        <p class="tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">
            <nuxt-link :to="`/tags/${tag}`">{{ tag }}</nuxt-link>
          &nbsp;
          </span>
        </p>
        <nuxt-link :to="post.dir">
          <p class="text-green-400 font-bold">
            Read more
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ params, error, $content }) {
    try {
      const posts = await $content('posts', { deep: true }).fetch()
      return { posts }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found'
      })
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
