const express = require('express')

const app = express()

const router = require('./routers/cseStudentRouter.js')
const cseStudentAcademicrouter = require('./routers/cseStudentAcademicRouter.js')
const cseFacultyRouter = require('./routers/cseFacultyRouter.js')
const credentialRouter = require('./routers/credentialRouter.js')
const triggerRouter = require('./routers/triggerRouter.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/admin", router);
app.use("/faculty", cseStudentAcademicrouter);
app.use("/admin/faculty", cseFacultyRouter);
app.use("/credential", credentialRouter)
app.use("/authority", triggerRouter)

app.get('/', (req, res) => {
    res.json({message: 'Hello from api'})
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
})