/**
 * Created by ligang on 2018/1/6.
 */

import empty from '@/views/empty.vue'

import refs from '@/views/vue/refs.vue'
import childCompValidate from '@/views/vue/childCompValidate.vue'
import uploadFileList from '@/views/vue/upload-filelist.vue'

// import ie from '@/views/vue/ie.vue'
const ie = (resolve) => require(['@/views/vue/ie.vue'], resolve)

// import tree from '@/views/vue/treeDemo.vue'
const tree = () => import('@/views/vue/treeDemo.vue')

import tree2 from '@/views/vue/treeDemo2.vue'

import attrs from '@/views/vue/attrs.vue'

// import table from '@/views/vue/table.vue'
const table = () => import('@/views/vue/table.vue')


export default {
  path: '/vue',
  component: empty,
  children: [{
    path: 'refs',
    component: refs
  }, {
    path: 'child-comp-validate',
    component: childCompValidate
  }, {
    path: 'upload-filelist',
    component: uploadFileList
  }, {
    path: 'ie',
    component: ie
  }, {
    path: 'tree',
    component: tree
  }, {
    path: 'tree2',
    component: tree2
  },  {
    path: 'attrs',
    component: attrs
  }, {
    path: 'table',
    component: table
  }]
}
