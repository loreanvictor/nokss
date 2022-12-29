import nunjucks from 'nunjucks'
import markdown from 'nunjucks-markdown'
import highlight from 'highlightjs'
import { marked } from 'marked'
import { copy } from 'fs-extra'
import { writeFile } from 'fs/promises'


export async function build() {
  await copy('./logo-dark.svg', './dist/assets/logo-dark.svg')
  await copy('./logo-light.svg', './dist/assets/logo-light.svg')
  await copy('./docs/assets/', './dist/assets/')


  const env = nunjucks.configure()
  markdown.register(env, marked)
  marked.setOptions({
    highlight: (code) => highlight.highlightAuto(code).value,
  })

  nunjucks.render('./docs/index.html', (err, html) => {
    if (err) {
      console.error(err)
    } else {
      writeFile('./dist/index.html', html)
    }
  })
}


import * as url from 'node:url'

if (import.meta.url.startsWith('file:')) {
  const modulePath = url.fileURLToPath(import.meta.url);
  if (process.argv[1] === modulePath) {
    build()
  }
}