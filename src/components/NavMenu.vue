<template>
    <div>
        <div v-on:click="aollapse" class="toggle-btn"> 
            <i class="el-icon-caret-bottom" v-show="!this.isCollapse"></i>
            <i class="el-icon-caret-right" v-show="this.isCollapse"></i>  
        </div>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title"> <router-link to="/l">layout</router-link></span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group >
            <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">echart</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
        </el-menu>
    </div>   
</template>


<style scoped>
.el-radio-group{
    display: block;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.toggle-btn{
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
}
</style>

<script>
export default {
    name: 'NavMenu',
    data() {
        return {
            isCollapse: false
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        },
        aollapse(){
            this.isCollapse = !this.isCollapse
        }
    }
};
</script>