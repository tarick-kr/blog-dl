<template>
  <div id="app">
    <header class="app-container-full-width">
      <div class="app-container">
        <div class="logo">
          <span class="logo-b">B</span>
          <span class="logo-lo">LO</span>
          <span class="logo-g">G</span>
          <div class="logo-dl">
            <span class="logo-d">D</span>
            <span class="logo-l">L</span>
          </div>
        </div>
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
      </div>
    </header>
    <main class="app-main">
      <div class="app-content">
        <router-view/>
      </div>
      <div class="app-popular-posts">Posts</div>
    </main>
    <footer class="app-footer">
      <div>footer</div>
    </footer>
  </div>
</template>

<script>
import IconFacebook from '@/components/IconFacebook'
import IconInstagram from '@/components/IconInstagram'
import IconTelegram from '@/components/IconTelegram'

export default {
  components: {
    IconFacebook,
    IconInstagram,
    IconTelegram
  }
}
</script>

<style lang="sass">

  header.app-container-full-width
    height: 90px
    box-shadow: 0 0 6px rgba(0,0,0,0.3)
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
</style>
