import Vue from 'vue'
import Vuex from 'vuex'
import {AuthService, SignUpInterface} from "@/AuthService";
import {FormContainer} from "@/container/FormContainer";

Vue.use(Vuex)

export interface User {
  id: number;
  name: string;
}

class AppState {
  constructor(
      public user: User | null = null
  ) {}
}

export default new Vuex.Store({
  state: new AppState(),
  mutations: {
    setUser(state,user: User) {
      state.user = user;
    }
  },
  actions: {
    signUp: async (context: any,form: FormContainer<SignUpInterface>) => {
      const user = await AuthService.singUp(form);
        context.commit("setUser",user);
    }
  },
  modules: {

  }
})
