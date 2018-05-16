<script>
  export default {
    name: 'Auth-Comp',
    functional: true,
    // 增加了context来弥补缺少的实例
    render: function(createElement, context) {
        console.log(context.slots())
        let {props, children, data} = context

        return children

        if(props.auth) {
          return createElement('div', data, children)
        } else {
          return null
        }
    }
  }
</script>