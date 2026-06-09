const fs = require('fs')
const pdf = require('pdf-parse')

const filePath = './DT20246313020 (2).pdf'

const dataBuffer = fs.readFileSync(filePath)

const parsePdf = (typeof pdf === 'function') ? pdf : (pdf && pdf.default) ? pdf.default : null

if (!parsePdf) {
    console.error('Unable to load pdf parser')
    process.exit(1)
}

parsePdf(dataBuffer).then(function (data) {
    fs.writeFileSync('resume_text.txt', data.text)
    console.log('Extracted text written to resume_text.txt')
}).catch(err => {
    console.error('Error parsing PDF:', err)
    process.exit(1)
})
