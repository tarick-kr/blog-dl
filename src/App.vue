<template>
  <div id="app">
    <app-header></app-header>
    <div class="app-content app-container">
      <main class="app-main">
        <router-view/>
      </main>
      <aside class="app-aside">
        <v-divider class="divider-top"></v-divider>
        <app-about></app-about>
        <v-divider class="divider-bottom"></v-divider>
        <app-expert></app-expert>
      </aside>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/global/AppHeader'
import AppFooter from '@/components/global/AppFooter'
import AppAbout from '@/components/About'
import AppExpert from '@/components/Expert'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppAbout,
    AppExpert
  }
}
</script>

<style lang="sass">
  .app-content
    display: flex
    .app-main
      max-width: 70%
      margin-right: 25px
    .app-aside
      max-width: calc(30% - 25px)
      .divider-top
        display: none
        margin-bottom: 16px
      .divider-bottom
        display: block
        margin-bottom: 16px

  @media screen and (max-width: 900px)
    .app-content
      flex-wrap: wrap
      .app-main
        max-width: 100%
        margin-right: 0
      .app-aside
        max-width: 100%
        .divider-top
          display: block
          margin-bottom: 16px
        .divider-bottom
          display: block
          margin-bottom: 16px

  @media screen and (max-width: 530px)
    .app-content
      .app-aside
        margin-bottom: 25px

</style>
