<template>
  <div class="jwt">
    <div class="user">
      <div class="username">
        <span>用户名：</span>
      </div>
      <div class="userinput">
        <input v-model="username"/>
      </div>
    </div>
    <div class="pwd">
      <div class="password">
        <span>密码：</span>
      </div>
      <div class="pwdinput">
        <input v-model="password"/>
      </div>
    </div>
    <div><button @click="submit">提交</button></div>
    <div class="message-err" v-show="showMessage">用户名或密码不对请重新输入。</div>
  </div>
</template>

<script>
import {urlParse} from '../common/js/util'

export default {
  data () {
    return {
      username: '',
      password: '',
      showMessage: false,
      queryParam: (() => {
        let queryParam = urlParse()
        return queryParam
      })()
    }
  },
  methods: {
    submit: function () {
      console.log(this.username + this.password)
      if (this.username !== 'aa' && this.password !== 'bb') {
        this.showMessage = true
      } else {
        // TODO need to do something
        let token = '12345.67890.54321'
        this.showMessage = false
        localStorage.setItem('token', token)
        window.location.href = this.queryParam.service + '?token=' + token
      }
    }
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  .message-err
    color: red
    font-weight: bold
</style>
