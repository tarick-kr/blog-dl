<template>
  <div class="about-content">
    <img :src="photo" alt="" class="about-img" height="1280px" width="1280px">
    <section>
      <p class="about-text">Вітаю! Мене звати Лодінов Данило. Я народився і виріс у Кривому Розі. Зараз навчаюсь в Львівському національному університеті імені Івана Франка на факультеті журналістики.</p>
      <p class="about-text">Мій блог про неймовірно цікаву науку. Сподіваюсь, що ви дізнаєтеся щось нове для себе.</p>
    </section>
  </div>
</template>

<script>
import photo from '@/assets/images/photo.jpg'

export default {
  name: 'About',
  data () {
    return {
      photo
    }
  }
}
</script>

<style lang="sass">
  .about-content
    display: flex
    flex-direction: column
    .about-img
      max-width: 100%
      margin-bottom: 25px
      height: 100%
    .about-text
      font-size: 18px
      display: block
      padding-bottom: 12px
      line-height: 24px
  @media screen and (max-width: 900px)
    .about-content
      flex-direction: row
      .about-img
        max-width: 50%
        min-width: 263px
        height: 100%
        margin-right: 25px
      .about-text
        width: 100%
  @media screen and (max-width: 530px)
    .about-content
      flex-direction: column
      .about-img
        max-width: 100%
        margin-bottom: 25px
        height: 100%
      .about-text
        width: 100%

</style>
