<template>
    <nav class="navigation">
        <button class="navigation__sign_up" @click="signUp">Sign up</button>
    </nav>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class NavigationBar extends Vue{

        signUp() {
            this.$emit("modalOpen")
        }


    }
</script>

<style lang="scss" scoped>
    .navigation{
        background-color: darkgrey;
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        &__sign_up {
            margin: 20px;
            height: 40px;
            background-color: black;
            color: white;
            border: none;
            font-size: 1.3em;
            padding: 0 40px;
            border-radius: 20px;
            &:hover {
                cursor: pointer;
            }
        }
    }
</style>