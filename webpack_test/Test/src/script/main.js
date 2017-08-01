/**
 * Created by ligang on 17/6/1.
 */

import {a} from './util';
import '../style/main.css';
import fenfei from '../images/fenfei.jpg';

function main() {
    a();
    console.log('main');

    let avatar = new Image();
    avatar.src = fenfei;
    document.body.appendChild(avatar);
}

main();