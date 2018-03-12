<template>
    <div>
      <el-form :model="aForm" :rules="aRules" ref="aForm">
        <el-form-item label="名称" prop="name">
          <el-input v-model="aForm.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="aForm.age"></el-input>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    name: 'A',
    data() {
      return {
        aForm: {
          name: '',
          age: ''
        },
        aRules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          age: [
            { required: true, message: '请输入年龄', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      validateForm() {
        let flag = false
//        this.$refs['aForm'].validate((valid) => {
//          flag = valid
//        }

        this.$refs['aForm'].validate().then(val => {
          flag = val
          console.log('success', val)
        }, val => {
          flag = val
          console.log('error', val)
        })

//        try {
//          flag = await this.$refs['aForm'].validate()
//        } catch(e) {
//          flag = e
//        }
        return flag
      }
    }
  }
</script>
