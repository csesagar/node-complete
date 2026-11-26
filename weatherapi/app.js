let express = require("express"); // import the express
let request = require("request");
let app = express(); // here we are making object of the express and from there we are getting access of there methods
let dotenv = require("dotenv"); /// get the value from the env file
let port = process.env.PORT || 7660;

app.use(express.static(__dirname + "/public"));
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/weather", (req, res) => {
  let city = req.query.city ? req.query.city : "Delhi";
  let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
  // calling api
  request(url, (err, response) => {
    // request used to call third party api
    if (err) throw err;
    //res.send(response.body)
    const output = JSON.parse(response.body); // convert it in json format
    res.render("index", { title: "Weather App", result: output });
    // res.send(response.body)
  });
});

//default
app.get("/", (req, res) => {
  res.send("Hii From Express");
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Running on port ${port}`);
});