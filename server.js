const express = require('express')
const app = express()
const PORT = 5000

app.use(express.json())

app.get("/", (req,res)=> {
    return res.send(`Go to "/signup" to cerate the data`)
})

const user = [
    {id:1,username:"Koushik",email:"koushik@example.com",password:"koushik123",dateOfbirth:"25/06/2006"},
    {id:2,username:"Kushal",email:"kushal@example.com",password:"kushal123",dateOfbirth:"17/05/2006"},
    {id:3,username:"keshore",email:"keshore@example.com",password:"keshore123",dateOfbirth:"5/04/2006"}
]

app.post('/signup',(req,res)=> {
    const email = req.query.email
    const password = req.query.password
    const dateOfbirth = req.query.dateOfbirth

    const users = user.filter((i)=> i.email === email)

    if(email){
        return res.send(`No user found in email: ${email}`)
    }

    if(password){
        return res.send(`Please enter the password`)
    }

    if (password<=8){
        return res.send('Minimum length should be 8 characters')
    }
    else{
        return res.send('Password created successfully')
    }
})




app.listen(PORT,()=> {
    console.log(`Server is running on PORT ${PORT}`)
})