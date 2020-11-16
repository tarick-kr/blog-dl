<template>
  <footer class="app-footer">
    <div class="social">
      <v-btn
        class="social-btn"
        fab
        text
      >
        <icon-facebook class="social-icon"></icon-facebook>
      </v-btn>
      <v-btn
        class="social-btn"
        fab
        text
      >
        <icon-instagram class="social-icon"></icon-instagram>
      </v-btn>
      <v-btn
        class="social-btn"
        fab
        text
      >
        <icon-telegram class="social-icon"></icon-telegram>
      </v-btn>
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
      &-btn
        width: 32px
        height: 32px
        margin-right: 37px
        &:last-child
          margin-right: 0
      &-icon
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
