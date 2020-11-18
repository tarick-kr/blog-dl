<template>
  <div class="expert-content">
    <div class="expert-header">
      <h3 class="expert-title title-header">Експерт блога:</h3>
      <img :src="photo" alt="" class="expert-img" height="1280px" width="1280px">
    </div>
    <section>
      <h3 class="expert-title title-section">Експерт блога:</h3>
      <p class="expert-text">Вітаю! Мене звати Лодінов Данило. Я народився і виріс у Кривому Розі.
                             Зараз навчаюсь в Львівському національному університеті імені Івана Франка на факультеті журналістики.</p>
      <p class="expert-text">Мій блог не тільки про цікаву , а й про прогресивну науку.
                            Блог буде цікавий:</p>
    </section>
  </div>
</template>

<script>
import photo from '@/assets/images/photo-exp.jpg'

export default {
  name: 'Expert',
  data () {
    return {
      photo
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
      .expert-text
        font-size: 18px
        display: block
        padding-bottom: 12px
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
