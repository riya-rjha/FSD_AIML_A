const mongoose = require("mongoose");
const mongo_url = "mongodb://localhost:27017";
mongoose.connect(mongo_url)
.then(() => {
    console.log("MONGODB connected successfully");
})
.catch((err) => {
    console.log("DB Error", err.message);
})

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        require: true
    }
})
const Student = mongoose.model("students", studentSchema);

const createStudent = async () => {
    try {
        const newStudent = new Student({
            name: "Alok Yadav",
            email: "alok@gmail.com",
            age: 20
        })
        await newStudent.save();
        console.log("Student created successfully")
    } catch (error) {
        console.log("Error", error.message)
    }
}
// createStudent();

const getStudent = async () => {
    try {
        const students = await Student.find();
        console.log("Students: ", students);
    } catch (error) {
        console.log("Studnet data fetching error", error.message);
    }
}
// getStudent();

const updateStudent = () => {
    try {
        const updatedStu = Student.findOneAndUpdate({email: "alok@gmail.com"}, {$set: {age: 25}}, {new: true});
        console.log("Student updated successfully", updatedStu)
    } catch (error) {
        console.log("Student updation error", error.message);
    }
};