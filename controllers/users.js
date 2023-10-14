const UserModel = require('../helpers/UserModel');



const registerUser = async(req, res) =>{
    
    const Name = req.body.name;
    const BGroup = req.body.bgroup;
    const DOB = req.body.dob;
    const Email = req.body.email;
    const Password = req.body.password;
    const type = req.body.type;

    const result = await UserModel.addUser(Name, BGroup, DOB, Email, Password, type);

    //Says internal server error if user already exists, says OK if user is new, can change whenever if need arises
    res.send(result);
}

const deleteUser = async(req, res) => {
    const email = req.body.email;

    const result = await UserModel.removeUser(email);
    res.send(result);
}

const login = async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const result = await UserModel.attemptLogin(email, password);

    res.send(result);
}

const addReport = async(req, res) => {
    const doctor_id = req.body.d_id;
    const email = req.body.email;
    const diagnosis = req.body.diagnosis;
    const prescriptions = req.body.prescriptions;

    const output = await UserModel.generateReport(email, doctor_id, prescriptions, diagnosis);

    res.send(output);
}

const getAllReports = async(req, res) =>{
    const user_id = req.body.userid;
    const output = await UserModel.fetchAllReports(user_id);

    res.send(output);
}

module.exports = {
    registerUser, 
    deleteUser,
    login,
    addReport,
    getAllReports
};