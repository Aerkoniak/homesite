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
        console.log(mail);

        async function main() {
            let info = await transport.sendMail({
                from: `<kontakt@lunnier.com>`,
                to: `lunnier@gmail.com`,
                subject: `Wiadomość ze strony o tytule: ${mail.title}`,
                text: `${mail.msg}
                
                Autor: ${mail.author}`,
            })
            console.log(`Wiadomość wysłana`);
            res.json({ sended: true })
        }

        main().catch(console.error)
        
    })




app.listen(port, () => console.log(`Listening on port ${port}`));


