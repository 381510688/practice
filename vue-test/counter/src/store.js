/**
 * Created by ligang on 16/12/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 最好提前在你的 store 中初始化好所有所需属性
const state = {
    count: 0
};

// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
// 并且它会接受 state 作为第一个参数
// mutation 必须是同步函数
const mutations = {
    increment: state => state.count++,
    decrement: state => state.count--
};

// Action 类似于 mutation
// Action 提交的是 mutation，而不是直接变更状态
// Action 可以包含任意异步操作
// Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
const actions = {
    increment: (context) => context.commit('increment'),
    decrement: ({commit}) => commit('decrement'),
    incrementIfOdd: ({commit, state}) => {
        if((state.count + 1) % 2 === 0){
            commit('increment');
        }
    },
    incrementAsync: ({commit}) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment');
                resolve();
            }, 1000)
        })
    }
};

// getters
const getter = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
};

export default new Vuex.Store({
    state,
    getter,
    actions,
    mutations
});