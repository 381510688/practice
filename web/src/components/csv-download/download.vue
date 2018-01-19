<!-- <a href="data:attachment/csv;charset=utf-8,ligang测试" download="1.txt">下载</a> -->
<template>
  <div @click="myDownLoad">
    <slot></slot>
  </div>
</template>

<script>
    import CSV from './csv'
    import browserProbe from './browserProbe'
    export default {
      name: 'csv-download',
      props: ['data'],
      data() {
        return {}
      },
      methods: {
        myDownLoad() {
          let content = CSV({...this.data})
          this.download('test.csv', content)
        },
        /**
         * 获取下载URL
         * @param text
         * @returns {*}
         * @private
         */
        _getDownloadUrl (text) {
          const BOM = '\uFEFF';
          // Add BOM to text for open in excel correctly
          if (window.Blob && window.URL && window.URL.createObjectURL) {
            const csvData = new Blob([BOM + text], { type: 'text/csv' });
            return URL.createObjectURL(csvData);
          } else {
            return 'data:attachment/csv;charset=utf-8,' + BOM + encodeURIComponent(text);
          }
        },

        /**
         * 下载
         * @param filename 文件名称
         * @param text 内容
         */
        download(filename, text) {
          if (browserProbe.has('ie') && browserProbe.has('ie') < 10) {
            // has module unable identify ie11 and Edge
            const oWin = window.top.open('about:blank', '_blank');
            oWin.document.charset = 'utf-8';
            oWin.document.write(text);
            oWin.document.close();
            oWin.document.execCommand('SaveAs', filename);
            oWin.close();
          } else if (browserProbe.has('ie') === 10 || browserProbe.isIE11() || browserProbe.isEdge()) {
            const BOM = '\uFEFF';
            const csvData = new Blob([BOM + text], { type: 'text/csv' });
            navigator.msSaveBlob(csvData, filename);
          } else {
            const link = document.createElement('a');
            link.download = filename;
            link.href = this._getDownloadUrl(text);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        }
      }
    }
</script>

