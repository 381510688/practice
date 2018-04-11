<template>
    <div>
        <el-tree
                :props="props"
                :load="loadNode"
                lazy
                show-checkbox>
        </el-tree>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          props: {
            label: 'name',
            children: 'children'
          }
        }
      },
      methods: {
        loadNode (node, resolve) {
          this.$request({
            url: '/api/tree'
          }).then(data => {
            return resolve(data)
          })
        }
      },
      created() {
      }
    }
</script>