<template>
  <div class="home">
    <img src="../../static/mad_monster.svg">
    <h1 v-text="$t('home.title')"></h1>
    <p v-text="$t('home.description')"></p>
    <router-link to="/blog" class="button">
      Blog
    </router-link>
  </div>
</template>

<script>
  import { retrieveByLanguage } from '../helpers'

  export default {
    name: 'vuelog-home',

    computed: {
      active () {
        return this.$store.getters.lang
      },

      config () {
        return this.$store.getters.config
      },

      system () {
        return this.$store.getters.system
      },

      download () {
        return `${this.system.project}/releases/latest`
      },

      title () {
        return retrieveByLanguage(this.config.brand, this.active, 'en-US')
      }
    },

    created () {
      this.$store.dispatch('documentTitle', this.title)
    },

    watch: {
      $route (to, from) {
        if (to.query.lang !== from.query.lang) {
          this.$store.dispatch('documentTitle', this.title)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.home {
  text-align: center;
}

img {
  display: inline-block;
  height: 256px;
  width: 256px;
  margin-top: 75px;
}

h1 {
  font-weight: 300;
  font-size: 60px;
  margin-top: 16px;
  margin-bottom: 36px;
}

p {
  color: #7f8c8d;
  font-size: 20px;
  margin-bottom: 24px;
}

.github {
  background: #fff;
  color: #4fc08d;

  &:hover {
    background: #fcfcfc;
    color: #5dc596;
  }
}

@media screen and (max-width: 999px) {
  img {
    height: 192px;
    width: 192px;
    margin-top: 32px;
  }

  h1, p {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .button {
    margin-bottom: 0.25em;
  }
}
</style>
