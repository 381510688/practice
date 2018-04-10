<template>
    <div>
        <date-picker @getDate="getDate" :data="time"></date-picker>
    </div>
</template>

<script>
    export default {
      data () {
        return {
            time: '',
            event: null
        }
      },
      methods: {
        getDate(val) {
          console.log(val)
        },
        // ESC键盘事件处理
        keyDownMethod() {
          if (window.event && window.event.keyCode == 27) {
            console.log(this.event.source, this.event.origin)
            this.event.source.postMessage(JSON.stringify({status: 'close'}), this.event.origin);
          }
        }
      },
      mounted() {
        // 监听事件
        document.addEventListener('keydown', this.keyDownMethod)
        window.addEventListener('message', (event) => {
          console.log('event', event)
          this.event = event
        })

        this.$request({
          url: 'http://localhost:3000/api/test'
        }).then(data => {console.log(data)})
      },
      destroyed() {
        // 移除监听
        document.removeEventListener('keydown', this.keyDownMethod)
      }
    }
</script>
