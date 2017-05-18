/**
 * Created by ligang on 17/5/10.
 */
window.onerror = function(messageOrEvent, source, lineno, colno, error) {
    console.log(messageOrEvent, source, lineno, colno, error);
    return true;    // 彻底忽略所有错误
};

JSON.parse('x');
console.log('hh');