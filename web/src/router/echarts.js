import empty from '@/views/empty.vue'

import map3D from '@/views/echarts/map3D'

export default {
  path: '/echarts',
  component: empty,
  children: [{
    name: 'map-3d',
    path: 'map-3d',
    component: map3D
  }]
}
