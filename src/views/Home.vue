<template>
  <div class="home-page">
    <div class="articles-list">
      <article class="article" v-for="(art, ind) in getArticles" :key="art.id">
        <header class="article-header">
          <picture>
            <source type="image/webp" :srcset="art.urlImageWebp" class="article-img">
            <img :src="art.urlImage" alt="" loading="lazy" width="1000" height="550" class="article-img">
          </picture>
        </header>
        <section>
          <router-link class="article-title-link" :to="{ name: 'Post', params: { id: art.id }}">
            <h2 class="article-title">{{ art.title }}</h2>
          </router-link>
          <div class="article-text">
            <p>{{ art.shortText }}…</p>
          </div>
          <div class="article-bottom-line">
            <div class="article-date">
              <span>{{ art.date }}</span>
            </div>
            <div class="article-btn-right">
              <router-link :to="{ name: 'Post', params: { id: art.id }}" class="btn-text">Детальніше...</router-link>
            </div>
          </div>
        </section>
        <v-divider class="dividerArticle" v-if="ind !== getArticles.length - 1" />
      </article>
    </div>
    <div class="btn-more-articles" v-show="false">
      <v-btn text>
        <span class="btn-text">завантажити ще</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
// import img1 from '@/assets/images/1.jpg'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      // img1
    }
  },
  mounted () {
    // this.$store.dispatch('GET_ARTICLES')
  },
  computed: {
    ...mapGetters({
      getArticles: 'getArticles'
    })
  }
}
</script>

<style lang="sass">
  .home-page
    width: 100%
    .articles-list
      margin-bottom: 40px
      .article
        margin-bottom: 30px
        .article-header
          margin-bottom: 16px
          .article-img
            max-width: 100%
            height: 100%
        .article-title-link
          text-decoration: none
          color: #373737
          .article-title
            font-size: 32px
            margin-bottom: 12px
            &:hover
              text-decoration: underline
        .article-text
          font-size: 18px
          margin-bottom: 25px
          p
            display: block
            padding-bottom: 12px
            line-height: 24px
        .article-bottom-line
          display: flex
          justify-content: space-between
          align-items: center
          .article-date
            font-style: italic
            font-size: 18px
            color: #373737
          .article-btn-right
            .btn-text
              text-transform: lowercase
              font-style: italic
              margin-right: 5px
              text-decoration: none
              color: #B00E0E
        .dividerArticle
          margin-top: 25px
    .btn-more-articles
      display: flex
      justify-content: center
      margin-bottom: 50px
      .btn-text
        text-transform: lowercase
        font-style: italic

  @media screen and (max-width: 530px)
    .home-page
      .articles-list
        .article
          margin-bottom: 16px
          .article-title-link
            .article-title
              font-size: 28px
          .dividerArticle
            margin-top: 16px
</style>
