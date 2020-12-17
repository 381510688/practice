<template>
  <div>
    标准化参数结果：{{result}}
  </div>
</template>

<script>
export default {
  name: 'test-prop',
  data () {
    return {
      result: ''
    }
  },
  props: {
    testParam: {
      type: [Boolean, String, Object]
    }
  },
  methods: {
    _normalizeProps () {
      let propsType = (typeof this.testParam).toLowerCase()
      console.log(123, propsType)
      switch (propsType) {
        case 'boolean': 
          return this.testParam ? {name: 'boolean'}: false
        case 'object':
          return Object.assign({name: 'object'}, this.testParam)
        default: 
          return {name: 'default'}
      }
    }
  },
  mounted () {
    this.result = this._normalizeProps()
  }
}
</script>