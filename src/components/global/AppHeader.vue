<template>
  <header class="app-container-full-width">
    <div class="app-container">
      <router-link :to="{ name: 'Home' }">
        <app-logo></app-logo>
      </router-link>
      <v-spacer />
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
      <v-speed-dial
        class="social-toggle-btn"
        v-model="fab"
        direction="bottom"
        transition="scale-transition"
      >
        <template v-slot:activator>
          <v-btn
            v-model="fab"
            class="social-btn"
            dark
            fab
          >
            <icon-x class="toggle-btn-x" v-if="fab"></icon-x>
            <icon-chevron class="toggle-btn-ch" v-else></icon-chevron>
          </v-btn>
        </template>
        <v-btn
          fab
          small
        >
          <icon-facebook class="social-icon"></icon-facebook>
        </v-btn>
        <v-btn
          fab
          small
        >
          <icon-instagram class="social-icon"></icon-instagram>
        </v-btn>
        <v-btn
          fab
          small
        >
          <icon-telegram class="social-icon"></icon-telegram>
        </v-btn>
      </v-speed-dial>
    </div>
  </header>
</template>

<script>
import AppLogo from '@/components/global/Logo'
import IconFacebook from '@/components/IconFacebook'
import IconInstagram from '@/components/IconInstagram'
import IconTelegram from '@/components/IconTelegram'
import IconX from '@/components/IconX'
import IconChevron from '@/components/IconChevron'

export default {
  name: 'AppHeader',
  components: {
    AppLogo,
    IconFacebook,
    IconInstagram,
    IconTelegram,
    IconX,
    IconChevron
  },
  data: () => ({
    fab: false
  }),
  computed: {

  }
}
</script>

<style lang="sass">
  header.app-container-full-width
    height: 90px
    box-shadow: 0 0 6px rgba(0,0,0,0.3)
    margin-bottom: 50px
    .app-container
      display: flex
      align-items: center
      height: 100%
      .logo
        position: relative
        font-family: 'Fredericka the Great', cursive
        &-b, &-lo, &-g
          font-size: 69px
        &-b, &-d, &-l
          color: #B00E0E
        &-g
          font-size: 40px
        &-dl
          position: absolute
          top: 13px
          right: 0
      .social
        display: block
        &-btn
          width: 32px
          height: 32px
          margin-right: 10px
          &:last-child
            margin-right: 0
        &-icon
          width: 32px
          height: 32px
          color: white
          fill: #373737
      .social-btn
        height: 44px
        width: 44px
        margin-right: 0
      .v-speed-dial--direction-bottom .v-speed-dial__list
        left: -1px
      .theme--dark.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined)
        background-color: #373737
      .toggle-btn-ch
        width: 30px
        height: 30px
      .toggle-btn-x
        width: 22px
        height: 22px
      .social-toggle-btn
        display: none
  @media screen and (max-width: 1024px)
    header.app-container-full-width
      margin-bottom: 40px
  @media screen and (max-width: 900px)
    header.app-container-full-width
      margin-bottom: 16px
  @media screen and (max-width: 530px)
    header.app-container-full-width
      height: 76px
      .app-container
        .logo
          width: 155px
          height: 71px
  @media screen and (max-width: 420px)
    header.app-container-full-width
      .app-container
        .social
          display: none
        .social-toggle-btn
          display: block

</style>
