import express, {urlencoded} from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const app = express();
const port = 3000;
const dirName = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/submission', (req, res) => {
    let name = req.body["usersname"];
    res.render('submit.ejs',{
        Name: name,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})