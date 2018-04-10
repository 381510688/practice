/**
 * Created by ligang on 2018/1/6.
 */

import empty from '@/views/empty.vue'

import refs from '@/views/vue/refs.vue'
import childCompValidate from '@/views/vue/childCompValidate.vue'
import uploadFileList from '@/views/vue/upload-filelist.vue'

import ie from '@/views/vue/ie.vue'

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
  }]
}
