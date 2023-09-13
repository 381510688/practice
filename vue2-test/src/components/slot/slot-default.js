export default {
  functional: true,
  name: 'slot-default',
  render: function (createElement, context) {
    // 完全透传任何 attribute、事件监听器、子节点等。
    // return createElement('div', [
    //   context.scopedSlots.default()
    // ])
    return createElement(
      'div',
      context.data,
      context.children
    )
  }
}