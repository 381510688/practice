/**
 * Created by ligang on 2018/3/27.
 */
import DatePicker from '@/components/date-picker.vue'

const components = [
  DatePicker
]

export default {
  install(Vue) {
    for(let component of components) {
      Vue.component(component.name, component)
    }
  }
}
