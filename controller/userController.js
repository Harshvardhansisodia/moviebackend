import User from "../model/userModel.js"

// Create User
export const create = async(req,res)=>{
    try {
        
        const userData = new User(req.body);
        if(!userData){
            return res.status(404).json({msg:"UserDataNotFound"})
        }

        const savedData = await userData.save(); 
        res.status(200).json(savedData);

    } catch (error) {
        res.status(500).json({error:error});
    }
}


// Get All User

export const getAll = async(req,res)=>{
    try {
        
        const userData = await User.find();
        if(!userData){
            return res.status(404).json({msg:"User Data Not Found"});
        }
        
        res.status(200).json(userData);
        
    } catch (error) {
        res.status(500).json({error:error});
    }
}

// Get Single User


export const getOne = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist){
            return res.status(404).json({msg:"User Not Found!"});
        }

        res.status(200).json(userExist);


    } catch (error) {
        res.status(500).json({error:error});
    }
}

// Update User

export const update = async(req,res)=>{
    try {
        
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"User Not Found!"});
        }

        const updatedData = await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updatedData);


    } catch (error) {
        res.status(500).json({error:error});
    }
}

// Delete User


export const deleteUser = async(req,res)=>{
    try {
        
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"User Not Found!"});
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({msg: "User Deleted Successfully!"})


    } catch (error) {
        res.status(500).json({error:error});
    }
}