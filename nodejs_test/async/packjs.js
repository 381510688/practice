/**
 * Created by ligang on 17/3/17.
 */
import fs from "fs";

async function readFile(filepath) {
    return await new Promise((resolve, reject) => {
        fs.stat(filepath, (error) => {
            if(error) {
                return reject("文件不存在！");
            }
            let content = fs.readFileSync(filepath, "utf8");
            return resolve(content);
        })
    })
}

readFile(__filename + "fef").then((content) => {
    console.log(content)
}).catch((error) => {
    console.error(error);
});
