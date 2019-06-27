const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const isNumber = require('is-number')

const app = express()
const router = express.Router()

const PORT = 3000

app.use(bodyParser.json())
app.use('/api', router)

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.post('/sum', (req, res) => {
    const { fnumber, snumber } = req.body;

    if(isNumber(fnumber) && isNumber(snumber)) {
        const total = fnumber + snumber
        res.send({ result: total })
    } else {
        res.send({ error: 'Validation issue' })
    }
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))

