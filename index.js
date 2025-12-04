import express, {urlencoded} from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const blogs =[];

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

app.post('/start', (req, res) => {
    res.render('index.ejs');
});

app.post('/newBlog', (req, res) => {
        let tName = req.body["BlogName"];
        let tCont = req.body["BlogContent"];
        res.render('blog.ejs',{
        title: tName,
        content: tCont,
    });
        const newBlog = {
            title: tName,
            content: tCont,
            id: blogs.length + 1};
        blogs.push(newBlog);
});




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})