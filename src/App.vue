<template>
  <div id="app">
      <el-container style="width:1600px; margin:auto;">
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">
            <NavMenu></NavMenu>
          </el-aside>
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
        <el-footer>Footer</el-footer>
      </el-container>
    <!-- <router-view/>
    <router-link to="/a">a</router-link> -->
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
export default {
  name: "App",
  components: {
    NavMenu
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  width: auto !important;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
