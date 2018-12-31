<template>
  <div v-if="date" class="infos">
    <template v-if="locale === 'fr-FR'">Le</template>
    <template v-else>On</template>
    {{ date | formatDate }}

    <template v-if="authorInfos">
        <template v-if="locale === 'fr-FR'">par</template>
        <template v-else>by</template>
        <span rel="author">
          <a v-if="authorInfos.mail" :href="'mailto:' + authorInfos.mail">
            {{ authorInfos.name }}
          </a>
          <template v-else>{{ authorInfos.name }}</template>
        </span>
    </template>
  </div>
</template>

<script>
import { parseLocales, getLocale } from '../scripts/locale';

export default {
  props: ['date', 'author'],
  filters: {
    formatDate(val) {
      const date = new Date(val)
      return date.toLocaleDateString()
    },
  },
  computed: {
    locale() {
      const locales = parseLocales(this.$site.locales)
      return getLocale(this.$page.path, locales)
    },
    authorInfos() {
      if (!this.author) {
        return null;
      }
      const parts = this.author.split(' ')

      const nameParts = [...parts]
      nameParts.splice(-1, 1)
      const name = nameParts.join(' ')

      const mail = this.parseMail(parts[parts.length - 1])

      return {
        name: name,
        mail: mail,
      }
    },
  },
  methods: {
    parseMail(value) {
      if (value.startsWith('<') && value.endsWith('>')) {
        let mail = value;
        mail = mail.substring(1); // remove first char
        mail = mail.substring(0, mail.length - 1); // remove last char
        return mail;
      }
      return null;
    },
  }
}
</script>

<style lang="stylus">
.infos {
  color: lighten($textColor, 20%);
}
</style>
