let express = require('express');   // import the express
let  app = express();  // here we are making object of the express and from there we are getting access of there methods 
let dotenv = require('dotenv');   /// get the value from the env file 
dotenv.config()
let port = process.env.PORT || 6700;

// default path 
app.get('/', (req,res)=>{     // when someone come to port number 6700
res.send('hi from express');
});
app.get('/test', (req,res)=>{     // when someone come to port number 6700
res.send('hi from testy');
});
app.listen(port,(err)=>{    // statrt the server with port number 
    if(err) throw err;
  console.log(`server is running on port ${port}`)
});    