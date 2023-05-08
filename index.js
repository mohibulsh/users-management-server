const express =require('express')
const app = express()
const port =process.env.PORT || 5000;
const cors =require('cors')
//midle ware
app.use(cors())
app.use(express.json())
const users =[
    {id:1, name:'sbila', email:'sabila@gmail.com'},
    {id:2, name:'saban', email:'sabana@gmail.com'},
    {id:3, name:'dipika', email:'dipika@gmail.com'},
    {id:4, name:'bobita', email:'bobita@gmail.com'}
]
app.get('/users',(req,res)=>{
    res.send(users)
})
app.get('/',(req,res)=>{
    res.send('management server is running')
})
app.post('/users',(req,res)=>{
    console.log('post api hitting')
    const newUser = req.body;
    console.log(newUser)
    newUser.id=users.length +1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port,()=>{
    console.log(`server is runnig on ${port}`)
})