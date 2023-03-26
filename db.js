const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://svivek:sita@cluster1.is5oxku.mongodb.net/authlecture?retryWrites=true&w=majority")



module.exports = {
    connection
}