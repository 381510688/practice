const Mock = require('mockjs')
const formatDate = require('../util/formatDate.js')

const Random = Mock.Random

const template = {
  "content|3": [{
    "key|+1": ["allow", "reject", "unknown"],
    "name|+1": ["允许", "拒绝", "未知"],
    "value|8": [{
      // "key|+10800000": 1508083200000,
      "key|+1": new Array(8).fill(1508083200000).map((item, index, ary) => item + index * 10800000),
      // "name": "@time('@key', 'hh:mm')",
      "name": function() {
        return formatDate.format.call(new Date(this.key), 'yyyy-MM-dd hh:mm')
      },
      "value": "@integer(10, 100)"
    }]
  }]
}

module.exports.data = Mock.mock(template)

