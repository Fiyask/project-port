const bcrypt = require("bcrypt")
const User = require("../../model/User.model")
const jwt = require("jsonwebtoken")



const test =(req,res) =>{

    return res.send("router is working")
}

const signupController = async (req,res) =>{
    try{
        const hassedPassword=  bcrypt.hashSync (req.body.password,7)
        const user = await User.create({
            username:req.body.username,
            email:req.body.email,
            password:hassedPassword

        })

    return res .json ({user: "user created",sucess:true,user})

    }
    catch(err){
        return res.json ({msg: err.message,sucess:false})

    }


};


const signinController = async (req,res) =>{
    try{
        const {email,password} =req.body
        const Validuser = await User.findOne({ email })
        if(!Validuser)
            return res.json({msg: "user was found",sucess:false})
        const ValidPassword = bcrypt.compareSync (password, Validuser.password)
        if(!ValidPassword){
            return res. json ({msg: "password is wrong"})
        }
        const token =jwt.sign({id: Validuser._id},process.env.JWT_TOKEN)
        return res
               .cookie("access_token",token, {httponly:true})
               .json({msg: "login sucessfully", sucess: true,Validuser})

    }
    catch(err){
        return  res.json({msg: err.message, success: false})

    }
};

const updateUser = async (req,res) => {
    try{
        const hassedPassword = bcrypt.hashSync(req.body.password,7)
        const updateUser = await User.findByIdAndUpdate(req.params.id , {
    $set:{
        username: req.body.username,
        email: req.body.email,
        password: hassedPassword

    }
    }, {new: true})
     return res.json(updateUser)
    }
    catch (err){
        return  res.json({msg: err.message, success: false})
}
};

const deleteUser = async (req,res) => {
    try{
        const user = User.findById(req.params.id)
        if(!user) {
            return res.json ({msg: "user not found",sucess:false})
        }
        await User.findByIdAndDelete(req.params.id)
        return res.json({msg: "user deleted sucessfully", sucess:true})

    }
    catch(err){
        return  res.json({msg: err.message, success: false})

    }
}






module.exports ={
    test,
    signupController,
    signinController,
    updateUser,
    deleteUser
}

