/**
 * Created by ligang on 17/7/8.
 */

const Router = {
    states: {},
    state(hash, conf) {
        this.states[hash] = conf;
    },
    fire(match) {
        let routerReg = new RegExp(match, 'g');
        for(let state in this.states) {
            if(routerReg.test(state)) {
                this.states[state].controller();
                break;
            }
        }
        return this;
    }
};

Router.state('#index', {
    controller:  () => {
        console.log('_loadIndex()');
    }
});
Router.state('#detail', {
    controller:  () => {
        console.log('_loadDetail()');
    }
});

window.addEventListener("hashchange", (event) => {
    // console.log(event.newURL, event.oldURL);
    Router.fire(location.hash);
}, false);