import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('I hate Jacob Fielder')
})

app.listen(3000)