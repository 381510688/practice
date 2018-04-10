<template>
  <el-date-picker
    v-model="value"
    size="small"
    :type="type"
    @change="getDate"
    :disabled="disabled"
    :editable="editable">
  </el-date-picker>
</template>

<script>
  // ['data', 'hasDisabled'],  // data为一个时间戳， hasDisabled为是否有disabled属性，true————》disabled = true
  export default {
    name: 'date-picker',
    props: {
      data: null,
      type: {
        default: 'datetime'
      },
      disabled: {
        default: false,
        type: Boolean
      },
      editable: {
        default: true,
        type: Boolean
      }
    },
    data () {
      return {
        value: ''
      }
    },
    watch: {
      data: {
        handler: function (newVal, oldValue) {
          console.log('watch:' + newVal)
          // 监控data值然后把时间戳转成格式化后的时间值
          if (!newVal) return
          this.$nextTick(() => {
            this.value = new Date(newVal)
            console.log('value: ' + this.value)
          })
        },
        immediate: true
      }
    },
    methods: {
      getDate () {
        console.log('getDate' + this.value)
        this.$emit('getDate', +new Date(this.value))
      },
      cancel () {
        this.value = ''
      }
    }
  }
</script>
