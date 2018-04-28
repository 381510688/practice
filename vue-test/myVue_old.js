/**
 * Created by ligang on 2018/4/26.
 */

function MyVue(options) {
  let {el, data} = options
  this._el = el
  this._data = (typeof data === 'function') ? data() : data

  // 代理this._data[prop] 到 this[prop]
  Object.keys(data).forEach(key => {
    proxy(this, '_data', key)
  })

  // new Watcher(this, this.render)

  observe(data)

  // 编译
  // new Compile(el, this)
}

// 数据劫持 设置set、get
function observe(data) {
  let ob
  // 防止重复创建Observer实例
  if(data.hasOwnProperty('__ob__') && data['__ob__'] instanceof Observer) {
    ob = data['__ob__']
  } else {
    ob = new Observer(data)
  }
  return ob
}


function Observer(data) {
  this.dep = new Dep()
  this.walk(data)
}
Observer.prototype.walk = function(data) {
  const keys = Object.keys(obj)
  /*walk方法会遍历对象的每一个属性进行defineReactive绑定*/
  for (let i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]])
  }
}


function Watcher(vm, cb) {
  const self = this
  Dep.target = this
  this.vm = vm

  this.addDep = function(dep) {
    dep.add(self)
  }
  this.update = function() {
    cb()
  }
  // Dep.target = null
}

function defineReactive(obj, key, value) {
  const dep = new Dep()

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    set(newVal) {
      if(value === newVal) {
        return
      }
      value = newVal
      // 触发修改Dom操作（观察者模式中的发布者）
      dep.notify()
    },
    get() {
      // 收集依赖
      dep.depend()
      return value
    }
  })
}


function Dep() {
  // Watcher实例数组
  this.subs = []
  this.target = null;
}
Dep.prototype.depend = function() {
  const self = this
  if(Dep.target) {
    Dep.target.addDep(self)
  }
}
Dep.prototype.add = function(watcher) {
  this.subs.push(watcher)
}

Dep.prototype.notify = function() {
  for(let watcher of this.subs) {
    watcher.update()
  }
}





function Compile(el, vm) {
  vm.$el = document.querySelector(el)
  let fragment = document.createDocumentFragment()

  while (child = vm.$el.firstChild) {
    fragment.appendChild(child);    // 此时将el中的内容放入内存中
  }
  // 对el里面的内容进行替换
  function replace(frag) {
    Array.from(frag.childNodes).forEach(node => {
      let txt = node.textContent;
      let reg = /\{\{(.*?)\}\}/g;   // 正则匹配{{}}

      if (node.nodeType === 3 && reg.test(txt)) { // 即是文本节点又有大括号的情况{{}}
        let arr = RegExp.$1.split('.');
        let val = vm;
        arr.forEach(key => {
          val = val[key];     // 如this.a.b
        });
        // 给Watcher再添加两个参数，用来取新的值(newVal)给回调函数传参
        new Watcher(vm, RegExp.$1, newVal => {
          // 用trim方法去除一下首尾空格
          node.textContent = txt.replace(reg, newVal).trim();
        });
      }
      if (node.nodeType === 1) {  // 元素节点
        let nodeAttr = node.attributes; // 获取dom上的所有属性,是个类数组
        Array.from(nodeAttr).forEach(attr => {
          let name = attr.name;   // v-model  type
          let exp = attr.value;   // c        text
          if (name.includes('v-')){
            node.value = vm[exp];   // this.c 为 2
          }
          // 监听变化
          new Watcher(vm, exp, function(newVal) {
            node.value = newVal;   // 当watcher触发时会自动将内容放进输入框中
          });

          node.addEventListener('input', e => {
            let newVal = e.target.value;
            // 相当于给this.c赋了一个新值
            // 而值的改变会调用set，set中又会调用notify，notify中调用watcher的update方法实现了更新
            vm[exp] = newVal;
          });
        });
      }
      // 如果还有子节点，继续递归replace
      if (node.childNodes && node.childNodes.length) {
        replace(node);
      }
    });
  }

  replace(fragment);  // 替换内容

  vm.$el.appendChild(fragment);   // 再将文档碎片放入el中
}

// 代理this._data[prop] 到 this[prop]
function proxy(target, sourceKey, key) {
  Object.defineProperty(target, key, {
    enumerable: true,
    configurable: true,
    set(val) {
      // this._data[prop] = this[prop]
      target[sourceKey][key] = val
    },
    get() {
      return target[sourceKey][key]
    }
  })
}