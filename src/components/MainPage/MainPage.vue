<template>
  <div class="main-page">
    <FirstPage @changeComponent="changeComponent" class="first-page" :class="{'-hidden': firstPage}"/>
    <FirstPage @changeComponent="changeComponent" class="first-page" :class="{'-hidden': secondPage}"/>
    <FirstPage @changeComponent="changeComponent" class="first-page" :class="{'-hidden': thirdPage}"/>
    <FirstPage @changeComponent="changeComponent" class="first-page" :class="{'-hidden': fourthPage}"/>


  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import FirstPage from "../FirstPage/FirstPage.vue";

@Component({
    components: {
        FirstPage
    }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  data() {
      return {
          firstPage: true,
          secondPage: true,
          thirdPage: true,
          fourthPage: false,
          fifthPage: false
      }
  }

  changeComponent() {
      console.log('changeComponent');
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./MainPage.scss"></style>
