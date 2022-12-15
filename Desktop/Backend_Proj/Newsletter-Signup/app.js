const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { post } = require("request");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static("usability_zeotec"));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/signup.html");
})
app.post('/',function(req,res){
    const fname = req.body.fname;
    const sname = req.body.sname;
    const email = req.body.email;
    console.log(fname , sname , email);
    var data = {
        members: [
            {
                email_address : email,
                status: "subscribed",
                merge_fields:{
                    FNAME: fname,
                    LNAME: sname
                }
            }
        ]
    }
    const jsondata = JSON.stringify(data);
    const url = "https://us11.api.mailchimp.com/3.0/lists/dae0361512";
    const option = {
        method: "POST",
        auth: "angela:4b1c3a10fb70572db77efae81917af45-us11"
    };
    const request = https.request(url,option,function(response){
        const status = response.statusCode;
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
        if(status===200){
            res.sendFile(__dirname+"/success.html");
        }
        else{
            res.sendFile(__dirname+"/failure.html");
        }

    })
    request.write(jsondata);
    request.end();
})
app.listen(3000,function(){
    console.log("Server running at Port 3000");
})





// 4b1c3a10fb70572db77efae81917af45-us11
//dae0361512