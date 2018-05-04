<template>
    <div id="main" style="height: 500px; width: 600px;">
        123
    </div>
</template>

<script>
  import echarts from 'echarts';
  import 'echarts-gl';

  import liaoning from './liaoning.json'

  export default {
    name: '',
    data() {
      return {}
    },
    mounted() {
      var regionData = [{
        name: '大连市',
        value: 12
      },{
        name: '朝阳市',
        value: 42
      },{
        name: '丹东市',
        value: 11
      },{
        name: '铁岭市',
        value: 51
      },{
        name: '沈阳市',
        value: 34
      },{
        name: '抚顺市',
        value: 22
      },{
        name: '葫芦岛市',
        value: 9
      }]


      var myChart = echarts.init(document.getElementById('main'));
      echarts.registerMap('liaoning', liaoning)
      var option = {
//        visualMap: {
//          show: true,
//          type: 'continuous',
//          calculable: true,
//          min: 0,
//          max: 55,
//          inRange: {
//            color: ['rgb(208,80,42)',
//              '#e87e40',
//              '#8ac765',
//              '#54b6d8',
//              '#4679ca',
//              '#eab15e',
//              '#e85152',
//              '#af6c8b',
//              '#b95583',
//              '#8c589f',
//              '#4f469e']
//          },
//          outOfRange: {
//            color: ['red']
//          }
//        },

        series: [{
          type: 'map3D',
          map: 'liaoning',
//          viewControl: {
//            alpha: 45,
//            distance: 150
//          },
//          label: {
//            show: true,
//            textStyle: {
//              color: '#fff',
//              fontSize: '10',
//              borderWidth: 'none',
//              borderColor: 'transparent',
//              backgroundColor: 'transparent',
//              shadowColor: 'transparent'
//            }
//          },
//          itemStyle: {
//            color: '#333',
//            borderWidth: '1',
//            borderColor: '#333'
//          },
//          emphasis: {
//            itemStyle: {
//              color: 'yellow'
//            }
//          },
//          postEffect: {
//            enable: true
//          },
//          light: {
//            main: {
//              intensity: 1,
//              shadow: true,
//              alpha: 150,
//              beta: 70
//            },
//            ambient: {
//              intensity: 0
//            }
//
//          },
//          groundPlane: {
//            show: false // 不显示地面
//          },
//          data: regionData
        }]

      }
      myChart.setOption(option);
    }
  }
</script>

<style scoped>

</style>