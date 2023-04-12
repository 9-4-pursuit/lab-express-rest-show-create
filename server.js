const app = require("./app.js")
// this is the beginning of separating our concerns -- this is our first aspect where we are setting up our server

//CONFIGURE💡!
require("dotenv").config();

//Allows us to use our PORT
const PORT = process.env.PORT

//LISTEN 🎧!
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})