const app = require("./app.js")

require("dotenv").config()
let PORT = process.env.PORT 

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}.`)
})

