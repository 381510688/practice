/**
 * Created by ligang on 2018/1/6.
 */

import refs from '@/views/vue/refs.vue'

export default {
  path: '/vue',
  component: refs,
  children: [{
    path: 'refs',
    component: refs
  }]
}
