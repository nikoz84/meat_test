<template>
  <div id="app">
    <!--div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/sobre">Sobre</router-link>
    </div-->
    <router-view />
  </div>
</template>

<style lang="sass">
*
 margin:0
 padding:0

$black: #24272a
$grey: #3f454a
$yellow: #d8ad3d
$red: #b72c2c
$white: #ffffff

.text-black
  color: $black

.text-grey
  color: $grey

.text-yellow
  color: $yellow

.text-red
  color: $red

.text-white
  color: $white


$primary-font: Caveat
$secondary-font: Open Sans

body
  font-family: Raleway
  font-size: 16px
  font-style: normal
  color: $black
  font-weight: 500
  line-height: 20px
  letter-spacing: 0,01em
  text-align: left

.primary-font-accent
  font-family: $primary-font
  weight: 700
  color: $grey
  style: normal
  size: 70px
  line-height: 100px

.secondary-font-accent
  font-family: $secondary-font
  weight: 400
  style: normal
  size: 55px
  line-height: 90px
  align: center

h2
  text-align: center
  font-size: 75px
  weight: 700
  &:after
    content: ""
    display: block
    height: 80px
    background-image: url("./assets/heading-shape.png")
    background-repeat: no-repeat
    background-position: center bottom
    opacity: 0.2

.heading-shape
  background-image: url("./assets/heading-shape.png")
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  position: relative

.container
  margin-left: 30px
  margin-right: 30px
</style>
