/**
 * Created by ligang on 17/5/11.
 */

// 计算奖金。绩效为S的发放4倍工资，绩效为A的发放3倍工资，绩效为B的发放2倍工资。

/* 常规模式 */
function cul(salary, grade) {
    var sum;
    switch(grade) {
        case 'S':
            sum = salary * 4;
            break;
        case 'A':
            sum = salary * 3;
            break;
        case 'B':
            sum = salary * 2;
            break;
    }
    return sum;
}

/* 策略方式 */
var strategies = {
    'S': function(salary) {
        return salary * 4;
    },
    'A': function(salary) {
        return salary * 3;
    },
    'B': function(salary) {
        return salary * 2;
    }
};
var cul2 = function(salary, grade) {
    return strategies[grade](salary);
};
console.log(cul2(10000, 'A'));