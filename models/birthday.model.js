import mongoose from "mongoose";

const birthdaySchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, "Email is required"],
	},
	friend: {
		type: String,
		required: [true, "Friend's name is required"],
	},
	day: {
		type: Number,
		required: [true, "Day is required"],
		min: 1,
		max: 31,
	},
	month: {
		type: Number,
		required: [true, "Month is required"],
		min: 1,
		max: 12,
	},
});

module.exports =
	mongoose.models.Birthday || mongoose.model("Birthday", birthdaySchema);
