import express from 'express';
import cors from 'cors'
import 'dotenv/config';



const app = express()

const port = process.env.PORT || 3000 // in case it doesnt get it from env 


//using cors middleware
app.use(cors())

app.get('/', (req,res)=>{
    res.send("you are at home page")
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id":0,
            "value": "joke1",
            "content": "this is joke1"
        },
        {
            "id":1,
            "value": "joke2",
            "content": "this is joke2" 
        },
        {
            "id":2,
            "value": "joke3",
            "content": "this is joke 3"
        }
    ];
    res.send(jokes);
})

app.listen( port, ()=>{
    console.log(`your server is running  at port ${port}`)
})

