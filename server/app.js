require("dotenv").config();
const express = require("express");
const app=express();
const cors = require("cors")
require("./db/connection")
const PORT = process.env.PORT || 5000;

const session = require("express-session")
const passport = require("passport")
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./model/userSchema")




app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))


app.use(express.json())

//session setup

app.use(session({
    // secret:"qazxswedcvfrtgbnhyujm,kiol.;p/thappkkapproodhauuurauuuuu1029384756",
    resave:false,
    saveUninitialized:true
}))

//passport set up
app.use(passport.initialize())
app.use(passport.session())

passport.use(
    new OAuth2Strategy({
        // clientID: clientid,
        // clientSecret:clientsecret,
        callbackURL:"http://localhost:5000/auth/google/callback",
        scope:["profile","email "]
    },
    async(accessToken,refreshToken,profile,done)=>{
        console.log("dhara",profile)
        try {
            let user = await userdb.findOne({googleId:profile.id})
            if(!user){
                user= new userdb({
                    googleId:profile.id,
                    displayName:profile.displayName,
                    email:profile.emails[0].value,
                    image:profile.photos[0].value 
                });
                await user.save();
            }
            return done(null,user)
            
        } catch (error) {
            return done(error,null)
            
        }
    }
)
)


passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})


//set up google-oauth

app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}))

app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:'http://localhost:3000/dashboard',
    failureRedirect:'http://localhost:3000/login'
}))

// app.get("/login/success",async(req,res)=>{
//     console.log("requestt",req.user)
//     if(req.user){
//         req.status(200).json({message:"user logim",user:req.user})
//     }
//     else{
//         req.status(400).json({message:"user not login"})
//     }
// })

app.get("/login/success", async (req, res) => {
    console.log("requestt", req.user);
    if (req.user) {
        res.status(200).json({ message: "user login", user: req.user });
    } else {
        res.status(400).json({ message: "user not login" });
    }
});




app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})



app.get("/",(req,res)=>{
    res.status(200).json("server start")
})
