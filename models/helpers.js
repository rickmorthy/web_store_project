const path = require('path');
const fs = require('fs');
const dir = path.join(path.dirname(process.mainModule.filename), 'media/carousel');
console.log(dir);

exports.getImages = new Promise((resolve,reject) => {
        fs.readdir(dir,(err,files) => {
            if(err){
                console.log('readdir helper experienced some problems');
            }else{
                resolve([files,dir]);
            }
        })
})
    




