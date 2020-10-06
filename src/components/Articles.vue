<template>
  <section class="container">
    <h2 class="primary-font-accent title">Nuestros Artículos</h2>
    <div class="content">
      <nav class="menu">
        <div
          class="menu-item"
          :class="{ active: term == 'Todos' }"
          value="Todos"
          @click="onFilter('Todos')"
        >
          TODOS
        </div>
        <div
          class="menu-item"
          :class="{ active: term == 'Productos' }"
          @click="onFilter('Productos')"
        >
          PRODUCTOS
        </div>
        <div
          class="menu-item"
          :class="{ active: term == 'Recetas' }"
          @click="onFilter('Recetas')"
        >
          RECETAS
        </div>
        <div
          class="menu-item"
          :class="{ active: term == 'Consejos' }"
          value="Consejos"
          @click="onFilter('Consejos')"
        >
          CONSEJOS
        </div>
      </nav>
      <div class="column" v-if="!isLoading">
        <Card
          v-for="(article, i) in articles"
          :key="i"
          :image="article.image"
          :title="article.title"
          :url="article.url"
          :content="article.content"
        ></Card>
      </div>
      <div v-else class="content-loader">
        <div class="loader"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "./shared/Card";

export default {
  name: "Articles",
  components: { Card },
  data() {
    return {
      articles: [],
      term: "Todos",
      isLoading: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.isLoading = true;
      let categoryFilter = this.term == "Todos" ? "" : `?filter=${this.term}`;
      const response = await this.$axios.get(
        `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles${categoryFilter}`
      );
      this.isLoading = false;
      this.articles = response.data;
    },
    onFilter(filter) {
      if (filter) {
        this.term = filter;
        this.getData();
      }
    }
  }
};
</script>

<style scoped lang="sass">
$yellow: #d8ad3d

.content
  display: flex
  align-items: flex-start

.column
  width: 60%
  display: flex
  flex-wrap: wrap
  justify-content: center

.menu
  flex-flow: column-nowrap
  width: 20%
  padding: 20px
  border-radius: 10px 10px 7px 7px
  box-shadow: 3px 4px 10px -7px rgba(0,0,0,0.2)

.menu-item
  margin-top: 15px
  cursor: pointer

.menu-item.active
  color: $yellow

.active:after
  margin-left: 30%
  color: $yellow
  content: url("../assets/arrow.svg")

.content-loader
  min-height: 50vh
  margin-left: 150px

.loader
  border: 16px solid #f3f3f3
  border-radius: 50%
  border-top: 16px solid $yellow
  width: 120px
  height: 120px
  -webkit-animation: spin 2s linear infinite
  animation: spin 2s linear infinite

@-webkit-keyframes spin
  0%
    -webkit-transform: rotate(0deg)
  100%
    -webkit-transform: rotate(360deg)

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)

$breakpoint-tablet: 768px

@media (max-width: $breakpoint-tablet)
  .menu
    flex-flow: column-nowrap
    width: 30%
    padding: 10px
    border-radius: 10px 10px 7px 7px
    box-shadow: 3px 4px 10px -7px rgba(0,0,0,0.2)
  .active:after
    margin-left: 5%
    color: $yellow
    content: url("../assets/arrow.svg")
</style>
