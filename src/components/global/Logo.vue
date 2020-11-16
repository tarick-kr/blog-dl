<template>
  <div class="logo">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 192 84"
    >
      <g>
        <text x="0" y="66" class="letter letter-color-accent">B</text>
        <text x="52" y="67" class="letter">LO</text>
        <text x="160" y="67" class="letter letter-sm">G</text>
        <text x="163" y="30" class="letter letter-xs letter-color-accent">D</text>
        <text x="176" y="30" class="letter letter-xs letter-color-accent">L</text>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="sass">
  .logo
    width: 192px
    height: 84px
    .letter
      font-family: 'Fredericka the Great', cursive
      font-size: 69px
      line-height: 69px
    .letter-sm
      font-size: 40px
    .letter-xs
      font-size: 16px
    .letter-color-accent
      fill: #B00E0E

</style>
