<template>
    <chart :options="chartType" auto-resize></chart>
</template>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>

<script>
import Vue from 'vue'
import ECharts from 'vue-echarts/components/ECharts.vue'
import "echarts/lib/component/polar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/lines";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/scatter";
import "echarts/lib/chart/map";
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/effectScatter'
import line from '@/components/chart/ChartLine.js';
import bar from '@/components/chart/ChartBar.js'
import pie from '@/components/chart/ChartPie.js'
import scatter from '@/components/chart/ChartScatter.js'
import map from '@/components/chart/ChartMap.js'

import chinaMap from '@/components/chart/china.json'
Vue.component('chart', ECharts)
ECharts.registerMap('china', chinaMap)

export default {
  name: "ChartLine",
  props: ["type"],
  data: function() {
    let data = [];
    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }
    return {
      chartType: line
    };
  },
  created() {
    this.chartType = this.modifyType(this.type);
  },
  watch: {
    type: function(val, oldVal) {
      this.chartType = this.modifyType(val);
    }
  },
  methods: {
    modifyType: type => {
      if (type == "line") {
        return line;
      }
      if (type == "bar") {
        return bar;
      }
      if (type == "pie") {
        return pie;
      }
      if (type == "scatter") {
        return scatter;
      }
      if (type == "map") {
        return map;
      }
    }
  }
};
</script>