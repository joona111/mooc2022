const mongoose = require("mongoose")
const Blogi = require("./blogi")
mongoose.connect('mongodb+srv://joona:koira123@cluster0.q15ip.mongodb.net/testidb?retryWrites=true&w=majority')



    const blogi = new Blogi({name: "kyle",age:55})
    blogi.save()
    console.log(blogi)


