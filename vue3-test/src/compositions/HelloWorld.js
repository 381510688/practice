import { createApp } from 'vue'

function useDyEl () {
  let html = `
    <h1>{{ msg }}</h1>
    <input v-model="msg">
  `

  let js = `
  return {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'hello'
      }
    }
  }
  `

  let css = `h1 {
    color: blue;
  }
  `

  const vmObj = new Function(js).call(this)

  vmObj.template = html

  console.log(vmObj)
  
  let component = createApp(vmObj).mount('#preview')
  // this.$refs.preview.appendChild(this.component.$el)
  console.log(component)
  // 创建style
  let styleDom = document.createElement('style')
  styleDom.type = 'text/css'
  styleDom.innerHTML = css
  document.getElementsByTagName('head')[0].appendChild(styleDom)

}
export {
  useDyEl
}