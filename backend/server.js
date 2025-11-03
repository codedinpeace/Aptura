const app = require('./src/app.js')

app.listen(process.env.PORT, ()=>{
    console.log("Server Started Successfully")
})