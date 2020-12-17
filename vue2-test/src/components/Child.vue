<template>
  <!-- <button>点击</button> -->
  <div>
    <el-dialog
      title="Child Component"
      close-on-click-modal	
      :modal="false"
      :visible.sync="dialogVisible"
      custom-class="dialog"
      >
      <button>Dialog 点击</button>
    </el-dialog>
    <el-button @click="dialogVisible = true">打开弹窗</el-button>
  </div>
</template>
<script>
export default {
  name: 'Child',
  data () {
    return {
      dialogVisible: false
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