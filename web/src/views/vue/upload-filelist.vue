<template>
    <div>
        <el-upload
                class="upload-demo"
                multiple
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        fileList: []
      }
    },
    methods: {
      handleChange (file, fileList) {
        for(let i = 0, len = fileList.length; i < len; i++) {
          if(fileList[i].name === 'height-inherit.jpg') {
            fileList.splice(i, 1)
          }
        }
        this.fileList = fileList
        console.log(file, fileList);
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>

<style scoped>

</style>
