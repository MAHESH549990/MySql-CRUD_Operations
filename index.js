const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");
const express=require("express");
const app=express();
const path=require("path");
const methodOverride=require("method-override");


app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
const connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'delta_user',
  password:'mahesh7668bhatt'
});

let  getRanodomUser=()=>{
  return[
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

let port="8080";
app.listen(port,()=>{
  console.log("App is listening at port "+port);
})

//Total USER
app.get("/",(req,res)=>{
  let q=`SELECT COUNT(*) FROM user`;
  try{
  connection.query(q,(err,result)=>{
   if(err) throw err;
   let results=(result[0] ["COUNT(*)"]);
   res.render("home.ejs",{results});
})
}catch(err){
   console.log(err);
   res.send("Some error came in DB");
}
})

//SHOW users

app.get("/user",(req,res)=>{
  let q=`SELECT * FROM user`;
  try{
  connection.query(q,(err,users)=>{
   if(err) throw err;
   res.render("showusers.ejs",{users});
})
}catch(err){
   console.log(err);
   res.send("Some error came in DB");
}
})

//Edit username
app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`SELECT * FROM user WHERE id='${id}'`;
  try{
  connection.query(q,(err,result)=>{
   if(err) throw err;
   let user=result[0];
   res.render("edit.ejs",{user});
})
}catch(err){
   console.log(err);
   res.send("Some error came in DB");
}
});

//UPDate username
app.patch("/user/:id",(req,res)=>{
  let {id}=req.params;
  let {password:formpassword,name:newname}=req.body;
  let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
  connection.query(q,(err,result)=>{
   if(err) throw err;
   let user=result[0];
   if(formpassword!=user.password){
    res.send("Wrong Password! Please try again?");
   }
   else{
    let q2=`UPDATE user SET name='${newname}' WHERE id='${id}'`;
    connection.query(q2,(err,result)=>{
    if(err) throw err;
    res.redirect("/user");
    });
   }
});
}catch(err){
   console.log(err);
   res.send("Some error came in DB");
}

});

//ADD new user
app.get("/user/new",(req,res)=>{
  res.render("newuser.ejs");
});


app.post("/user",(req,res)=>{
  let {id,name,email,password}=req.body;
  let q=`INSERT INTO user (id,name,email,password) 
  VALUES('${id}','${name}','${email}','${password}')`;
  try{
  connection.query(q,(err,result)=>{
   if(err) throw err;
   res.redirect("/user");
});
}catch(err){
   console.log(err);
  res.send("Some error came in DB");
}
});



//DELETE USER

app.get("/user/:id/delete",(req,res)=>{
  let {id}=req.params;
  let q=`SELECT * FROM user WHERE id='${id}'`;
  try{
  connection.query(q,(err,result)=>{
   if(err) throw err;
   let user=result[0];
   res.render("deleteuser.ejs",{user});
})
}catch(err){
   console.log(err);
   res.send("Some error came in DB");
}
});

app.delete("/user/:id",(req,res)=>{
  let {id}=req.params;
  let {email:emailnew,password:passwordnew}=req.body;
  let q=`SELECT * FROM user WHERE id='${id}'`;
  try{
  connection.query(q,(err,result)=>{
   if(err) throw err;
   let user=result[0];
   if(emailnew != user.email || passwordnew !=user.password){
    res.send("Wrong Username & password");
   }
   else{
    let q2=`DELETE FROM user WHERE id='${id}'`;
    connection.query(q2,(err,result)=>{
      if(err) throw err;
      res.redirect("/user");
    });
   } 
});
}catch(err){
   console.log(err);
   res.send("Some error came in DB");
}
});

 


//insert new data

// try{
//   connection.query(q,[data],(err,result)=>{
//    if(err) throw err;
//    console.log(result);
// })
// }catch(err){
//    console.log(err);
// }

// connection.end();


