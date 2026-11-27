let nodemailer = require('nodemailer');
let dotenv = require('dotenv');
dotenv.config();

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'csesagar55@gmail.com',
        pass:process.env.PASS
    }
})

let mailOption = {
    from:'csesagar55@gmail.com',
    to:'csesagar065@gmail.com',
    subject:'Sending email using nodeJs',
    text:'This is node April Batch'
}

transporter.sendMail(mailOption,(err,info) => {
    if(err) console.log(err);
    else{
        console.log(`Email sent: ${info.response}`)
    }
})