<template>
    <div class="modal">
        <form class="modal__content" @submit.prevent="login" v-click-outside="close">
            <input
                    type="text"
                    class="modal__input"
                    placeholder="Username"
                    @click="clearErrorMsg"
                    v-model="signUpForm.data.username">
            <input
                    type="password"
                    class="modal__input"
                    placeholder="Password"
                    v-model="signUpForm.data.password">

            <span class="modal__alert" v-if="errorMessage.length">{{ errorMessage }}</span>

            <button class="modal__submit" type="submit">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {FormContainer} from "@/container/FormContainer";
    import {SignUpInterface} from "@/AuthService";

    const singUp = new class implements SignUpInterface {
        username = "";
        password = "";
    }

    @Component
    export default class Modal extends Vue{
        signUpForm: FormContainer<SignUpInterface> = new FormContainer<SignUpInterface>(singUp);
        errorMessage = "";

        async login() {
            await this.$store.dispatch("signUp",this.signUpForm);
            if (!this.$store.state.user)
                this.errorMessage = "Username or password is incorrect";
            else
                this.$emit("close")

        }
        clearErrorMsg() {
            this.errorMessage = "";
        }
        close() {
            this.$emit("close")
        }
    }
</script>

<style scoped lang="scss">
    .modal {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.4);
        top: 0;
        &__content {
            width: 300px;
            display: flex;
            flex-direction: column;
            padding: 20px;
            background-color: white;
        }
        &__input {
            padding: 5px;
        }
        &__input, &__alert {
            margin: 10px 0;
        }
        &__alert {
            color: red;
        }
        &__submit {
            padding: 5px;
        }
    }
</style>