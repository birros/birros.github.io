<template>
  <Layout>
    <div slot="page-top" class="content list-top" :key="$page.key">
      <div class="posts" v-if="posts.length">
        <div class="post" v-for="(post, index) in posts" :key="post.key">
          <router-link :to="post.path">
            <h2>{{post.frontmatter.title}}</h2>
          </router-link>
          <p class="infos-container">
            <Infos :date="post.frontmatter.date" :author="post.frontmatter.author" />
          </p>
          <p v-html="post.excerpt"></p>
          <p>
            <router-link :to="post.path">
              <em v-if="locale === 'fr-FR'">Lire la suite</em>
              <em v-else>Read more</em>
            </router-link>
          </p>
          <hr v-if="index !== posts.length - 1" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from './Layout.vue';
import Infos from '../components/Infos.vue';
import { parseLocales, getLocale } from '../scripts/locale';

export default {
  components: {
    Layout,
    Infos,
  },
  computed: {
    locale() {
      const locales = parseLocales(this.$site.locales)
      return getLocale(this.$page.path, locales)
    },
    posts() {
      let currentPage = this.$page.frontmatter.list
        ? this.$localePath+this.$page.frontmatter.list
        : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          return x.path.match(new RegExp(`^(${currentPage})(?=.*html)`));
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
    },
  },
}
</script>

<style lang="stylus">
.list-top {
  h2 {
    margin-bottom: 0;
    border: none;
  }

  .infos-container {
    margin-top: 0 !important;
  }
}
</style>

