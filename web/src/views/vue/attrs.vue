<template>
    <div>
        <child
                name="ligang"
                age="28"
                :address="address"
                :style="myStyle"
                @m1="m1"
                @click="m2"
                @keydown.natvie="m3">
        </child>
    </div>
</template>

<script>
    import Child from './child.vue'
    export default {
      props: [],
      data() {
        return {
          address: '山东省',
          myStyle: {
            color: 'red'
          }
        }
      },
      methods: {
        m1(event) {console.log('m1', event)},
        m2(event) {console.log('m2', event)},
        m3(event) {console.log('m3', event)}
      },
      components: {
        Child
      }
    }
</script>