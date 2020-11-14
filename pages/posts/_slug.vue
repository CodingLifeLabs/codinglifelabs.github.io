<template>
  <div class="p-4 grid md:grid-cols-4 mx-auto gap-4">
    <aside ref="toc" class="col-span-1 lg:flex lg:flex-col hidden md:block">
      <div class="sticky top-0 mt-16">
        <p class="uppercase text-gray-800 text-xs font-black tracking-wider">
          contents
        </p>
        <nav class="mt-4">
          <ul>
            <li
              v-for="link of post.toc"
              :key="link.id"
              :class="{
                'pl-4': link.depth === 3
              }"
              class="toc-list"
              @click="tableOfContentsHeadingClick(link)"
            >
              <nuxt-link
                :class="{
                  'text-black-500 hover:text-black-600':
                    link.id === currentlyActiveToc,
                  'text-gray-500 hover:text-gray-700': link.id !== currentlyActiveToc
                }"
                role="button"
                class="transition-colors duration-75 text-xs font-bold mb-2 block"
                :to="`#${link.id}`"
              >
                {{ link.text }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
    <div class="md:col-span-3">
      <h1 class="text-5xl font-bold">
        {{ post.title }}
      </h1>
      <div class="mt-3 mb-16 uppercase text-sm text-gray-500">
        <p class="mr-3">
          {{ formatDate(post.updatedAt) }}
        </p>
      </div>
      <article>
        <nuxt-content ref="nuxtContent" :document="post" />
      </article>
      <!-- prevNext component -->
      <PrevNext :prev="prev" :next="next" class="mt-8" />
    </div>
  </div>
</template>
<script>
import Prism from '~/plugins/prism'

export default {
  async asyncData ({ params, error, $content }) {
    try {
      const post = await $content('posts', params.slug).fetch()
      const [next, prev] = await $content('posts')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return { post, prev, next }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found'
      })
    }
  },
  data () {
    return {
      currentlyActiveToc: '',
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0
      }
    }
  },
  mounted () {
    Prism.highlightAll()
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id
        }
      })
    }, this.observerOptions)

    // Track all sections that have an `id` applied
    document
      .querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]')
      .forEach((section) => {
        this.observer.observe(section)
      })
  },
  beforeDestroy () {
    this.observer.disconnect()
  },
  methods: {
    tableOfContentsHeadingClick (link) {
      this.currentlyActiveToc = link.id
    },

    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style>
.nuxt-content p {
  font-size: 20px;
  margin-bottom: 20px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 38px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 32px;
}
</style>
