<template>
  <div>
    正在验证登录信息，请稍后。。。。。
  </div>
</template>

<script>
import {urlParse} from '../common/js/util'

export default {
  data () {
    return {
      queryParam: (() => {
        let queryParam = urlParse()
        return queryParam
      })()
    }
  },
  mounted: function () {
    this.validation()
  },
  methods: {
    validation: function () {
      let token = localStorage.getItem('token')
      if (token === null || token === '') {
        this.$router.push({path: '/jwt/login', query: {service: this.queryParam.service}})
      } else {
        console.log(this.queryParam.service + '?token=' + token)
        window.location.href = this.queryParam.service + '?token=' + token
      }
    }
  }
}
</script>

<style scoped>

</style>
