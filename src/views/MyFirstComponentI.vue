<template>
  <div
    class="container-fluid h-75 d-inline-flex align-items-center justify-content-center"
  >
    <div class="row">
      <h1>{{ text }}</h1>
      <button :onclick="changeClass">Sprawdź</button>
    </div>
    <div class="row first-law">
      <h1>{{ firstlaw }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class MyFirstComponentI extends Vue {
  text: string = "Czy słyszałeś już o czterech prawach duchowego życia?";
  firstlaw: string = "Prawo Pierwsze";

  changeClass() {
    document.getElementsByClassName("first-law").classList.add("next");
  }
}
</script>

<style lang="scss"></style>
