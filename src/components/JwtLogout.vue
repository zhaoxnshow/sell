<template>
  <div class="jwt">正在登出请稍后。。。。。</div>
</template>

<script>
export default {
  methods: {
    logout: function () {
      localStorage.setItem('token', '')
    }
  },
  mounted: function () {
    this.logout()
    this.$router.push('/jwt/login')
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">

</style>
