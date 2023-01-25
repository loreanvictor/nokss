import shell from 'shelljs'
import chalk from 'chalk'


const size = file => {
  shell.exec(`brotli -f ${file} -o ${file}.br`)
  const { stdout } = shell.exec(`wc -c ${file}.br`, { silent: true })
  const bytes = parseInt(stdout.trim().split(' ')[0])
  return bytes / 1024
}

const display = size => (
  size < 4 ? chalk.greenBright.bold(`${size.toFixed(2)}kb`)
  : size < 8 ? chalk.yellowBright.bold(`${size.toFixed(2)}kb`)
  : chalk.redBright.bold(`${size.toFixed(2)}kb`)
)
const pad = str => chalk.hex('#FAECD6')(str) + ' ' + chalk.hex('#473C33')(str.padEnd(48, '.').substring(str.length))
const log = (file, size) => console.log(`📦 ${pad(file)} ${display(size)}`)


const files = ['dist/nokss.css']
shell.ls('dist/bundles/*.css').forEach(file => files.push(file))

files
  .map(file => ({ file, size: size(file) }))
  .sort((a, b) => a.size - b.size)
  .forEach(({ file, size }) => log(file, size))
