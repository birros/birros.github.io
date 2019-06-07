<template>
  <Layout>
    <div slot="page-top" class="content post-top" :key="$page.key">
      <h1>{{ $page.title }}</h1>
      <p>
        <Infos :date="$page.frontmatter.date" :author="$page.frontmatter.author" />
      </p>
    </div>
  </Layout>
</template>

<script>
import Layout from './Layout.vue';
import Infos from '../components/Infos.vue';

export default {
  components: {
    Layout,
    Infos,
  },
}
</script>

<style lang="stylus">
.post-top {
  max-width: 740px;
  margin: 2em auto !important;
  padding: 2rem 2.5rem 0 2.5rem;

  h1 {
    margin-bottom: 0 !important;
    padding-bottom: 0.3rem !important;
  }
  h1 + * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  & + div {
    padding-top: 0 !important;
    & > *:first-child {
      margin-top: 1em !important;
      padding-top: 0 !important;
    }
  }
}
</style>
