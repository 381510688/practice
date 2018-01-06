/**
 * Created by ligang on 2018/1/6.
 */

import index from '@/views/es6/index.vue'

import myModule from '@/views/es6/my-module/person.vue'
import myModule2 from '@/views/es6/my-module/person2.vue'


export default {
  path: '/es6',
  component: index,
  children: [{
    path: 'module-p1',
    component: myModule
  },{
    path: 'module-p2',
    component: myModule2
  }]
}
