let express = require('express');   // import the express
let  app = express();  // here we are making object of the express and from there we are getting access of there methods 
let dotenv = require('dotenv');   /// get the value from the env file 
dotenv.config()
let port = process.env.PORT || 6700;
let menu = [
    { name:'Category',link:'/category'},
    { name:'Products',link:'/products'}
]
let categoryRouter = require('./src/controller/categoryRouter');
let productRouter = require('./src/controller/productRouter');

let morgan = require('morgan');
let fs = require('fs');

// app.use(morgan('dev'));    // dev // common 

//middleware
app.use(morgan('common',{stream:fs.createWriteStream('./app.log')}))   // it will store the log in app.log 

// static file path
app.use(express.static(__dirname+'/public'))
// html file path
app.set('views','./src/view')
//view engine
app.set('view engine','ejs')

//default
app.get('/',(req,res) => {
   // res.send('Hii From Express')
   res.render('index',{title:'Home Page',menu})  // here we use render 
})



app.use('/category',categoryRouter);   // binding here categoryRouter with route    // it is type of custom middleware where u write logic apart from that 
app.use('/product',productRouter);   // binding here productRouter with route 

app.listen(port,(err)=>{    // statrt the server with port number 
    if(err) throw err;
  console.log(`server is running on port ${port}`)
}); 