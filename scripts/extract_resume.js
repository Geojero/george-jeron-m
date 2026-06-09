const fs = require('fs')
const pdf = require('pdf-parse')

const filePath = './DT20246313020 (2).pdf'

const dataBuffer = fs.readFileSync(filePath)

pdf(dataBuffer).then(function (data) {
    // write full text
    fs.writeFileSync('resume_text.txt', data.text)
    console.log('Extracted text written to resume_text.txt')
}).catch(err => {
    console.error('Error parsing PDF:', err)
    process.exit(1)
})
