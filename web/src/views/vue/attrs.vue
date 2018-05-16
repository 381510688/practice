<template>
    <div>
        <child
            name="ligang"
            age="28"
            :address="address"
            :style="myStyle"
            @m1="m1"
            @click.natvie="m2"
            @keydown.natvie="m3">
    </child>

        <Auth-Comp :auth="true">
            <div>123</div>
            <span slot="abc" class="123">21221</span>
            <div @click="getX()">{{xxxx}}</div>
        </Auth-Comp>

        <Auth-Comp>
            <div>456</div>
        </Auth-Comp>


        <template v-auth="true">
            <div style="background-color: #00b3ee">123</div>
            <span slot="abc">21221</span>
            <div>42343</div>
        </template>

        <div v-auth="false">
            <div style="background-color: #00b3ee">456</div>
        </div>

    </div>
</template>

<script>
    import Child from './child.vue'
    import AuthComp from './render.vue'
    export default {
      props: [],
      data() {
        return {
          address: '山东省',
          myStyle: {
            color: 'red'
          },
          xxxx: 'xxxxx'
        }
      },
      methods: {
        m1(event) {console.log('m1', event)},
        m2(event) {console.log('m2', event)},
        m3(event) {console.log('m3', event)},

        getX() {
          console.log('xxxxx')
        }
      },
      components: {
        Child,
        AuthComp
      }
    }
</script>