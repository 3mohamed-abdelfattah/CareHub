const User = require('../models/userModel')



const UpdateUserRole = async (req, res) => {

    const id = req.params.id;
    const { setRole } = req.body;
    if(setRole !== 'Admin' && setRole !== 'User' && setRole !== 'Master' && setRole !== 'Doctor' && setRole !== 'Hospital' && setRole !== 'Lab' && setRole !== 'Center' && setRole !== 'Company' && setRole !== 'Pharmacy'){
      return res.status(400).send('invalid role')
    }
    const user = await User.findById(id);
    if(user){
      user.role = setRole;
      await user.save();
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
  
  
    const user = await User.findById(id);
    if(user){
      await user.deleteOne();
      res.json({message: 'User removed'});
    } else {
      res.status(404).send('User not found');
    }
  
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { newFirstname, newLastname, newEmail , newPassword , newRole} = req.body;
    
    const userToUpdate = await User.findById(id);
    
    if (userToUpdate)
      {
      if (newFirstname) userToUpdate.firstname = newFirstname;
      if (newLastname) userToUpdate.lastname = newLastname;
      if (newEmail) userToUpdate.email = newEmail;
      if (newRole){
        if(newRole !== 'Admin' && newRole !== 'User' && newRole !== 'Master' && newRole !== 'Doctor' && newRole !== 'Hospital' && newRole !== 'Lab' && newRole !== 'Center' && newRole !== 'Company' && newRole !== 'Pharmacy'){
          return res.status(400).send('invalid role')
        }
        userToUpdate.role = newRole;
      }
      if (newPassword) {
        userToUpdate.password = newPassword;
      }
  
      await userToUpdate.save();
      res.json(userToUpdate);
      }else {
      return res.status(404).send('User not found');
    }
  
}

module.exports = {
    UpdateUserRole,
    deleteUser,
    updateUser
}