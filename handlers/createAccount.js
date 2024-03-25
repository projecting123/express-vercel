import Student from '../db/model.js';
export default async function (req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;
    const isStudentExist = await Student.findOne({ email: email });
    if (isStudentExist) {
      return res.json({ statusCode: 400, message: "Student already exists" });
    }
    const newStudent = await Student.create({
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    });
    res.json({
      statusCode: 201,
      message: "Student created successfully",
      data: newStudent,
    });
  } catch (error) {
    res.json({ statusCode: error.statusCode, message: error.message });
  }
}
