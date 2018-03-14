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
                :data="data"
                :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: '',
    data() {
      return {
        fileList: [],
        data: {
          name: 'ligang',
          age: 28
        }
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

      uploadFiles({uploadFiles, data, action, success, error}) {
        let form = new FormData()
        // 文件对象
        uploadFiles.map(file => form.append("file", file.raw))
        // 附件参数
        for (let key in data) {
          form.append(key, data[key])
        }
        let xhr = new XMLHttpRequest()
        // 异步请求
        xhr.open("post", action, true)
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
              success && success(xhr.responseText)
            } else {
              error && error(xhr.status)
            }
          }
        }
        xhr.send(form)
      },

      submitUpload() {
        console.log(this.$refs.upload)
        let {uploadFiles, action, data} = this.$refs.upload
        this.uploadFiles({
          uploadFiles,
          action,
          data,
          success: (response) => console.log('成功了', response),
          error: (error) => console.log('失败了', error)
        })
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
