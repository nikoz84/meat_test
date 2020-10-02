<template>
  <div>
    <HeaderSlide></HeaderSlide>
    <div class="content">
      <Articles></Articles>
      <Contact></Contact>
    </div>
  </div>
</template>

<script>
import { HeaderSlide, Articles, Contact } from "@/components/";

export default {
  name: "Home",
  components: { HeaderSlide, Articles, Contact }
};
</script>
