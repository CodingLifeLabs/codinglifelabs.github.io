<template>
  <div class="p-4 grid md:grid-cols-5 gap-8">
    <aside ref="toc" class="col-span-1 lg:flex lg:flex-col hidden md:block">
      <div class="sticky top-0">
        <h2
          class="uppercase text-black font-h2 text-xs lg:mt-16 tracking-wider"
        >
          Table of contents
        </h2>
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
                  'text-red-500 hover:text-red-600':
                    link.id === currentlyActiveToc,
                  'text-black hover:gray-900': link.id !== currentlyActiveToc
                }"
                role="button"
                class="transition-colors duration-75 text-xs mb-2 block"
                :to="`#${link.id}`"
              >
                {{ link.text }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
    <div class="prose lg:prose-lg md:col-span-4">
      <nuxt-content ref="nuxtContent" :document="post" />
    </div>
  </div>
</template>
<script>
import Prism from '~/plugins/prism'
export default {
  async asyncData ({ params, error, $content }) {
    try {
      const postPath = `/posts/${params.slug}`
      const [post] = await $content('posts', { deep: true })
        .where({ dir: postPath })
        .fetch()
      return { post }
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
    }
  },
  head () {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://codinglifelabs.github.io/' + this.post.dir
        }
      ]
    }
  }
}
</script>
