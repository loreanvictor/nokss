import shell from 'shelljs'
import { basename } from 'path'


shell.rm('-rf', 'dist/bundles')
shell.ls('src/bundles/*.css').forEach(file => {
  if (!basename(file).startsWith('_')) {
    shell.exec(`postcss ${file} -o dist/bundles/${basename(file)} --no-map`)
  }
})
