<template>
  <div>
    <div class="navbtn">
     <el-button size="small" v-on:click="addLayout">添加</el-button>
    </div>
    <grid-layout :layout="layout"
                :col-num="15"
                :row-height="85"
                :is-draggable="true"
                :is-resizable="true"
                :vertical-compact="true"
                :use-css-transforms="true"
                :margin="[5,5]"
                class="gridlayoubox"
        >
            <grid-item v-for="item in layout"
                      :key="item.i"
                      :x="item.x"
                      :y="item.y"
                      :w="item.w"
                      :h="item.h"
                      :i="item.i"
                      drag-allow-from=".vue-draggable-handle"
                      drag-ignore-from=".no-drag"
            >
                <div class="text">
                    <div class="vue-draggable-handle">
                      <el-button size="mini" class="iconfont icon-zhuzhuangtu" v-on:click="chartBtn(item.i,'bar')"></el-button>
                      <el-button size="mini" class="iconfont icon-zhexiantu1" v-on:click="chartBtn(item.i,'line')"></el-button>
                      <el-button size="mini" class="iconfont icon-zhongguoditu" v-on:click="chartBtn(item.i,'map')"></el-button>
                      <el-button size="mini" class="iconfont icon-bingzhuangtu" v-on:click="chartBtn(item.i,'pie')"></el-button>
                      <el-button size="mini" class="iconfont icon-sandiantu" v-on:click="chartBtn(item.i,'scatter')"></el-button>
                      <el-button size="mini" class="el-icon-close" v-on:click="deleteLayout(item.i)"></el-button>
                    </div>
                    <div class="no-drag">
                        <div class="drag-center">
                          <Echart :type="item.type"></Echart>
                        </div>
                    </div>
                </div>
            </grid-item>
        </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from  'vue-grid-layout'
import Echart  from '@/components/Echart'
import _ from 'lodash'
const testLayout = [
  { x: 0, y: 0, w: 15, h: 12, i: "0" ,type:"line"},
  { x: 12, y: 0, w: 12, h: 12, i: "1" ,type:"bar"},
  { x: 0, y: 0, w: 12, h: 12, i: "2" ,type:"pie"},
  { x: 12, y: 0, w: 12, h: 12, i: "3" ,type:"scatter"},
  { x: 0, y: 0, w: 12, h: 12, i: "4" ,type:"map"}
]
const GridLayout = VueGridLayout.GridLayout;
const GridItem = VueGridLayout.GridItem;
export default {
  name: "layout",
  components: {
    GridLayout,
    GridItem,
    Echart
  },
  data() {

    return {
      layout: testLayout
    };
  },
  methods:{
      addLayout:function(){
        if (this.layout.length == 0) {
          this.layout.push({ x: 0, y: 0, w: 5, h: 5, i: 0 ,type:"line"})  
        }else{
          this.layout.push({ x: 0, y: 0, w: 5, h: 5, i: (this.layout[this.layout.length-1].i+1),type:"line"})
        }
      },
      deleteLayout:function(i){
        this.layout = _.remove(this.layout, (n)=>{
          return n.i!=i
        })
      },
      chartBtn:function(i,type){
        console.log(i,type)
        let index  = _.findIndex(this.layout, {'i':i});
        this.layout[index].type = type;
      }
  },
  mounted:function(){
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-draggable-handle {
  width: 100%;
  height: 30px;
  background: #ffffff;
  padding: 0;
  text-align: right;
}
.vue-draggable-handle button{
  display: inline-block;
  border: 0;
  font-size: 20px;
  padding: 5px;
}
.no-drag {
  width: 100%;
  position: absolute;
  top: 30px;
  line-height: 18px;
  bottom: 0;
}
.drag-center {
  width: 100%;
  height: 100%;
}
.navbtn{
  text-align: left;
}
.gridlayoubox{
  background: url("../assets/bg.png") repeat;
  margin: auto;
  width: 1350px;
  min-height: 1350px;
}
</style>
