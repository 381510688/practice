<template>
    <div>
        <el-tree
                :props="props"
                :load="loadNode"
                lazy
                show-checkbox>
        </el-tree>
        <span>{{ary}}</span>
        <el-button @click="click">获取数组数据</el-button>


    </div>
</template>

<script>
    export default {
      data() {
        return {
          props: {
            label: 'name',
            children: 'children'
          },
          ary: {}
        }
      },
      methods: {
        loadNode (node, resolve) {
          if(node.level === 0) {
            this.$request({
              url: '/api/tree'
            }).then(data => {
              return resolve(data)
            })
          } else {
            this.$request({
              url: '/api/tree'
            }).then(data => {
              return resolve([])
            })
          }

        },
        click() {
          this.$set(this.ary, 'children', [])
          this.ary.children.push({name: 123})
        }
      },
      created() {
      }
    }
</script>
