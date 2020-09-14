const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const transport = require('./transporter');


const publicPath = path.join(__dirname, "/", "build");

const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(publicPath));



app.get('/connection', (req, res) => {
    res.json({ msg: "backend is connected" });
})

app.use('/email', (req, res) => {
        let mail = JSON.parse(req.body.data)

        async function main() {
            let info = await transport.sendMail({
                from: process.env.MAIL_FROM,
                to: process.env.MAIL_TO,
                subject: `Wiadomość ze strony o tytule: ${mail.title}`,
                text: `${mail.msg}
                
                Autor: ${mail.author}`,
            })
            res.json({ sended: true })
        }

        main().catch(console.error)
        
    })




app.listen(port, () => console.log(`Listening on port ${port}`));


