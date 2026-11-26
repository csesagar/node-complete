let express = require("express"); // import the express
let axios = require('axios')    // way to call api 
let redis = require('redis');
let app = express(); // here we are making object of the express and from there we are getting access of there methods
let port = process.env.PORT || 7660;


let client = redis.createClient({
    host:'localhost',
    port:6379
})

//default
app.get("/", (req, res) => {
  res.send("Hii From Express");
});

app.get('/data',(req,res) => {
    let userInput = req.query.country.trim();
    userInput = userInput?userInput:'India';
    const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${userInput}`;
    //check data in redis
    return client.get(userInput,function(err,result){
        //if data is in redis
        if(result){
            const output = JSON.parse(result);
            res.send(output)
        }else{
            // as data is not a part of redis call api 
            // get the data save in db for next time
            axios.get(url)
                .then((response) => {
                    //save the response in the redis for next time
                    const output = response.data
                    client.setex(userInput,3600,JSON.stringify({source:'Redis Cache',output}))
                    //for first time return the data
                    res.send({source:'API Response',output})
                })
        }
    })
})

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Running on port ${port}`);
});