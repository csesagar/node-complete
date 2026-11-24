let express = require('express');   // import the express

let categoryRouter = express.Router();  

const category = [
    {
        "id":1,
        "category": "Fashion",
        "thumb":"https://i.ibb.co/56VP0Fn/cloths.jpg"
    },
    {
        "id":2,
        "category":"Electronics",
        "thumb":"https://i.ibb.co/pw5Wtdx/appliances.jpg"
    },
    {
        "id":3,
        "category":"Essentials",
        "thumb":"https://i.ibb.co/0cw34xm/essentials.jpg"
    },
    {
        "id":4,
        "category": "Footwear",
        "thumb":"https://i.ibb.co/r3SZq8S/footware.jpg"
    }
]
// let menu = [
//     { name:'Category',link:'/category'},
//     { name:'Products',link:'/products'}
// ]
function router(menu){     // it will take data from app.js 
categoryRouter.route('/').get((req,res)=>{     // here we define it for categoryRouter
    // res.send(category)
    res.render('category',{title:'category page ', category,menu})   // destructing
});
categoryRouter.route('/details').get((req,res)=>{     
    res.send("category details")
});
return categoryRouter    // return it 
}

module.exports = router;    // export the data 