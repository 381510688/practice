function MyVue(options = {}) {
  this.$options = options
  let {el, data} = options
  this._data = typeof data === 'function' ? data() : data

  // 数据劫持
  var dep = observe(this._data)

  // 数据代理
  Object.keys(this._data).forEach(key => {
    proxy(this, '_data', key)
  })

  // 编译
  new Compile(el, this)

  // dep.notify();
}

function Observe(data) {
  let dep = new Dep();

  for(let key in data) {
    let val = data[key]
    observe(val);   // 递归继续向下找，实现深度的数据劫持
    Object.defineProperty(data, key, {
      configurable: true,
      get() {
        console.log(Dep.target, '...')
        Dep.target && dep.addSub(Dep.target);   // 将watcher添加到订阅事件中 [watcher]
        return val;
      },
      set(newVal) {
        if (val === newVal) return
        val = newVal;
        observe(newVal);
        dep.notify();   // 让所有watcher的update方法执行即可
      }
    })
  }
  return dep;
}

function observe(data) {
  // 如果不是对象的话就直接return掉
  // 防止递归溢出
  if (!data || typeof data !== 'object') return;
  return new Observe(data);
}

function Compile(el, vm) {
  vm.$el = document.querySelector(el)
  let fragment = document.createDocumentFragment()

  while(child = vm.$el.firstChild) {
    fragment.appendChild(child)
  }

  function replace(frag) {
    Array.from(frag.childNodes).forEach(node => {
      let txt = node.textContent
      let reg = /\{\{\s*([^}]+\S)\s*\}\}/g;   // 正则匹配{{}}


      if (node.nodeType === 3 && reg.test(txt)) { // 即是文本节点又有大括号的情况{{}}
        function replaceTxt() {
          node.textContent = txt.replace(reg, (matched, placeholder) => {
            new Watcher(vm, placeholder, replaceTxt);   // 监听变化，进行匹配替换内容

            return placeholder.split('.').reduce((val, key) => {
              return val[key];
            }, vm);
          });
        };
        // 替换
        replaceTxt();
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

    })
  }

  replace(fragment);  // 替换内容
  vm.$el.appendChild(fragment);   // 再将文档碎片放入el中
}


function Dep() {
  // 一个数组(存放函数的事件池)
  this.subs = []
  this.addSub = function(sub) {
    this.subs.push(sub);
  }
  this.notify = function() {
    // 绑定的方法，都有一个update方法
    this.subs.forEach(sub => sub.update());
  }
}

function Watcher(vm, exp, fn) {
  this.vm = vm;
  this.exp = exp;
  this.fn = fn

  Dep.target = this
  let arr = exp.split('.');
  let val = vm;
  arr.forEach(key => {
    val = val[key] // 如this.a.b
  })
  Dep.target = null;


  this.update = function() {
    let arr = this.exp.split('.');
    let val = this.vm;
    arr.forEach(key => {
      val = val[key];   // 通过get获取到新的值
    });
    this.fn(val);   // 将每次拿到的新值去替换{{}}的内容即可
  }
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