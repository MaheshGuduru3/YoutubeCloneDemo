const admin = require('../config/firebase.config')
const user = require('../Modal/databaseSchema')



module.exports  = {

   registerData :  async(req,res)=>{
         const token = req.headers.authorization;
                try{
                    await admin.auth().verifyIdToken(token)
                    .then(async (data)=>{ 
                    const result = await user.create({
                            email : data.email,
                            displayName :data.name,
                            photoURL:data.picture,
                    })
                    if(result){
                        res.json({message:"successfully created" , info:result , success:true})
                    }
                    })
                }
                catch(err){
                res.json({message: err.message})
                }
      },

    loginData : async (req,res)=>{
        const token = req.headers.authorization;
        try{
             await admin.auth().verifyIdToken(token)
             .then(async (data)=>{
                const result = await user.findOne({email : data.email})
                if(result){
                 res.status(200).json({message:"Autuorized user found",info:result , success:true})
                }
                else{
                    res.status(404).json({message:"unAutuorized user not found.please go on signin" , success : false})
                }
             })             
        }
        catch(err){
           res.status(500).json({message: err.message})
        }  
    }





}


