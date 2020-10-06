<template>
  <article class="card">
    <img
      :src="image"
      alt="Imagen de destaque"
      style="width:100%"
      loading="lazy"
    />
    <section class="card-content">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-description">
        {{ content }}
      </p>
    </section>
  </article>
</template>

<script>
export default {
  name: "Card",
  props: {
    image: String,
    title: String,
    category: String,
    content: String,
    url: String
  }
};
</script>

<style lang="sass" scoped>
.card
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)
  transition: 0.3s
  width: 30%
  border-radius: 10px 10px 7px 7px
  margin-bottom: 10px
  margin-left: 10px

.card:hover
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)

.card
  .card-image
    height: 40%

.card-content
  padding: 10px
  .card-title
    padding-bottom: 10px
    font-family: Raleway
    font-size: 16px
    font-style: normal
    font-weight: 700
    line-height: 24px
    letter-spacing: 0,01em
    text-align: left

$breakpoint-tablet: 768px

@media (max-width: $breakpoint-tablet)
  .card
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)
    transition: 0.3s
    width: 80%
    border-radius: 10px 10px 7px 7px
    margin-bottom: 10px
    margin-left: 10px
</style>
