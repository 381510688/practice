<template>
  <div>
    <p>
      <el-form :model="data" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
        <el-form-item
          prop="email"
          label="邮箱"
          :rules="[{ required: true, message: '请输入邮箱地址', trigger: 'blur' },{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }]">
          <el-input v-model="data.email"></el-input>
        </el-form-item>
      </el-form>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'default-prop',
    props: {
      data: {
        type: Object,
        default: function() {
          return {
            name: '',
            age: 18
          }
        }
      }
    }
  }
</script>
