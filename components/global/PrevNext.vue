<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="`/posts/${ prev.slug }`"
      class="text-primary font-bold"
    >
      <span class="block text-gray-500 font-thin">Previous post</span>
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="`/posts/${ next.slug }`"
      class="font-bold "
    >
      <span class="block text-gray-500 font-thin">Next post</span>

      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
