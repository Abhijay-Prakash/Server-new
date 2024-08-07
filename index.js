const express=require('express');
const app=express();
const cors=require('cors');

app.use(express.json());
app.use(cors());

const courses =[
    {id: 1, name: 'course1'},
    {id: 2, name : 'course2'},
    {id: 3, name: 'course3'} 
];


app.get('/', (req,res) => {
    res.send("Hello Guys");
});

app.get('/api/testing' , (req,res) => {
    res.send(courses);
})

app.post('/api/testing/putdata', (req,res) => {
    try{
        const course ={
            id: courses.length + 1,
            name: req.body.name
        };
        courses.push(course);
        res.send(course);
    }catch(e){
        res.status(500).json({message:"Error"});
    }
});

const port=process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));