<template>
  <div id="app">
    <navigation-bar @modalOpen="modalOpen = true"/>
    <div class="container">
      <div class="card_list">
        <card v-for="c in cards" :key="c"/>
      </div>
    </div>
    <modal v-if="modalOpen" @close="modalOpen = !modalOpen"/>
  </div>
</template>

<script lang="ts">
  import NavigationBar from "@/components/NavigationBar.vue";
  import Card from "@/components/Card.vue";
  import Modal from "@/components/Modal.vue";
  import { Component, Vue} from "vue-property-decorator";


  @Component({
    components:{
      NavigationBar,
      Card,
      Modal
    }
  })
  export default class App extends Vue {
    cards = [1,2,3,4,5,6];
    modalOpen: boolean = false;
  }
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  position: relative;
}
.container {
  max-width: 960px;
  margin: auto;
}

.card_list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 20px;
}

</style>
