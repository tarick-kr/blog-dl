<template>
  <div class="expert-content">
    <div class="expert-header">
      <h3 class="expert-title title-header">Експерт блогу:</h3>
      <picture>
        <source type="image/webp" :srcset="photoWebp" class="expert-img">
        <img :src="photo" alt="" loading="lazy" width="1280" height="1280" class="expert-img">
      </picture>
    </div>
    <section>
      <h3 class="expert-title title-section">Експерт блога:</h3>
      <h4 class="expert-subtitle top">Сергій Тарасов</h4>
      <h4 class="expert-subtitle">FullStack веб-розробник</h4>
      <p class="expert-text"><strong>Мови програмування:</strong> Javascript, PHP, Java</p>
      <p class="expert-text"><strong>Фреймворки та CMS:</strong> Vue.js, Nuxt.js, Laravel, Wordpress</p>
      <p class="expert-text"><strong>Технології:</strong> HTML/CSS, Git, Gulp, WebPack</p>
      <p class="expert-text"><strong>Препроцесори:</strong> SCSS (SASS), PAG</p>
      <p class="expert-text"><strong>Бекенд:</strong> Node.js, Apache, NGINX</p>
      <p class="expert-text"><strong>Бази даних:</strong> MongoDb, Firebase, MySQL</p>
    </section>
  </div>
</template>

<script>
import photo from '@/assets/images/photo-exp.jpg'
import photoWebp from '@/assets/images/photo-exp.webp'

export default {
  name: 'Expert',
  data () {
    return {
      photo,
      photoWebp
    }
  }
}
</script>

<style lang="sass">
  .expert-content
    display: flex
    flex-direction: column
    .expert-header
      margin-bottom: 16px
      .expert-title
        font-size: 22px
        text-transform: uppercase
        margin-bottom: 14px
      .expert-title.title-header
        display: block
      .expert-img
        max-width: 100%
        height: 100%
    section
      margin-bottom: 25px
      .expert-title
        font-size: 22px
        text-transform: uppercase
        margin-bottom: 14px
      .expert-title.title-section
        display: none
      .expert-subtitle
        font-size: 20px
        line-height: 27px
        margin-bottom: 10px
      .expert-subtitle.top
        margin-bottom: 0
      .expert-text
        font-size: 18px
        display: block
        padding-bottom: 2px
        line-height: 24px
      ul
        font-size: 18px
        margin-left: 17px
        line-height: 24px
        padding-bottom: 12px
  @media screen and (max-width: 1024px)
    .expert-content
      .expert-header
        margin-bottom: 20px
  @media screen and (max-width: 900px)
    .expert-content
      flex-direction: row-reverse
      .expert-header
        max-width: 50%
        min-width: 263px
        height: 100%
        margin-right: 0
        margin-bottom: 16px
        .expert-title.title-header
          display: none
      section
        margin-top: 0
        margin-right: 25px
        .expert-title.title-section
          display: block
        .expert-text
          width: 100%
  @media screen and (max-width: 600px)
    .expert-content
      flex-direction: column
      .expert-header
        max-width: 100%
        margin-bottom: 25px
        margin-right: 0
        height: 100%
        .expert-title.title-header
          display: block
        .expert-img
          margin-bottom: 0
      section
        margin-top: 0
        margin-right: 0
        margin-bottom: 16px
        .expert-title.title-section
          display: none
        .expert-text
          width: 100%

</style>
