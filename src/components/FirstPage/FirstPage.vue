<template>
    <div class="container-fluid vh-100 d-inline-flex align-items-center justify-content-center">
        <div class="row w-100 h-100 align-items-center">
            <h1 class="row w-100 h-75 justify-content-center align-items-center">{{ text }}</h1>
            <div class="justify-content-center row w-100 h-25">
                <button class="row w-25 h-25 justify-content-center align-items-center" @click="changeClass">Sprawdź</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class MyFirstComponentI extends Vue {
    text: string = "Czy słyszałeś już o czterech prawach duchowego życia?";
    firstLaw: string = "first-law";


    changeClass() {
        this.$emit('changeComponent', 'first');
        console.log('test',this.$refs[this.firstLaw]);
    }
}
</script>

<style lang="scss" src="./FirstPage.scss">

</style>
