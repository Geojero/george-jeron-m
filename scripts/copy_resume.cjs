const fs = require('fs')
const path = require('path')

const src = path.resolve(__dirname, '..', 'DT20246313020 (2).pdf')
const destDir = path.resolve(__dirname, '..', 'public')
const dest = path.join(destDir, 'resume.pdf')

if (!fs.existsSync(src)) {
    console.error('Source PDF not found:', src)
    process.exit(1)
}
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true })

fs.copyFileSync(src, dest)
console.log('Copied', src, '=>', dest)
