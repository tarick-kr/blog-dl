<template>
  <div class="home-page">
    <div class="articles-list">
      <article class="article">
        <header class="article-header">
          <img :src="img1" alt="" height="536px" width="784px" class="article-img">
        </header>
        <section>
          <h2 class="article-title">Сучасні блоги та блогери</h2>
          <div class="article-text">
            <p>Що таке сучасні блоги та блогери? Чому блоги стали настільки читані, а блогери настільки популярні?
               Мене попросили написати рамкову статтю для нововідкритого розділу блогів і от що з того…</p>
          </div>
          <div class="article-bottom-line">
            <div class="article-date">
              <span>20.11.2020</span>
            </div>
            <div class="article-btn-right">
              <router-link :to="{ name: 'Post', params: { id: 123 }}" class="btn-text">Детальніше...</router-link>
            </div>
          </div>
        </section>
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
import img1 from '@/assets/images/1.jpg'

export default {
  name: 'Home',
  data () {
    return {
      img1
    }
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
    .btn-more-articles
      display: flex
      justify-content: center
      margin-bottom: 50px
      .btn-text
        text-transform: lowercase
        font-style: italic
</style>
