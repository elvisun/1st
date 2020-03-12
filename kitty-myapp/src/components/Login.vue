<template>
    <div>
        <div>
            <h1>Pet Cat for Sale!</h1>
            <img src="">
        </div>

        <div>
        <!--User Name-->
        <input type="text" placeholder="Username" v-model="userName">
        <!--Pass Word-->
        <input type="text" placeholder="Password" v-model="passWord">
        <!--Login Button-->
        <button @click="submit()">Login</button>
        <span>Forgot password?</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      passWord: ''
    }
  },
  methods: {
    submit () {

    }
  }
}
</script>
