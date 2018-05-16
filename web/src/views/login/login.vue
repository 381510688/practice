<template>
    <div>
        <el-row>
            <el-col :span="6" :offset="9">
                <label for="username">
                    <el-input type="input" id="username" name="username" v-model="user.username"></el-input>
                </label>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6" :offset="9">
                <label for="password">
                    <el-input type="password" id="password" name="password" v-model="user.password"></el-input>
                </label>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6" :offset="11" type="flex">
                <el-button @click="login">登录</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import {routes} from '@/router'
  export default {
    name: '',
    data() {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        this.$request({
          method: 'post',
          url: '/api/login',
          data: {
            ...this.user
          }
        }).then(({Authorization}) => {
          window.localStorage.Authorization = Authorization
          // 获取当前用户的路由情况
          this.getRouters()

        })
      },
      getRouters() {
        this.$request({
          method: 'post',
          url: '/api/routers',
          data: {
            ...this.user
          }
        }).then(data => {
          routes[1].children.push({
            path: '/es6',
            component: resolve => require(['@/views/es6/index.vue'], resolve),
            children: [{
                  path: 'module-p1',
                  component: resolve => require(['@/views/es6/my-module/person.vue'], resolve),
                },{
                  path: 'module-p2',
                  component: resolve => require(['@/views/es6/my-module/person2.vue'], resolve),
                }]
            })
          this.$router.addRoutes(routes)
          this.$router.push('/es6')
        })
      }
    }
  }
</script>

<style scoped>

</style>