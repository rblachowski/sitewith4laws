<template>
  <div>
    <MyFirstComponentI @changeComponent="changeComponent"/>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MyFirstComponentI from "@/components/MyFirstComponentI.vue";

@Component({
    components: {
        MyFirstComponentI
    }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;


  changeComponent() {
      console.log('changeComponent');
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
