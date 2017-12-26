<template>
    <div>
        <p>prop-event</p>
        <label for="name">姓名</label><input type="text" id="name" v-model="user.name">
        <label for="age">年龄</label><input type="text" id="age" v-model="user.age">
    </div>
</template>

<script>
    export default {
        name: 'prop-event',
        props: {
            user: {
              type: Object,
              default: function() {
                return {
                  name: '',
                  age: ''
                }
              }
            }
        },
        watch: {
          user(newVal) {
            console.log('my-vmodel', newVal)
//            this.$emit('update', newVal)
          }
        }
    }
</script>
