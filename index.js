const program = require("commander")
const chalk = require("chalk")
const path = require("path")
const fs = require("fs")
// node index --version
program.version(require("./package.json").version)

// node index --help
program.option("-d, --dir <dirpath>", "set the output diretory, default to .")

program
    .command("build [options]")
    .description("build for production")
    .action((env, options) => {
        const { dir } = options.parent
        console.log(chalk.green(`[INFO] >>> build start ${dir || "."}...`))
    })

program
    .command("dev [options]")
    .description("start the bundler in watch mode")
    .action((env, options) => {
        console.log(chalk.green("[INFO] >>> dev start..."))
        console.log(env, options)
    })

program
    .command("project [options]")
    .description("create new project")
    .action((env, options) => {
        const { args, dir } = options.parent
        console.log(args, dir)
        if (args.length === 0) {
            console.error(chalk.green("[ERROR] missing project name: lais project [name]"))
            process.exit(1)
        }
        const dirpath = path.resolve(dir || ".") + "/" + args[0]
        if (fs.existsSync(dirpath)) {
            return
        }

        fs.mkdirSync(dirpath)
        ["package.json", "index.js", "index.html", "App.vue", ".babelrc", ".gitignore"].forEach((v) => {
            const src = __dirname + `/template/${v}`
            if (fs.existsSync(src)) {
                let content = fs.readFileSync(src).toString()
                content = content.replace(/{{name}}/g, args[0])
                fs.writeFileSync(`${dirpath}/${v}`, content)
            }
            // chalk.green("[ERROR] missing project name: lais project [name]")
        })
        ["assets", "pages"].forEach((v) => {
            fs.mkdirSync(`${dirpath}/${v}`)
        })
        console.log(chalk.green(`[INFO] >>> create ${arg[0]} project start...`))
    })

program
    .command("page [options]")
    .description("create new page")
    .action((env, options) => {
        console.log(chalk.green("[INFO] >>> create page start..."))
        console.log(env, options)
    })


program.parse(process.argv)