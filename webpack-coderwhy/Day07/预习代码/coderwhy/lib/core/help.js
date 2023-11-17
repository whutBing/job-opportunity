const { program } = require('commander')

const helpOptions = () => {
  program.option("-w --why", "a why cli");
  program.option(
    "-d --dest <dest>",
    "a destination folder, 例如: -d /src/components"
  );

  // 增加额外的提示信息
  program.on("--help", function () {
    console.log("");
    console.log("Others:");
    console.log("  other options");
  });
};

module.exports = helpOptions
