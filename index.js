// const express = require('express');
// const async = require('async');
// const mongoose  =require('mongoose');
// const bodyParser =require('body-parser');
// const app = express();
// const Schema = mongoose.Schema;
// const port = 8000; 
// const TodoModel = require('./model/TodoModel');

// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({extended:true}));
// mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser:true, useUnifiedTopology:true});
// app.set("view engine", "ejs");


// app.get('/',(req,res)=>{

  
//         TodoModel.find({},(err,docs)=>{      
//              if(err)  
//                  return res.json(err,docs);
//             else                                 
//             res.render('todo',{ 
//                 recordItems:docs});   
//         })
// })
 
// // app.get('/view',(req,res)=>{
// //     TodoModel.find({},(err,docs)=>{
// //         if(err) res.json(err,docs);
// //         else res.render('index',{TodoModels : docs});
// //     })
// // })


// // app.get('/view',(req,res)=>{
// // TodoModel.find({},(err,docs)=>{
// //              if(err) 
// //              return res.json(err,docs);
// //              else   
// //              arr=  {TodoModels : docs};
// //              res.json(arr);
// //          })
// //         })
    



// app.post('/', async (req,res)=>{
//     const n = await req.body.name;
//     const e = await req.body.email;
//     if(n!="" && e!=""){
//         new TodoModel({name:req.body.name, email:req.body.email}).save();
//         try{   
//             res.redirect("/");          
//         }catch(err){
//             res.json(err);  
//         }
//     }
//     else{
//         res.json("!Either name or email is empty...");
//     }
// });



// app.post('/delete',(req,res)=>{
//     TodoModel.findOneAndRemove({todone: req.body.input}, function(err){
//         if(!err){
//             console.log("deletion successful");
//         }
//     });
//     res.redirect('/');
// });



// app.listen(port, ()=>{
//     console.log(`App is running at http://localhost:${port}`)
//   });
// module.exports = app;












const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const port = 3000;


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolistDB', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

TodoSchema = new Schema({
   iName:String,  
   iProfile:String,
   iReview:String
});   

let User = mongoose.model("Record", TodoSchema);
    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//set template 
app.set('view engine', 'ejs');  
//use directory
app.use('/public', express.static('public'));
//set directory
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    User.find( {} , (err,doc)=> { 
        if(err) { return res.json(err) ;}
        else { res.render('index' , { record : doc } );}
    })
})

app.post('/', async (req, res) => {
    try {
        await new User({
            iName: req.body.InputName,
            iProfile: req.body.InputProfile,
            iReview: req.body.InputReview

        }).save();
        res.redirect("http://localhost:3000/#ReviewSection");
    }
    catch (error) {
        res.status(505);
    }
});


app.listen(port, () => {
    console.log(" :: We're at 3000 now :: ");
})

module.exports = app;
