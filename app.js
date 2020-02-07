const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use((req, res, next) => {
    let rexp = /\.jpg|\.png+$/i
    if (!req.url.match(rexp)) {
        res.sendStatus(403)
    }

    next()
})
app.use(express.static("E:/Music/Main/"))

app.listen(port, () => console.log(`App listening on port ${port}.`))