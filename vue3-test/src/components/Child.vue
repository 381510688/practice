<template>
  <div>
    <el-dialog
      title="Child Component"
      v-model="dialogVisible"
      :close-on-click-modal="false"
      custom-class="dialog"
      append-to-body
      >
      <button>Dialog 点击</button>
    </el-dialog>
    <el-button @click="dialogVisible = !dialogVisible">打开弹窗</el-button>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
export default {
  name: 'Child',
  setup () {
    const dialogVisible = ref(false)
    onMounted(() => {

    })
    return {
      dialogVisible
    }
  }
}
</script>
<style>
.dialog {
  margin-top: 35vh !important;
  width: 300px;
  height: 130px;
}
</style>