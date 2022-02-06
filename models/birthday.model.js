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
		type: String,
		required: [true, "Month is required"],
		enum: {
			values: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			],
			message: "Month is invalid",
		},
	},
});

module.exports =
	mongoose.models.Birthday || mongoose.model("Birthday", birthdaySchema);
