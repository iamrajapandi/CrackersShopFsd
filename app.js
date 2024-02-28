const express=require('express');

const app=express();  
const port=5500;
app.use(express.static('public'));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    
    res.render('index');
    
});
app.get('/index',(req,res)=>{
    
    res.render('index');
    
});
app.get('/terms',(req,res)=>{
    
    res.render('terms');
    
});
app.get('/list',(req,res)=>{
    
    res.render('list');
    
});
app.get('/login',(req,res)=>{
    
    res.render('login');
    
});
app.get('/signup',(req,res)=>{
    
    res.render('signup');
    
});
app.get('/sony',(req,res)=>{
    
    res.render('sony');
    
});
app.get('/anil',(req,res)=>{
    
    res.render('anil');
    
});
app.get('/kannan',(req,res)=>{
    
    res.render('kannan');
    
});
app.get('/standard',(req,res)=>{
    
    res.render('standard');
    
});

app.listen(port,() =>{
    console.log(`Listening to port ${port}.`);
});

