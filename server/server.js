const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => res.send('hello'))

app.listen(8080, () => {console.log('server started on 8081')})