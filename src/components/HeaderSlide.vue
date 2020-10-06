<template>
  <header class="header">
    <div class="container-header">
      <div class="logo">
        <img alt="marca" src="../assets/logo.svg" />
      </div>
      <div class="styky-icons">
        <img
          style="border: 3px solid #009CD9;"
          src="../assets/facebook-icon.svg"
          alt="facebook icon"
        />
        <img
          style="border: 3px solid #B72C2C;"
          src="../assets/instagram-icon.svg"
          alt="instagram icon"
        />
        <img
          style="border: 3px solid #D8AD3D;"
          src="../assets/youtube-icon.svg"
          alt="youtube icon"
        />
      </div>
      <div class="hero">
        <h1 class="primary-font-accent title-hero">El Secreto de tu Cocina</h1>
        <img class="img-hero" src="../assets/hero-shape.png" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderSlide"
};
</script>

<style lang="sass">
.header
  background-image: url("../assets/hero-background.jpg")
  height: 100vh
  background-position: center center
  background-size: cover
  background-attachment: fixed
  background-repeat: no-repeat

.container-header
  padding: 30px 30px

.logo
  margin-left: 45px

.hero
  width: 25%
  bottom: 30px
  position: absolute
  bottom: 150px
  left: 130px
  display: flex
  align-items: center

.title-hero
  position: relative
  left: 9.09%
  right: 46.81%
  top: 11.78%
  bottom: 79.92%
  font-family: Caveat
  font-style: normal
  font-weight: bold
  font-size: 4.5em
  line-height: 80px
  color: #3F454A
  z-index: 3

.hero .img-hero
  position: absolute
  width: 200%
  height: 101px
  left: -180px
  bottom: -18px
  z-index: 1

.styky-icons
  position: fixed
  display: flex
  flex-direction: row-reverse
  left: -30px
  top: 45px
  width: 100%
  z-index: 3

.styky-icons img
  border: solid 3px
  padding: 10px
  border-radius: 50%
  margin-left: 15px

$breakpoint-tablet: 768px

@media (max-width: $breakpoint-tablet)
  .hero
    width: 50%
    bottom: 30px
    position: absolute
    bottom: 150px
    left: 25px
    display: flex
    align-items: center
  .title-hero
    position: relative
    font-family: Caveat
    font-style: normal
    font-weight: bold
    font-size: 3em
    line-height: 1em
    color: #3F454A
    z-index: 3
  .hero .img-hero
    width: 100%
    height: 100px
    position: absolute
    top: 27px
    z-index: 1
    left: 61px
</style>
