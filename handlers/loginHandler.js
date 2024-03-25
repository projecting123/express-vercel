import Student from '../db/model.js';
export default async function(req, res){
    try {
        const {email, password} = req.body
        const existStudent = await Student.findOne({email: email, password: password})
        if(existStudent == null){
            return res.json({statusCode: 400, message: 'Email or password is incorrect'})
        }
        res.json({statusCode: 200, message: 'Login successful'})
    } catch (error) {
        res.json({statusCode: error.statusCode, message: error.message})
    }
}