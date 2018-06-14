const http = require('http');
const fs = require('fs');
const path = require('path');
const util = require('util');
const buffer = require('buffer');

module.exports = {
    getHtml: () => {
        http.get('http://www.bootcss.com/', (res) => {
            const { statusCode } = res;
            const contentType = res.headers['content-type'];

            let error;
            if (statusCode !== 200) {
                error = new Error('请求失败。\n' +
                    `状态码: ${statusCode}`);
            } else if (!/^text\/html/.test(contentType)) {
                error = new Error('无效的 content-type.\n' +
                    `期望 text/html 但获取的是 ${contentType}`);
            }
            if (error) {
                console.error(error.message);
                // 消耗响应数据以释放内存
                res.resume();
                return;
            }

            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', async () => {

                // await fs.open(path.join(__dirname + '/text.html'), 'r',async (err, fd) => {
                //     if (err) {
                //         if (err.code === 'ENOENT') {
                //             await fs.writeFile(path.join(__dirname + '/text.html'), rawData, { encoding: 'utf-8' }, err => {
                //                 console.log(err);
                //             })
                //             return;
                //         }

                //     }else{
                //         let buf = Buffer.alloc(rawData.length);
                //         console.log(fd)
                //         fs.read(fd,buf,0,rawData.length,0,(err,bytesRead,buffer)=>{
                //             console.log(buffer.toString("utf-8"))
                //         })

                //     }
                // });

                var patt1 = new RegExp('\\w', 'g'); // 有转义作为正则表达式处理


            });
        }).on('error', (e) => {
            console.error(`错误: ${e.message}`);
        });
    }
}