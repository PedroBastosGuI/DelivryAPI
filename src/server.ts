import express, { response } from "express"
import {routes} from './routes/routes'

const app = express()

app.use(express.json())

app.use(routes)

app.get("/", (req, res) => {
    return res.json({
        "message":"oie"
    })
})

app.listen(3000)