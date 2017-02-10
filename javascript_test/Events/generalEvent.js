/**
 * Created by ligang on 16/12/25.
 */
function Event() {
    // this._events = Object.create(null);  // 存储所有事件
}
Event.prototype = {
    constructor: Event,
    // 监听事件 key：事件类型，listener：事件处理函数（可以同时绑定多个不同类型事件）
    on: function (event, fn) {

        if(!this._events){
            this._events = Object.create(null);
        }

        var eventTarget = this;
        (eventTarget._events[event] || (eventTarget._events[event] = [])).push(fn);
        return eventTarget;
    },
    once: function (event, fn) {
        var eventTarget = this;
        function on() {
            eventTarget.off(event, on);
            fn.apply(eventTarget, arguments);
        }
        on.fn = fn;
        eventTarget.on(event, on);
        return eventTarget
    },
    // 只能移除指定类型事件（一个）
    off: function (event, fn) {
        var eventTarget = this;
        // all
        if (!arguments.length) {
            eventTarget._events = Object.create(null);
            return eventTarget
        }
        // specific event
        var cbs = eventTarget._events[event];
        if (!cbs) {
            return eventTarget
        }
        if (arguments.length === 1) {
            eventTarget._events[event] = null;
            return eventTarget
        }
        // specific handler
        var cb;
        var i = cbs.length;
        while (i--) {
            cb = cbs[i];
            if (cb === fn || cb.fn === fn) {
                cbs.splice(i, 1);
                break
            }
        }
        return eventTarget
    },
    // 触发对应类型的事件，私有，外部不允许调用（为达到统一出口目的）
    emit: function (event) {
        var eventTarget = this;
        var cbs = eventTarget._events[event];
        if (cbs) {
            cbs = cbs.length > 1 ? Array.prototype.slice.call(cbs) : cbs;
            var args = Array.prototype.slice.call(arguments, 1);
            for (var i = 0, l = cbs.length; i < l; i++) {
                cbs[i].apply(eventTarget, args);
            }
        }
        return eventTarget
    }
};
