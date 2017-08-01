/**
 * Created by ligang on 17/6/1.
 */

function a() {
    let strongDom = document.createElement('strong');
    strongDom.innerHTML = 'A';
    strongDom.classList.add('red');
    document.body.append(strongDom);

    console.log('a');
}

function b() {
    let strongDom = document.createElement('strong');
    strongDom.innerHTML = 'B';
    strongDom.classList.add('red');
    document.body.append(strongDom);

    console.log('b');
}

export {
    a,
    b
};