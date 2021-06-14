require('dotenv').config()

const express = require('express')
const app = express()
const db = require('./database/database')
const roomModel = require('./database/models/roomModel')

db.then(() => console.log('connected')).catch(err => console.error(err))

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.get('/codenamesadd/:room', async (req, res) => {
    var room = req.params.room
    var answers = req.query.answers

    if (answers) {
        var findRoom = await roomModel.findOne({
            name: room
        })

        if (findRoom) return res.sendStatus(409)

        var newRoom = await roomModel.create({
            name: room,
            answers: answers
        })
        await newRoom.save()

        return res.send(`Room: ${room}\nAnswers: ${answers}`)

    }
})

app.get('/codenames/:room', async (req, res) => {
    var room = req.params.room

    if (!room) return res.sendStatus(204)

    var findRoom = await roomModel.findOne({
        name: room
    })

    if (findRoom) return res.send(findRoom.answers)
})

app.listen(process.env.PORT, console.log('oi'))