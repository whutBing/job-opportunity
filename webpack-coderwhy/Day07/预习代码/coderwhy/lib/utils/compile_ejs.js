const ejs = require("ejs");
const path = require("path");

const compileEjs = (tempName, data) => {
  return new Promise((resolve, reject) => {
    // 1.获取到要编译模板的路径
    const tempPosition = `../template/${tempName}`;
    const tempPath = path.resolve(__dirname, tempPosition);

    // 2.对文件进行编译
    ejs.renderFile(tempPath, data, (err, result) => {
      if (err) {
        console.log(err);
        reject(err)
      } else {
        resolve(result)
      }
    });
  });
};

module.exports = compileEjs;
