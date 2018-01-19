<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <csv-download :data="data">
        <template>
          <button>点击下载</button>
        </template>
      </csv-download>
      <li><router-link to="/es6">ES6</router-link></li>
    </ul>
  </div>
</template>

<script>
import csvDownload from '@/components/csv-download/download.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to my web',
      data: {
        columns: [{
          key: 'name',
          title: '名称'
        },{
          key: 'age',
          title: '年龄'
        },{
          key: 'address',
          title: '地址'
        }],
        datas: [{
          name: 'ligang',
          age: 27,
          address: '山东省'
        },{
          name: 'ligang',
          age: 27,
          address: '山东省'
        },{
          name: 'ligang',
          age: 27,
          address: '山东省'
        }],
        options: {separator: ','}
      }
    }
  },
  components:  {
    csvDownload
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
