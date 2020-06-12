import * as bodyparser from 'body-parser';
import * as express from 'express'
import uploadAzure from './uploadAzure';

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
})

app.post('/', uploadAzure.single('avatar'), (req, res) => {
    if (!req.file) {
        res.send('Erro ao fazer upload do arquivo!');
    } else {
        res.send('Arquivo enviado com sucesso!');
    }
})

app.listen(3000, function () {
    console.log('listening on port 3000!');
});