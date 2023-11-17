const { program } = require("commander");
const { createProjectAction, addComponentAction } = require("./actions");

const createCommand = () => {
  program
    .command("create <project> [others...]")
    .description("create project into a folder")
    .action(createProjectAction)

  program
    .command("addcpn <cpnname> [others...]")
    .description("add vue component, 例如 why addcpn HelloWorld -d src/components")
    .action((name) => {
      addComponentAction(name, program.dest || "src/components")
    })
};

module.exports = createCommand;
