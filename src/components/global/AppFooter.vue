<template>
  <footer class="app-footer">
    <div class="social">
      <a href="https://www.facebook.com/danil.lodinov.1" class="social-link">
        <v-btn
          class="social-btn"
          fab
          text
        >
          <icon-facebook class="social-icon"></icon-facebook>
        </v-btn>
      </a>
      <a href="https://www.instagram.com/d.ldnv/?hl=ru" class="social-link">
        <v-btn
          class="social-btn"
          fab
          text
        >
          <icon-instagram class="social-icon"></icon-instagram>
        </v-btn>
      </a>
      <a href="https://t.me/dldnv" class="social-link">
        <v-btn
          class="social-btn"
          fab
          text
        >
          <icon-telegram class="social-icon"></icon-telegram>
        </v-btn>
      </a>
    </div>
    <div class="copyright-text">
      <span>© 2020</span>
    </div>
  </footer>
</template>

<script>
import IconFacebook from '@/components/IconFacebook'
import IconInstagram from '@/components/IconInstagram'
import IconTelegram from '@/components/IconTelegram'

export default {
  name: 'AppFooter',
  components: {
    IconFacebook,
    IconInstagram,
    IconTelegram
  }
}
</script>

<style lang="sass">
  footer.app-footer
    width: 100%
    height: 165px
    background-color: #373737
    padding-top: 44px
    .social
      display: flex
      justify-content: center
      &-link
        margin-right: 37px
        &:last-child
          margin-right: 0
        .social-btn
          width: 32px
          height: 32px
        .social-icon
          width: 32px
          height: 32px
          color: #373737
          fill: #ffffff

    .copyright-text
      font-size: 22px
      color: white
      margin-top: 39px
      text-align: center

</style>
