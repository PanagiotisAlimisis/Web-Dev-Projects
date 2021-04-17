const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const port=8080;
const app=express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


app.use(express.static('website'));

const projectData={};

const server=app.listen(port, () => {
    console.log(`running on localhost ${port}`);
});

app.get('/projectData', (req, res) => {
    // console.log("GET request");
    // console.log(projectData.temp);
    res.status(200).send(projectData);
});

app.post('/projectData',  (req, res) => {
    // console.log('POST received');
    projectData['city'] = req.body.city;
    projectData['temp'] = req.body.temp;
    projectData['date'] = req.body.date;
    projectData['content'] = req.body.content;
   
    res.status(200).send({
        sucess: true,
        message: "Data saved successfully",
        data: projectData
    });
    console.log(projectData);
});