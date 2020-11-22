<template>
  <div class="about-content">
    <div class="about-header">
      <h3 class="about-title">Слово для читача:</h3>
      <picture>
        <source type="image/webp" :srcset="photoWebp" class="about-img">
        <img :src="photo" alt="" loading="lazy" width="1280" height="1280" class="about-img">
      </picture>
    </div>
    <section>
      <p class="about-text">Вітаю! Мене звати Лодінов Данило. Я народився і виріс у Кривому Розі. Зараз навчаюсь в Львівському національному університеті імені Івана Франка на факультеті журналістики.</p>
      <p class="about-text">Мій блог не тільки про цікаву , а й про прогресивну науку.
                            Блог буде цікавий:</p>
      <ul>
        <li>для підлітків, що закінчують школу та обирають майбутню професію</li>
        <li>людям, які планують змінити сферу роботи</li>
        <li>людям, які бажають бути більш обізнаними у новітніх технологіях</li>
      </ul>
      <p class="about-text">Немає обмежень у вікових категоріях, бо самоосвіта потрібна завжди.
                            Сподіваюсь, що вам сподобається ця тема і ви знайдете щось цікаве для себе.</p>
    </section>
  </div>
</template>

<script>
import photo from '@/assets/images/photo.jpg'
import photoWebp from '@/assets/images/photo.webp'

export default {
  name: 'About',
  data () {
    return {
      photo,
      photoWebp
    }
  }
}
</script>

<style lang="sass">
  .about-content
    display: flex
    flex-direction: column
    .about-header
      margin-bottom: 16px
      .about-title
        font-size: 22px
        text-transform: uppercase
        margin-bottom: 14px
      .about-img
        max-width: 100%
        height: 100%
    .about-text
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
    .about-content
      .about-header
        margin-bottom: 20px
  @media screen and (max-width: 900px)
    .about-content
      flex-direction: row
      .about-header
        max-width: 50%
        min-width: 263px
        height: 100%
        margin-right: 25px
        margin-bottom: 25px
      section
        margin-top: 30px
      .about-text
        width: 100%
  @media screen and (max-width: 600px)
    .about-content
      flex-direction: column
      .about-header
        max-width: 100%
        margin-bottom: 25px
        margin-right: 0
        height: 100%
        .about-img
          margin-bottom: 0
      section
        margin-top: 0
      .about-text
        width: 100%

</style>
