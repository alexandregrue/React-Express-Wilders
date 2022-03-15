import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WilderSchema = new Schema ({
    name: {
        type: String,
        unique: true,
        required: [true, "The name is required"]
    },
    city: {
        type: String,
        required: [true, "The city is required"]
    },
    skills: [{
        title: String,
        votes: Number
    }],
}, {
    versionKey: false
});

export default mongoose.model("wilder", WilderSchema);

