export default async () => {
  let routes = [];
  const { $content } = require('@nuxt/content')
  if (posts === null || posts.length === 0)
    posts = await $content('posts').fetch();
  for (const post of posts) {
    routes.push(`posts/${post.slug}`);
  }
  return routes;
  };