<template>
  <div id="app">
    <el-button-group v-if="$route.meta.showBtnGroup">
      <router-link to="/ajax">
        <el-button>ajax</el-button>
      </router-link>

      <router-link to="/forward">
        <el-button>forward</el-button>
      </router-link>

      <el-button @click="$router.replace('/register')">register</el-button>

    </el-button-group>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
