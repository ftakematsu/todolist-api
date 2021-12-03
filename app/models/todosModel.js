import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    user_id: {
        type: String, 
        required: true
    },
    name:{
        type: String,
        trim: true
    },
    status: {
        type: Number,
        required: true
    },
    due_to: {
        type: String
    },
}, {timestamps: true})

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;