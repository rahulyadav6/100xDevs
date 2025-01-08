const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;


const schema = zod.array(zod.number());

/* zod schema for
{
    email: string =>email
    password: atleast 8 letters
    country: "IN", "US"
}
*/
const schema2 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US"))
})

app.use(express.json());

app.post("/healthcheckup",(req,res)=>{
    const kidney = req.body.kidneys;

    const response = schema.safeParse(kidney)
    // const response2 = schema2.safeParse(loginDetails)
    
    if(!response.success){
        res.status(411).json({
            msg:"Input is invalid"
        })
    }else{
        res.send({
            response
        })
    }
})

// global catch (if anything is worng with server it will get called)
app.use((err,req,res,next)=>{
    res.status(500).json({
        error:"Server error"
    })
})  

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})