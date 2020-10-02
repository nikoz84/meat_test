<template>
  <button class="btn" :class="className" >
</template>
<script>
export default {
  name: "Btn",
  props:{
      className: String
  }
}
</script>

<style lang="sass" scoped>
$normal: #D8AD3D
$hover: #009CD9
$disable: #CFCFCF

.btn
  background-color: $normal
  &hover:
    background-color: $hover

.btn .disabled
  background-color: $disabled

</style>