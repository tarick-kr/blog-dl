<template>
  <div class="single-post-page">
    <article class="article">
      <header class="article-header">
        <picture>
          <source type="image/webp" :srcset="article.urlImageWebp" class="article-img">
          <img :src="article.urlImage" alt="" loading="lazy" width="1000" height="550" class="article-img">
        </picture>
      </header>
      <section>
        <h2 class="article-title">{{ article.title }}</h2>
        <div class="article-text" v-html="contentHtml">
        </div>
        <div class="article-bottom-line">
          <div class="article-date">
            <span>{{ article.date }}</span>
          </div>
          <div class="article-btn-right">
            <router-link :to="{ name: 'Home' }" class="btn-text">На головну</router-link>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      article: {},
      contentHtml: ''
    }
  },
  mounted () {
    const artId = +this.$route.params.id
    this.article = this.getArticleById(artId)
    this.makeContent()
  },
  computed: {
    ...mapGetters({
      getArticleById: 'getArticleById'
    })
  },
  methods: {
    makeContent () {
      const tmpContent = []
      const text = this.article.text
      for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < text[i].content.length; j++) {
          const key = Object.keys(text[i].content[j])
          if (key[0] === 'p') {
            tmpContent.push(`<p>${text[i].content[j].p}</p>`)
          } else if (key[0] === 'sectionTitle') {
            if (text[i].content[j].sectionTitle !== 'noneTitle') {
              tmpContent.push(`<h3>${text[i].content[j].sectionTitle}</h3>`)
            }
          } else if (key[0] === 'ul') {
            tmpContent.push('<ul>')
            const ulArray = text[i].content[j].ul
            for (let k = 0; k < ulArray.length; k++) {
              tmpContent.push(`<li>${ulArray[k]}</li>`)
            }
            tmpContent.push('</ul>')
          }
        }
      }
      this.contentHtml = tmpContent.join('')
    }
  }
}
</script>

<style lang="sass">
  .single-post-page
    width: 100%
    .article
      margin-bottom: 30px
      .article-header
        margin-bottom: 16px
        .article-img
          max-width: 100%
          height: auto
          width: auto
      .article-title
        font-size: 32px
        margin-bottom: 12px
      .article-text
        font-size: 18px
        margin-bottom: 25px
        p
          display: block
          padding-bottom: 12px
          line-height: 24px
        h3
          padding-bottom: 6px
        ul
          margin-left: 50px
          padding-bottom: 12px
          li
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
            text-decoration: none
            font-style: italic
            margin-right: 5px
            color: #B00E0E
            &:hover
              text-decoration: underline
  @media screen and (max-width: 530px)
    .single-post-page
      .article
        .article-title
          font-size: 28px
</style>
