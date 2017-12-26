<template>
  <div id="app">
    <!--<prop-event :user="user" @update="val => user = val" key="1"></prop-event>-->
    <!--<my-sync :user.sync="user" key="2"></my-sync>-->
    <!--<my-vmodel v-model="user" key="3"></my-vmodel>-->
    <!--<p>-->
      <!--<span>{{user.name}} {{user.age}}</span>-->
    <!--</p>-->

    <!--<prop-event-value :address="address" @update="val => address = val" key="4"></prop-event-value>-->
    <!--<my-sync-value :address.sync="address" key="5"></my-sync-value>-->
    <!--<my-vmodel-value v-model="address" key="6"></my-vmodel-value>-->
    <!--<p>-->
      <!--<span>{{address}}</span>-->
    <!--</p>-->

    <!-- 组件prop默认值 -->
    <default-prop :data="item" v-for="(item, index) in list" :key="index" data-a="index"></default-prop>
    <button @click="addDefaultPropComponent">添加</button>
  </div>
</template>

<script>
import propEventValue from './components/prop-event-value.vue'
import mySyncValue from './components/my-sync-value.vue'
import myVmodelValue from './components/my-vmodel-value.vue'

import propEvent from './components/prop-event.vue'
import mySync from './components/my-sync.vue'
import myVmodel from './components/my-vmodel.vue'

import defaultProp from './components/default-prop.vue'

export default {
  name: 'app',
  components: {
    propEventValue,
    mySyncValue,
    myVmodelValue,
    propEvent,
    mySync,
    myVmodel,

    defaultProp
  },
  data() {
    return {
      user: {},
      address: '',

      list: [{name: 'xx', age: 19}]
    }
  },
  methods: {
    addDefaultPropComponent() {
      this.list.push(undefined)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
