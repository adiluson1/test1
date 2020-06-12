<template>
   <div class="card">

   </div>
</template>


<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Card extends Vue{

    }
</script>

<style scoped lang="scss">
   .card{
      background-color: darkgrey;
      min-width: 200px;
      width: 100%;
      height: 200px;
   }
</style>